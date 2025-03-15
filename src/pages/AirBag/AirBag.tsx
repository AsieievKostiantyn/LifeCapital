import useLocalStorage from '../../service/useLocalStorage';
import AirBagTableRow from './AirBagTableRow';
import cls from './AirBag.module.scss';

const initialData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  source: '',
  replenishment: '',
  accumulatedAmount: '',
}));

const IncomeTable = () => {
  const [tableData, setTableData] = useLocalStorage('airBagTable', initialData);

  const handleChange = (index, field, value) => {
    setTableData((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className={cls.container}>
      <table className={cls.airBagTable}>
        <thead>
          <tr>
            <th>№</th>
            <th>Джерело доходу</th>
            <th>Поповнення</th>
            <th>Накопичувальна сума</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
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
