import cls from './Investments.module.scss';
import InvestmentsShareRow from './InvestmentsShareRow';
import InvestmentCardPropTable from './InvestmentCardPropTable';
import {
  BusinessInvestment,
  CurrencyInvestment,
  ShareInvestment,
} from '../../data/smallInvestments';
import { BusinessLargeInvestment } from '../../data/largeInvestments';
import { useEffect, useState } from 'react';
import PreButtonIcon from '../../components/PreButtonIcon/PreButtonIcon';
import CardTemplate from '../../components/CardTemplate/CardTemplate';
import { useSessionLocalStorage } from '../../service/hooks/useSessionLocalStorage';
import { useGameSession } from '../../context/GameSession/useGameSession';
import { ShareTableRowType } from '../../types/db';
import { useAuth } from '../../context/useAuth';

type SmallInvestment =
  | BusinessInvestment
  | CurrencyInvestment
  | ShareInvestment;

export type InvestmentType =
  | BusinessLargeInvestment
  | BusinessInvestment
  | CurrencyInvestment
  | ShareInvestment;

const shareTableData: ShareTableRowType[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: index + 1,
    code: '',
    packetCoast: '',
    sharePrice: '',
    numberOfShares: '',
  })
);

const Investments = () => {
  const { userData } = useAuth();
  const { getCardList, updateCardList, setCurrentCard } = useGameSession();
  const [isInvested, setIsInvested] = useState(false);
  // const [searchId, setSearchId] = useState('');
  const [selectedInvestment, setSelectedInvestment] =
    useSessionLocalStorage<InvestmentType | null>(
      'invSelectedInvestment',
      null
    );
  const [boughtInvestment, setBoughtInvestment] = useSessionLocalStorage<
    InvestmentType[]
  >('invBought', []);
  const [tableData, setTableData] = useSessionLocalStorage<
    typeof shareTableData
  >('invShareTable', shareTableData);

  useEffect(() => {
    if (!selectedInvestment) return;
    const alreadyBought = boughtInvestment.some(
      (investment) => investment.id === selectedInvestment.id
    );
    if (alreadyBought) setIsInvested(true);
  }, [boughtInvestment, selectedInvestment]);

  const getSmallInvestment = async () => {
    const list = await getCardList<SmallInvestment>('smallInvestments');
    const card = list.shift();
    if (!card) return;
    setSelectedInvestment(card);
    list.push(card);
    await setCurrentCard('investment', {
      card: card,
      playerAdded: userData?.displayName,
      availableToInvest: false,
    });
    await updateCardList('smallInvestments', list);
    setIsInvested(false);
  };

  const getLargeInvestment = async () => {
    const list = await getCardList<BusinessLargeInvestment>('largeInvestments');
    const card = list.shift();
    if (!card) return;
    setSelectedInvestment(card);
    list.push(card);
    await setCurrentCard('investment', {
      card: card,
      playerAdded: userData?.displayName,
      availableToInvest: false,
    });
    await updateCardList('largeInvestments', list);
    setIsInvested(false);
  };

  const buyInvestment = () => {
    if (
      selectedInvestment &&
      !boughtInvestment.some(
        (investment) => investment.id === selectedInvestment.id
      )
    ) {
      setBoughtInvestment((prevInvestments) => [
        ...prevInvestments,
        { ...selectedInvestment, inputValue: '' },
      ]);
    }

    setIsInvested(true);
  };
  const sellInvestment = (investmentId: string) => {
    setBoughtInvestment(
      boughtInvestment.filter((value) => value.id !== investmentId)
    );
  };

  const handleShareTableData = (
    index: number,
    field: keyof ShareTableRowType,
    value: string
  ) => {
    setTableData((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };
  const handleInputChange = (investmentId: string, newValue: string) => {
    setBoughtInvestment((prevInvestments) =>
      prevInvestments.map((investment) =>
        investment.id === investmentId
          ? { ...investment, inputValue: newValue }
          : investment
      )
    );
  };

  // const searchInvestment = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   const foundInvestment =
  //     listOfSmallInvestments.find(
  //       (inv) => inv.id.toLowerCase() === searchId.toLowerCase()
  //     ) ||
  //     listOfLargeInvestments.find(
  //       (inv) => inv.id.toLowerCase() === searchId.toLowerCase()
  //     );

  //   if (foundInvestment) {
  //     setSelectedInvestment(foundInvestment);
  //   } else {
  //     alert('Інвестиція не знайдена!');
  //   }
  // };

  return (
    <>
      <div className="container">
        {/* <form action="getInvestmentCard">
          <div className={cls.searchInvestmentForm}>
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Введіть ID інвестиції"
            />
            <button onClick={searchInvestment}>Знайти</button>
          </div>
        </form> */}
        <div>
          <div>
            <button
              onClick={getSmallInvestment}
              className="investmentCardBorder"
            >
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              Маленькі інвестиції
            </button>
            <button
              onClick={getLargeInvestment}
              className="investmentCardBorder"
            >
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              <PreButtonIcon bgColor={'rgba(221, 146, 6, 0.845)'} />
              Великі інвестиції
            </button>
          </div>
          <div>
            {selectedInvestment ? (
              <CardTemplate borderColor={'rgba(221, 146, 6, 0.845)'}>
                <div className={cls.investmentInfoContainer}>
                  <p>ID: {selectedInvestment.id}</p>
                  <p>{selectedInvestment.title}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: selectedInvestment.description,
                    }}
                  />
                  <InvestmentCardPropTable investment={selectedInvestment} />
                  {isInvested ? (
                    <button
                      disabled={isInvested}
                      style={{
                        cursor: 'not-allowed',
                        border: '1px solid grey',
                      }}
                    >
                      <PreButtonIcon bgColor="grey" />
                      Інвестовано
                    </button>
                  ) : (
                    <button
                      onClick={buyInvestment}
                      disabled={isInvested}
                      style={{ border: '1px solid green' }}
                    >
                      <PreButtonIcon bgColor="green" />
                      Інвестувати
                    </button>
                  )}
                </div>
              </CardTemplate>
            ) : (
              <CardTemplate
                borderColor={'rgba(221, 146, 6, 0.845)'}
              ></CardTemplate>
            )}
          </div>
        </div>
      </div>
      <div className="borderBottom" style={{ marginTop: '20px' }}></div>
      <div className="container">
        <h2 style={{ margin: '20px 0 -20px', textAlign: 'center' }}>
          Мої інвестиції
        </h2>
        <div>
          <h3 className="table-header">Бізнес та нерухомість</h3>
          <div className={cls.boughtInvestmentList}>
            {boughtInvestment.length ? (
              boughtInvestment.map((value) =>
                value.type === 'business' ? (
                  <CardTemplate
                    borderColor={'rgba(221, 146, 6, 0.845)'}
                    key={value.id}
                  >
                    <div className={cls.investmentInfoContainer}>
                      <p>ID: {value.id}</p>
                      <p>{value.title}</p>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: value.description,
                        }}
                      />
                      <InvestmentCardPropTable
                        key={value.id}
                        investment={value}
                      />
                      <input
                        type="text"
                        value={value.inputValue}
                        onChange={(e) =>
                          handleInputChange(value.id, e.target.value)
                        }
                        placeholder="Інформація про угоду"
                      />
                      <button
                        onClick={() => sellInvestment(value.id)}
                        style={{ border: '1px solid red' }}
                      >
                        <PreButtonIcon bgColor={'red'} />
                        Продати
                      </button>
                    </div>
                  </CardTemplate>
                ) : (
                  ''
                )
              )
            ) : (
              <p>У вас немає жодної інвестиції</p>
            )}
          </div>
        </div>
        <div>
          <div>
            <h3 className="table-header">Цінні папери</h3>
            <div className={cls.boughtInvestmentList}>
              {boughtInvestment.length
                ? boughtInvestment.map((value) =>
                    value.type === 'shares' || value.type === 'currency' ? (
                      <CardTemplate
                        borderColor={'rgba(221, 146, 6, 0.845)'}
                        key={value.id}
                      >
                        <div className={cls.investmentInfoContainer}>
                          <p>ID: {value.id}</p>
                          <p>{value.title}</p>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: value.description,
                            }}
                          />
                          <InvestmentCardPropTable
                            key={value.id}
                            investment={value}
                          />
                          <button
                            onClick={() => sellInvestment(value.id)}
                            style={{ border: '1px solid red' }}
                          >
                            <PreButtonIcon bgColor={'red'} />
                            Продати
                          </button>
                        </div>
                      </CardTemplate>
                    ) : (
                      ''
                    )
                  )
                : ''}
            </div>
            <table style={{ marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>Код</th>
                  <th>Вартість пакета</th>
                  <th>Вартість однієї акції (пая)</th>
                  <th>Кількість</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <InvestmentsShareRow
                    key={row.id}
                    row={row}
                    index={index}
                    handleChange={handleShareTableData}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investments;
