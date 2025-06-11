import { useEffect, useRef, useState } from 'react';
import {
  BusinessTableRowType,
  PlayersStateType,
  ShareTableRowType,
} from '../../types/db';
import { useGameSession } from '../../context/GameSession/useGameSession';
import { flattenObject } from '../../service/utils/flattenObject';
import AbTableRow from './Tables/AbTableRow';
import { AirBagTableRowType } from '../../types/db';
import FinBusinessTableRow from './Tables/FinBusinessTableRow';
import InvShareTableRow from './Tables/InvShareTableRow';
import cls from './HostPlayersState.module.scss';
import { initialData } from '../../service/gameSessions/createGameSession';
import {
  getChangeClass,
  stableStringify,
} from '../../service/utils/getChangeClass';
import { detectArrayRowChanges } from '../../service/utils/detectArrayRowChanges';
import { ArrayChangeMap } from '../../service/utils/detectArrayRowChanges';
import { useParams } from 'react-router-dom';

const flattenData = flattenObject(initialData);
type FlattenDataType = typeof flattenData;

const isObjectEmpty = (obj: object) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

const PlayersState = () => {
  const { player } = useParams();
  const {
    subscribeToPlayerState,
    detectFieldChanges,
    saveToLocalSession,
    getFromLocalSession,
  } = useGameSession();
  const [formForGlobalData, setFormForGlobalData] = useState<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Record<string, any>
  >(flattenData);
  const storedData = getFromLocalSession(`prevData-${player}`);
  const dataForUseRef = storedData
    ? { [player as string]: storedData }
    : { [player as string]: flattenData };
  const prevDataRef =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useRef<Record<string, Record<string, any>>>(dataForUseRef);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [changeMap, setChangeMap] = useState<Record<string, any>>({});
  const [arrayChanges, setArrayChanges] = useState<{
    finBusinessTable: ArrayChangeMap<BusinessTableRowType>;
    invShareTable: ArrayChangeMap<ShareTableRowType>;
    abTable: ArrayChangeMap<AirBagTableRowType>;
  }>({
    finBusinessTable: [],
    invShareTable: [],
    abTable: [],
  });

  useEffect(() => {
    if (!player) return;
    const unsub = subscribeToPlayerState<PlayersStateType>(player, (data) => {
      const flatData = flattenObject(data);
      const prev = prevDataRef.current[player] ?? flatData;

      const changes = detectFieldChanges(prev, flatData);
      const newArrayChanges = {
        finBusinessTable: detectArrayRowChanges(
          prev.finBusinessTable,
          data.finBusinessTable
        ),
        invShareTable: detectArrayRowChanges(
          prev.invShareTable,
          data.invShareTable
        ),
        abTable: detectArrayRowChanges(prev.abTable, data.abTable),
      };

      const isNoChanges =
        stableStringify(changes) ===
          stableStringify({
            finBusinessTable: 'changed',
            invShareTable: 'changed',
            abTable: 'changed',
          }) &&
        isObjectEmpty(newArrayChanges.finBusinessTable) &&
        isObjectEmpty(newArrayChanges.invShareTable) &&
        isObjectEmpty(newArrayChanges.abTable);

      if (isNoChanges) {
        const prevArrayChanges = getFromLocalSession<{
          finBusinessTable: ArrayChangeMap<BusinessTableRowType>;
          invShareTable: ArrayChangeMap<ShareTableRowType>;
          abTable: ArrayChangeMap<AirBagTableRowType>;
        }>(`prevArrayChanges-${player}`) ?? {
          finBusinessTable: [],
          invShareTable: [],
          abTable: [],
        };
        const prevChanges = getFromLocalSession(`prevChanges-${player}`) ?? {};
        setArrayChanges(prevArrayChanges);
        setChangeMap(prevChanges);
        setFormForGlobalData(flatData);
        return;
      } else {
        setArrayChanges(newArrayChanges);
        setChangeMap(changes);
        setFormForGlobalData(flatData);

        prevDataRef.current[player] = flatData;
        saveToLocalSession(`prevChanges-${player}`, changes);
        saveToLocalSession(`prevArrayChanges-${player}`, newArrayChanges);
        saveToLocalSession(`prevData-${player}`, prevDataRef.current[player]);
      }
    });
    return () => {
      unsub();
    };
  }, [
    player,
    subscribeToPlayerState,
    detectFieldChanges,
    getFromLocalSession,
    saveToLocalSession,
  ]);

  const amountOfSummaryIncomes =
    parseInt(formForGlobalData['finIncomes.salary'] || '0') +
    parseInt(formForGlobalData['finIncomes.childSupport'] || '0') +
    parseInt(formForGlobalData['finIncomes.depositIncome'] || '0') +
    parseInt(formForGlobalData['finIncomes.goldIncome'] || '0') +
    parseInt(
      formForGlobalData['finIncomes.intellectualPropertyIncome'] || '0'
    ) +
    parseInt(
      formForGlobalData.finBusinessTable.reduce(
        (value: number, i: BusinessTableRowType) =>
          value + parseInt(i.passiveIncome || '0'),
        0
      )
    );
  const isValidAmountOfSummaryIncomes: boolean =
    amountOfSummaryIncomes ===
    parseInt(formForGlobalData['finGlobal.amountOfSummaryIncomes'] || '0');

  const AmountOfSummaryExpenses =
    parseInt(formForGlobalData['finExpenses.expenseMonthlyHousehold'] || '0') +
    parseInt(formForGlobalData['finExpenses.expenseAdditional'] || '0') +
    parseInt(formForGlobalData['finExpenses.expenseChild'] || '0') +
    parseInt(formForGlobalData['finExpenses.realEstateExpense'] || '0') +
    parseInt(formForGlobalData['finExpenses.carExpense'] || '0') +
    parseInt(formForGlobalData['finExpenses.appliancesExpense'] || '0') +
    parseInt(formForGlobalData['finExpenses.furnitureExpense'] || '0') +
    parseInt(formForGlobalData['finExpenses.othersExpense'] || '0');
  const isValidAmountOfSummaryExpenses: boolean =
    AmountOfSummaryExpenses ===
    parseInt(formForGlobalData['finGlobal.amountOfSummaryExpenses'] || '0');

  const isValidAmountOfFreeMoney: boolean =
    amountOfSummaryIncomes - AmountOfSummaryExpenses ===
    parseInt(formForGlobalData['finGlobal.amountOfFreeMoney'] || '0');

  return (
    <div className={cls.container}>
      <div className="container" style={{ justifyContent: 'start' }}>
        <div>
          <h3 className="table-header">Основна</h3>
          <table>
            <tbody>
              <tr>
                <th>Готівка</th>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.balance', changeMap)}`}
                >
                  <input
                    className="summary-td-input"
                    name="finGlobal.balance"
                    type="text"
                    value={formForGlobalData['finGlobal.balance']}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th>Щомісячні загальні доходи (ЗД)</th>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.amountOfSummaryIncomes', changeMap)}`}
                >
                  <input
                    className={`summary-td-input ${isValidAmountOfSummaryIncomes ? cls.valid : cls.notValid}`}
                    name="finGlobal.amountOfSummaryIncomes"
                    type="text"
                    value={
                      formForGlobalData['finGlobal.amountOfSummaryIncomes']
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th>Щомісячні загальні витрати (ЗВ)</th>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.amountOfSummaryExpenses', changeMap)}`}
                >
                  <input
                    className={`summary-td-input ${isValidAmountOfSummaryExpenses ? cls.valid : cls.notValid}`}
                    name="finGlobal.amountOfSummaryExpenses"
                    type="text"
                    value={
                      formForGlobalData['finGlobal.amountOfSummaryExpenses']
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <th>Щомісячні вільні кошти (ВК)</th>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.amountOfFreeMoney', changeMap)}`}
                >
                  <input
                    className={`summary-td-input ${isValidAmountOfFreeMoney ? cls.valid : cls.notValid}`}
                    name="finGlobal.amountOfFreeMoney"
                    type="text"
                    value={formForGlobalData['finGlobal.amountOfFreeMoney']}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* finExpenses */}
        <div>
          <h3 className="table-header">Щомісячні витрати</h3>
          <table className="extends-table1">
            <thead>
              <tr>
                <th>Витрати</th>
                <th>Сума в звітній період</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-text">Щомісячні побутові витрати</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finExpenses.expenseMonthlyHousehold', changeMap)}`}
                >
                  <input
                    className="expense-input"
                    name="expenseMonthlyHousehold"
                    type="text"
                    value={
                      formForGlobalData[
                        'finExpenses.expenseMonthlyHousehold'
                      ] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Додаткові витрати</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finExpenses.expenseAdditional', changeMap)}`}
                >
                  <input
                    className="expense-input"
                    name="expenseAdditional"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.expenseAdditional'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Кіл-ть дітей</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finExpenses.expenseNumChildren', changeMap)}`}
                >
                  <input
                    className="expense-input"
                    name="expenseNumChildren"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.expenseNumChildren'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Витрати на дитину</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finExpenses.expenseChild', changeMap)}`}
                >
                  <input
                    className="expense-input"
                    name="expenseChild"
                    type="text"
                    value={formForGlobalData['finExpenses.expenseChild'] || ''}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="table-header">Кредити</h3>
          <table className="extends-table2">
            <thead>
              <tr>
                <th>Найменування кредитів (пасиви)</th>
                <th>Сума кредитів</th>
                <th>Сплата, %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-text">На нерухомість</td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.realEstateAmount',
                    changeMap
                  )}
                >
                  <input
                    className="summary-input"
                    name="realEstateAmount"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.realEstateAmount'] || ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.realEstateExpense',
                    changeMap
                  )}
                >
                  <input
                    className="expense-input"
                    name="realEstateExpense"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.realEstateExpense'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">На автомобіль</td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.carAmount',
                    changeMap
                  )}
                >
                  <input
                    className="summary-input"
                    name="carAmount"
                    type="text"
                    value={formForGlobalData['finExpenses.carAmount'] || ''}
                    readOnly
                  />
                </td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.carExpense',
                    changeMap
                  )}
                >
                  <input
                    className="expense-input"
                    name="carExpense"
                    type="text"
                    value={formForGlobalData['finExpenses.carExpense'] || ''}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">На побутову техніку</td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.appliancesAmount',
                    changeMap
                  )}
                >
                  <input
                    className="summary-input"
                    name="appliancesAmount"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.appliancesAmount'] || ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.appliancesExpense',
                    changeMap
                  )}
                >
                  <input
                    className="expense-input"
                    name="appliancesExpense"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.appliancesExpense'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">На меблі</td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.furnitureAmount',
                    changeMap
                  )}
                >
                  <input
                    className="summary-input"
                    name="furnitureAmount"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.furnitureAmount'] || ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.furnitureExpense',
                    changeMap
                  )}
                >
                  <input
                    className="expense-input"
                    name="furnitureExpense"
                    type="text"
                    value={
                      formForGlobalData['finExpenses.furnitureExpense'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Інші кредити 3%</td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.othersAmount',
                    changeMap
                  )}
                >
                  <input
                    className="summary-input"
                    name="othersAmount"
                    type="text"
                    value={formForGlobalData['finExpenses.othersAmount'] || ''}
                    readOnly
                  />
                </td>
                <td
                  className={getChangeClass<FlattenDataType>(
                    'finExpenses.othersExpense',
                    changeMap
                  )}
                >
                  <input
                    className="expense-input"
                    name="othersExpense"
                    type="text"
                    value={formForGlobalData['finExpenses.othersExpense'] || ''}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Щомісячні загальні витрати (ЗВ)</th>
              <td
                className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.amountOfSummaryExpenses', changeMap)}`}
              >
                <input
                  className={`summary-td-input ${isValidAmountOfSummaryExpenses ? cls.valid : cls.notValid}`}
                  name="finGlobal.amountOfSummaryExpenses"
                  type="text"
                  value={formForGlobalData['finGlobal.amountOfSummaryExpenses']}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container">
        {/* finIncomes */}
        <div>
          <table className="incomes-table1">
            <tbody>
              <tr>
                <th>Доходи</th>
                <th>Сума в звітній період</th>
              </tr>
              <tr>
                <td className="td-text">Оплата праці</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.salary', changeMap)}`}
                >
                  <input
                    className="summary-td-input"
                    name="finIncomes.salary"
                    type="text"
                    value={formForGlobalData['finIncomes.salary'] || ''}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Допомога на дітей</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.childSupport', changeMap)}`}
                >
                  <input
                    className="summary-td-input"
                    name="finIncomes.childSupport"
                    type="text"
                    value={formForGlobalData['finIncomes.childSupport'] || ''}
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="table-header">Активи</h3>
          <table className="incomes-table2">
            <thead>
              <tr>
                <th>Активи</th>
                <th>Сума активів</th>
                <th>Пасивний дохід (ПД)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-text">Депозитний банківський рахунок 2%</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.depositAmount', changeMap)}`}
                >
                  <input
                    className="asset-input summary-td-input"
                    name="depositAmount"
                    type="text"
                    value={formForGlobalData['finGlobal.depositAmount'] || ''}
                    readOnly
                  />
                </td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.depositIncome', changeMap)}`}
                >
                  <input
                    className="income-input summary-td-input"
                    name="depositIncome"
                    type="text"
                    value={formForGlobalData['finIncomes.depositIncome'] || ''}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Банківське золото 1%</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.goldAmount', changeMap)}`}
                >
                  <input
                    className="asset-input summary-td-input"
                    name="goldAmount"
                    type="text"
                    value={formForGlobalData['finIncomes.goldAmount'] || ''}
                    readOnly
                  />
                </td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.goldIncome', changeMap)}`}
                >
                  <input
                    className="income-input summary-td-input"
                    name="goldIncome"
                    type="text"
                    value={formForGlobalData['finIncomes.goldIncome'] || ''}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Накопичувальне страхування</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.savingsInsuranceAmount', changeMap)}`}
                >
                  <input
                    className="asset-input summary-td-input"
                    name="savingsInsuranceAmount"
                    type="text"
                    value={
                      formForGlobalData['finIncomes.savingsInsuranceAmount'] ||
                      ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.savingsInsuranceIncome', changeMap)}`}
                >
                  <input
                    className="income-input summary-td-input"
                    name="savingsInsuranceIncome"
                    type="text"
                    value={
                      formForGlobalData['finIncomes.savingsInsuranceIncome'] ||
                      ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Ризикове страхування</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.riskInsuranceAmount', changeMap)}`}
                >
                  <input
                    className="asset-input summary-td-input"
                    name="riskInsuranceAmount"
                    type="text"
                    value={
                      formForGlobalData['finIncomes.riskInsuranceAmount'] || ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.riskInsuranceIncome', changeMap)}`}
                >
                  <input
                    className="income-input summary-td-input"
                    name="riskInsuranceIncome"
                    type="text"
                    value={
                      formForGlobalData['finIncomes.riskInsuranceIncome'] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="td-text">Інтелектуальна власність</td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.intellectualPropertyAmount', changeMap)}`}
                >
                  <input
                    className="asset-input summary-td-input"
                    name="intellectualPropertyAmount"
                    type="text"
                    value={
                      formForGlobalData[
                        'finIncomes.intellectualPropertyAmount'
                      ] || ''
                    }
                    readOnly
                  />
                </td>
                <td
                  className={`summary-td ${getChangeClass<FlattenDataType>('finIncomes.intellectualPropertyIncome', changeMap)}`}
                >
                  <input
                    className="income-input summary-td-input"
                    name="intellectualPropertyIncome"
                    type="text"
                    value={
                      formForGlobalData[
                        'finIncomes.intellectualPropertyIncome'
                      ] || ''
                    }
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="table-header">Бізнес і нерухомість</h3>
          <table className="incomes-table3">
            <thead>
              <tr>
                <th>Код</th>
                <th>Перший внесок</th>
                <th>Вартість</th>
                <th>Інвестор</th>
                <th>ПД</th>
              </tr>
            </thead>
            <tbody>
              {formForGlobalData.finBusinessTable.map(
                (row: BusinessTableRowType, index: number) => (
                  <FinBusinessTableRow
                    key={row.id}
                    row={row}
                    changes={arrayChanges.finBusinessTable?.[index]}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Щомісячні загальні доходи (ЗД)</th>
              <td
                className={`summary-td ${getChangeClass<FlattenDataType>('finGlobal.amountOfSummaryIncomes', changeMap)}`}
              >
                <input
                  className={`summary-td-input ${isValidAmountOfSummaryIncomes ? cls.valid : cls.notValid}`}
                  name="finGlobal.amountOfSummaryIncomes"
                  type="text"
                  value={formForGlobalData['finGlobal.amountOfSummaryIncomes']}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container" style={{ justifyContent: 'start' }}>
        {/* shareTable */}
        <div>
          <h3 className="table-header">Цінні папери</h3>
          <table>
            <thead>
              <tr>
                <th>Код</th>
                <th>Вартість пакета</th>
                <th>Вартість однієї акції (пая)</th>
                <th>Кількість</th>
              </tr>
            </thead>
            <tbody>
              {formForGlobalData.invShareTable.map(
                (row: ShareTableRowType, index: number) => (
                  <InvShareTableRow
                    key={row.id}
                    row={row}
                    changes={arrayChanges.invShareTable?.[index]}
                  />
                )
              )}
            </tbody>
          </table>
        </div>

        {/* abTable */}
        <div>
          <h3 className="table-header">Подушка безпеки</h3>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Джерело доходу</th>
                <th>Поповнення</th>
                <th>Накопичувальна сума</th>
              </tr>
            </thead>
            <tbody>
              {formForGlobalData.abTable.map(
                (row: AirBagTableRowType, index: number) => (
                  <AbTableRow
                    key={row.id}
                    row={row}
                    changes={arrayChanges.abTable?.[index]}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayersState;
