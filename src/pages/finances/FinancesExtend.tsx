import useLocalStorage from '../../service/useLocalStorage';

const FinancesExtend = () => {
  const [formData, setFormData] = useLocalStorage('finances', {
    expenseTaxIncome: '',
    expenseUtilities: '',
    expenseMonthlyHousehold: '',
    expenseAdditional: '',
    expenseNumChildren: '',
    expenseChild: '',
    realEstateAmount: '',
    realEstateExpense: '',
    carAmount: '',
    carExpense: '',
    appliancesAmount: '',
    appliancesExpense: '',
    furnitureAmount: '',
    furnitureExpense: '',
    othersAmount: '',
    othersExpense: '',
    amountOfSummaryExtends: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
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
              <td className="summary-td">
                <input
                  className="expense-input"
                  name="expenseMonthlyHousehold"
                  type="text"
                  value={formData.expenseMonthlyHousehold}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Додаткові витрати</td>
              <td className="summary-td">
                <input
                  className="expense-input"
                  name="expenseAdditional"
                  type="text"
                  value={formData.expenseAdditional}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Кіл-ть дітей</td>
              <td className="summary-td">
                <input
                  className="expense-input"
                  name="expenseNumChildren"
                  type="text"
                  value={formData.expenseNumChildren}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td-text">Витрати на дитину</td>
              <td className="summary-td">
                <input
                  className="expense-input"
                  name="expenseChild"
                  type="text"
                  value={formData.expenseChild}
                  onChange={handleChange}
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
          <tr>
            <td className="td-text">На нерухомість</td>
            <td>
              <input
                className="summary-input"
                name="realEstateAmount"
                type="text"
                value={formData.realEstateAmount}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="expense-input"
                name="realEstateExpense"
                type="text"
                value={formData.realEstateExpense}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="td-text">На автомобіль</td>
            <td>
              <input
                className="summary-input"
                name="carAmount"
                type="text"
                value={formData.carAmount}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="expense-input"
                name="carExpense"
                type="text"
                value={formData.carExpense}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="td-text">На побутову техніку</td>
            <td>
              <input
                className="summary-input"
                name="appliancesAmount"
                type="text"
                value={formData.appliancesAmount}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="expense-input"
                name="appliancesExpense"
                type="text"
                value={formData.appliancesExpense}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="td-text">На меблі</td>
            <td>
              <input
                className="summary-input"
                name="furnitureAmount"
                type="text"
                value={formData.furnitureAmount}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="expense-input"
                name="furnitureExpense"
                type="text"
                value={formData.furnitureExpense}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td className="td-text">Інші кредити 3%</td>
            <td>
              <input
                className="summary-input"
                name="othersAmount"
                type="text"
                value={formData.othersAmount}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                className="expense-input"
                name="othersExpense"
                type="text"
                value={formData.othersExpense}
                onChange={handleChange}
              />
            </td>
          </tr>
        </table>
      </div>

      <table>
        <tbody>
          <tr>
            <th>Щомісячні загальні витрати (ЗВ)</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="amountOfSummaryExtends"
                type="text"
                value={formData.amountOfSummaryExtends}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FinancesExtend;
