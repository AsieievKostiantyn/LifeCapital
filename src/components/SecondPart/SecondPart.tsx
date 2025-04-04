import useLocalStorage from '../../service/useLocalStorage';
import SecondPartTableRow from './SecondPartTableRow';

const initialData = Array.from({ length: 10 }, (_) => ({
  businessNmae: '',
  cost: '',
  insurence: '',
  passiveIncome: '',
}));

const SecondPart = () => {
  const [tableData, setTableData] = useLocalStorage(
    'secondPartTable',
    initialData
  );
  const [moneyValue, setMoneyValue] = useLocalStorage('secondPartMoney', '');
  const [passiveIncome, setPassiveIncome] = useLocalStorage(
    'secondPartPassiveIncome',
    ''
  );

  const handleChangeInputMoney = (e) => {
    setMoneyValue(e.target.value);
  };
  const handleChangeInputPassiveIncome = (e) => {
    setPassiveIncome(e.target.value);
  };

  const handleChange = (index, field, value) => {
    setTableData((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Готівка</th>
            <td className="summary-td">
              <input
                type="text"
                name="moneyValue"
                value={moneyValue}
                onChange={handleChangeInputMoney}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Найменування бізнесу</th>
            <th>Вартість</th>
            <th>Страхування</th>
            <th>ПД</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <SecondPartTableRow
              key={index}
              row={row}
              index={index}
              handleChange={handleChange}
            />
          ))}
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>Початковий пасивний дохід</th>
            <td className="summary-td">
              <input
                type="text"
                name="passiveIncome"
                value={passiveIncome}
                onChange={handleChangeInputPassiveIncome}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SecondPart;
