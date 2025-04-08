import useLocalStorage from '../../service/useLocalStorage';
import SecondPartTableRow from './SecondPartTableRow';

const emptyRow = {
  businessName: '',
  cost: '',
  insurance: '',
  passiveIncome: '',
};

const initialData = {
  tableData: Array.from({ length: 10 }, () => ({ ...emptyRow })),
  moneyValue: '',
  passiveIncome: '',
};

const SecondPart = () => {
  const [formData, setFormData] = useLocalStorage<typeof initialData>(
    'secondPartData',
    initialData
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTableInputChange = (
    index: number,
    field: keyof typeof emptyRow,
    value: string
  ) => {
    const updatedTable = [...formData.tableData];
    updatedTable[index][field] = value;
    setFormData({ ...formData, tableData: updatedTable });
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
                value={formData.moneyValue}
                onChange={handleChange}
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
          {formData.tableData.map((row: typeof emptyRow, index: number) => (
            <SecondPartTableRow
              key={index}
              row={row}
              index={index}
              onChange={handleTableInputChange}
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
                value={formData.passiveIncome}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SecondPart;
