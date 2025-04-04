import useLocalStorage from '../../service/useLocalStorage';
import cls from './Finances.module.scss';

const FinancesIncome = () => {
  const [formData, setFormData] = useLocalStorage('finances', {
    salary: '',
    childSupport: '',
    depositAmount: '',
    depositIncome: '',
    goldAmount: '',
    goldIncome: '',
    ipAmount: '',
    ipIncome: '',
    row1Code: '',
    row1FirstPayment: '',
    row1Cost: '',
    row1Credit: '',
    row1Pd: '',
    row2Code: '',
    row2FirstPayment: '',
    row2Cost: '',
    row2Credit: '',
    row2Pd: '',
    row3Code: '',
    row3FirstPayment: '',
    row3Cost: '',
    row3Credit: '',
    row3Pd: '',
    row4Code: '',
    row4FirstPayment: '',
    row4Cost: '',
    row4Credit: '',
    row4Pd: '',
    row5Code: '',
    row5FirstPayment: '',
    row5Cost: '',
    row5Credit: '',
    row5Pd: '',
    row6Code: '',
    row6FirstPayment: '',
    row6Cost: '',
    row6Credit: '',
    row6Pd: '',
    row7Code: '',
    row7FirstPayment: '',
    row7Cost: '',
    row7Credit: '',
    row7Pd: '',
    row8Code: '',
    row8FirstPayment: '',
    row8Cost: '',
    row8Credit: '',
    row8Pd: '',
    savingsInsuranceAmount: '',
    savingsInsuranceIncome: '',
    riskInsuranceAmount: '',
    riskInsuranceIncome: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row1Code"
                  type="text"
                  value={formData.row1Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row1FirstPayment"
                  type="text"
                  value={formData.row1FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row1Cost"
                  type="text"
                  value={formData.row1Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row1Credit"
                  type="text"
                  value={formData.row1Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row1Pd"
                  type="text"
                  value={formData.row1Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row2Code"
                  type="text"
                  value={formData.row2Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row2FirstPayment"
                  type="text"
                  value={formData.row2FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row2Cost"
                  type="text"
                  value={formData.row2Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row2Credit"
                  type="text"
                  value={formData.row2Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row2Pd"
                  type="text"
                  value={formData.row2Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row3Code"
                  type="text"
                  value={formData.row3Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row3FirstPayment"
                  type="text"
                  value={formData.row3FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row3Cost"
                  type="text"
                  value={formData.row3Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row3Credit"
                  type="text"
                  value={formData.row3Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row3Pd"
                  type="text"
                  value={formData.row3Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row4Code"
                  type="text"
                  value={formData.row4Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row4FirstPayment"
                  type="text"
                  value={formData.row4FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row4Cost"
                  type="text"
                  value={formData.row4Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row4Credit"
                  type="text"
                  value={formData.row4Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row4Pd"
                  type="text"
                  value={formData.row4Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row5Code"
                  type="text"
                  value={formData.row5Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row5FirstPayment"
                  type="text"
                  value={formData.row5FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row5Cost"
                  type="text"
                  value={formData.row5Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row5Credit"
                  type="text"
                  value={formData.row5Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row5Pd"
                  type="text"
                  value={formData.row5Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row6Code"
                  type="text"
                  value={formData.row6Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row6FirstPayment"
                  type="text"
                  value={formData.row6FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row6Cost"
                  type="text"
                  value={formData.row6Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row6Credit"
                  type="text"
                  value={formData.row6Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row6Pd"
                  type="text"
                  value={formData.row6Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row7Code"
                  type="text"
                  value={formData.row7Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row7FirstPayment"
                  type="text"
                  value={formData.row7FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row7Cost"
                  type="text"
                  value={formData.row7Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row7Credit"
                  type="text"
                  value={formData.row7Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row7Pd"
                  type="text"
                  value={formData.row7Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="code-input"
                  name="row8Code"
                  type="text"
                  value={formData.row8Code}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="first-payment-input"
                  name="row8FirstPayment"
                  type="text"
                  value={formData.row8FirstPayment}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="cost-input"
                  name="row8Cost"
                  type="text"
                  value={formData.row8Cost}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="credit-input"
                  name="row8Credit"
                  type="text"
                  value={formData.row8Credit}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  className="pd-input"
                  name="row8Pd"
                  type="text"
                  value={formData.row8Pd}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
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
