import useLocalStorage from '../../service/useLocalStorage';
import BusinessTableRow from './BusinessTableRow';

export interface businessTableRowType {
  id: number;
  code: string;
  firstPayment: string;
  cost: string;
  credit: string;
  passiveIncome: string;
}

const businessTableData: businessTableRowType[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: index + 1,
    code: '',
    firstPayment: '',
    cost: '',
    credit: '',
    passiveIncome: '',
  })
);

const FinancesIncome = () => {
  const [businessTable, setBusinessTable] = useLocalStorage<
    businessTableRowType[]
  >('businessTable', businessTableData);
  const [formData, setFormData] = useLocalStorage('finances', {
    salary: '',
    childSupport: '',
    depositAmount: '',
    depositIncome: '',
    goldAmount: '',
    goldIncome: '',
    intellectualPropertyAmount: '',
    intellectualPropertyIncome: '',
    ipAmount: '',
    ipIncome: '',
    savingsInsuranceAmount: '',
    savingsInsuranceIncome: '',
    riskInsuranceAmount: '',
    riskInsuranceIncome: '',
    amountOfSummaryIncomes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTableRowChange = (
    index: number,
    field: keyof businessTableRowType,
    value: string
  ) => {
    setBusinessTable((prev: businessTableRowType[]) =>
      prev.map((row: businessTableRowType, i: number) =>
        i === index ? { ...row, [field]: value } : row
      )
    );
  };

  const addNewBusinessRow = () => {
    const newRow: businessTableRowType = {
      id: businessTable.length + 1,
      code: '',
      firstPayment: '',
      cost: '',
      credit: '',
      passiveIncome: '',
    };

    setBusinessTable([...businessTable, newRow]);
  };

  return (
    <div className="container">
      <table className="incomes-table1">
        <tbody>
          <tr>
            <th>Доходи</th>
            <th>Сума в звітній період</th>
          </tr>
          <tr>
            <td className="td-text">Оплата праці</td>
            <td className="summary-td">
              <input
                name="salary"
                type="text"
                value={formData.salary}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="td-text">Допомога на дітей</td>
            <td className="summary-td">
              <input
                name="childSupport"
                type="text"
                value={formData.childSupport}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

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
              <td>
                <input
                  className="asset-input"
                  name="depositAmount"
                  type="text"
                  value={formData.depositAmount}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="income-input"
                  name="depositIncome"
                  type="text"
                  value={formData.depositIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Банківське золото 1%</td>
              <td>
                <input
                  className="asset-input"
                  name="goldAmount"
                  type="text"
                  value={formData.goldAmount}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="income-input"
                  name="goldIncome"
                  type="text"
                  value={formData.goldIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Накопичувальне страхування</td>
              <td>
                <input
                  className="asset-input"
                  name="savingsInsuranceAmount"
                  type="text"
                  value={formData.savingsInsuranceAmount}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="income-input"
                  name="savingsInsuranceIncome"
                  type="text"
                  value={formData.savingsInsuranceIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Ризикове страхування</td>
              <td>
                <input
                  className="asset-input"
                  name="intellectualPropertyAmount"
                  type="text"
                  value={formData.intellectualPropertyAmount}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="income-input"
                  name="intellectualPropertyIncome"
                  type="text"
                  value={formData.intellectualPropertyIncome}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Інтелектуальна власність</td>
              <td>
                <input
                  className="asset-input"
                  name="ipAmount"
                  type="text"
                  value={formData.ipAmount}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="income-input"
                  name="ipIncome"
                  type="text"
                  value={formData.ipIncome}
                  onChange={handleChange}
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
            {businessTable.map((row: businessTableRowType, index: number) => (
              <BusinessTableRow
                key={row.id}
                row={row}
                index={index}
                handleChange={handleTableRowChange}
              />
            ))}
          </tbody>
        </table>
        {businessTable.length < 20 ? (
          <button onClick={addNewBusinessRow}>Додати поле</button>
        ) : (
          ''
        )}
      </div>

      <table>
        <tbody>
          <tr>
            <th>Щомісячні загальні доходи (ЗД)</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="amountOfSummaryIncomes"
                type="text"
                value={formData.amountOfSummaryIncomes}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancesIncome;
