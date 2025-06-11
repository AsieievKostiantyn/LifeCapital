import { doc, updateDoc } from 'firebase/firestore';
import ButtonWithConfirmModal from '../../components/ButtonWithConfirmModal/ButtonWithConfirmModal';
import { useGameSession } from '../../context/GameSession/useGameSession';
import { useAuth } from '../../context/useAuth';
import { useSessionLocalStorage } from '../../service/hooks/useSessionLocalStorage';
import { db } from '../../service/firebase';
import { InitialDataType } from '../../service/gameSessions/createGameSession';

export type FinancesGeneralForm = {
  balance: string;
  depositAmount: string;
  amountOfSummaryIncomes: string;
  amountOfSummaryExpenses: string;
  amountOfFreeMoney: string;
};

const FinancesGeneral = () => {
  const { sessionID, getFromLocalSession } = useGameSession();
  const { userData } = useAuth();
  const [formForGlobalData, setFormForGlobalData] =
    useSessionLocalStorage<FinancesGeneralForm>('finGlobal', {
      balance: '',
      depositAmount: '',
      amountOfSummaryIncomes: '',
      amountOfSummaryExpenses: '',
      amountOfFreeMoney: '',
    });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormForGlobalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFinishGame = () => {
    localStorage.clear();
    window.location.reload();
  };

  const pushUserStateToDB = async () => {
    if (!userData) return;
    const keys: (keyof InitialDataType)[] = [
      'finGlobal',
      'finIncomes',
      'finExpenses',
      'invShareTable',
      'finBusinessTable',
      'abTable',
    ];

    const dataToUpdate: Partial<InitialDataType> = {};

    keys.forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value = getFromLocalSession<any>(key);
      if (value !== null) {
        dataToUpdate[key] = value;
      }
    });

    if (Object.keys(dataToUpdate).length === 0) {
      console.warn('Nothing to update — all fields are null.');
      return;
    }

    const docRef = doc(
      db,
      'gameSessions',
      sessionID,
      'gameState',
      userData.displayName
    );

    await updateDoc(docRef, dataToUpdate);
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
                value={formForGlobalData.balance}
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
                value={formForGlobalData.depositAmount}
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
                value={formForGlobalData.amountOfSummaryIncomes}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <th>Щомісячні загальні витрати (ЗВ)</th>
            <td className="summary-td">
              <input
                className="summary-td-input"
                name="amountOfSummaryExpenses"
                type="text"
                value={formForGlobalData.amountOfSummaryExpenses}
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
                value={formForGlobalData.amountOfFreeMoney}
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
      <button onClick={pushUserStateToDB}>Save Data</button>
    </div>
  );
};

export default FinancesGeneral;
