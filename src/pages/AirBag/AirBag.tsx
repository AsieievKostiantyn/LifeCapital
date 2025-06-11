import AirBagTableRow from './AirBagTableRow';
import cls from './AirBag.module.scss';
import { useSessionLocalStorage } from '../../service/hooks/useSessionLocalStorage';

export interface IncomeRowType {
  id: number;
  source: string;
  replenishment: string;
  accumulatedAmount: string;
}

const initialData: IncomeRowType[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  source: '',
  replenishment: '',
  accumulatedAmount: '',
}));

const IncomeTable = () => {
  const [tableData, setTableData] = useSessionLocalStorage<IncomeRowType[]>(
    'abTable',
    initialData
  );
  const [airBagValue, setAirBagValue] = useSessionLocalStorage('abValue', '');

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAirBagValue(e.target.value);
  };

  const handleChange = (
    index: number,
    field: keyof IncomeRowType,
    value: string
  ): void => {
    setTableData((prev: IncomeRowType[]) =>
      prev.map((row: IncomeRowType, i: number) =>
        i === index ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <div className="container">
      <table className={cls.airBagInputValueTable}>
        <tbody>
          <tr>
            <th>Значення подушки безпеки (6*ЗВ)</th>
            <td className="summary-td">
              <input
                type="text"
                name="airBagValue"
                value={airBagValue}
                onChange={handleChangeInput}
              />
            </td>
          </tr>
        </tbody>
      </table>
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
          {tableData.map((row: IncomeRowType, index: number) => (
            <AirBagTableRow
              key={row.id}
              row={row}
              index={index}
              handleChange={handleChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomeTable;
