import ButtonWithConfirmModal from '../../components/ButtonWithConfirmModal/ButtonWithConfirmModal';
import useLocalStorage from '../../service/useLocalStorage';

const FinancesGeneral = () => {
  const [formData, setFormData] = useLocalStorage('finances', {
    balance: '',
    depositAmount: '',
    amountOfSummaryIncomes: '',
    amountOfSummaryExtends: '',
    amountOfFreeMoney: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFinishGame = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="container">
      <table>
        <tbody>
          <tr>
            <th>Готівка</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="balance"
                type="text"
                value={formData.balance}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Депозит</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="depositAmount"
                type="text"
                value={formData.depositAmount}
                onChange={handleChange}
              />
            </td>
          </tr>
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
          <tr>
            <th>Щомісячні вільні кошти (ВК)</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="amountOfFreeMoney"
                type="text"
                value={formData.amountOfFreeMoney}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div></div>
      <ButtonWithConfirmModal
        buttonText="Завершити гру"
        modalTitle="Підтвердження завершення гри"
        modalDescription="Ви впевнені, що хочете завершити гру? Усі дані буде втрачено."
        confirmText="Так, завершити"
        cancelText="Скасувати"
        onConfirm={handleFinishGame}
      />
    </div>
  );
};

export default FinancesGeneral;
