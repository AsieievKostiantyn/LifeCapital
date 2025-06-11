import cls from './styles/Events.module.scss';

import { ExpendsCard } from '../data/expenses';
import { DemandsCard } from '../data/demands';
import { EventsCard } from '../data/events';
import { HighExpensesCard } from '../data/highExpenses';

import CardTemplate from '../components/CardTemplate/CardTemplate';
import { useSessionLocalStorage } from '../service/hooks/useSessionLocalStorage';
import { useGameSession } from '../context/GameSession/useGameSession';
import { useAuth } from '../context/useAuth';

const Events = () => {
  const { getCardList, updateCardList, setCurrentCard } = useGameSession();
  const { userData } = useAuth();
  const [selectedDemand, setSelectedDemand] =
    useSessionLocalStorage<DemandsCard | null>('actDemands', null);
  const [selectedEvent, setSelectedEvent] =
    useSessionLocalStorage<EventsCard | null>('actEvents', null);
  const [selectedExpense, setSelectedExpense] = useSessionLocalStorage<
    ExpendsCard | HighExpensesCard | null
  >('actExpenses', null);
  const [isHighExpensesActive, setIsHighExpensesActive] =
    useSessionLocalStorage<boolean>('actToggle', false);

  const getExpense = async () => {
    if (isHighExpensesActive) {
      const list = await getCardList<HighExpensesCard>('highExpenses');
      const card = list.shift();
      if (!card) return;
      setSelectedExpense(card);
      list.push(card);
      await setCurrentCard('expense', {
        card: card,
        playerAdded: userData?.displayName,
      });
      await updateCardList('highExpenses', list);
    } else {
      const list = await getCardList<ExpendsCard>('expenses');
      const card = list.shift();
      if (!card) return;
      setSelectedExpense(card);
      list.push(card);
      await setCurrentCard('expense', {
        card: card,
        playerAdded: userData?.displayName,
      });
      await updateCardList('expenses', list);
    }
  };

  const getDemand = async () => {
    const list = await getCardList<DemandsCard>('demands');
    const card = list.shift();
    if (!card) return;
    setSelectedDemand(card);
    list.push(card);
    await setCurrentCard('demand', {
      card: card,
      playerAdded: userData?.displayName,
    });
    await updateCardList('demands', list);
  };

  const getEvent = async () => {
    const list = await getCardList<DemandsCard>('events');
    const card = list.shift();
    if (!card) return;
    setSelectedEvent(card);
    list.push(card);
    await setCurrentCard('event', {
      card: card,
      playerAdded: userData?.displayName,
    });
    await updateCardList('events', list);
  };

  return (
    <div className="container">
      <div className={cls.wrapper}>
        <div className={cls.cardChooseContainer}>
          <button onClick={getEvent}>Подія</button>
          <CardTemplate borderColor={'purple'}>
            {selectedEvent ? (
              <>
                <p>ID: {selectedEvent.id}</p>
                <div className={cls.cardInfo}>
                  <p className={cls.title}>{selectedEvent.title}</p>
                  <p
                    className={cls.description}
                    dangerouslySetInnerHTML={{
                      __html: selectedEvent.description,
                    }}
                  />
                </div>
              </>
            ) : (
              ''
            )}
          </CardTemplate>
        </div>
        <div className={cls.cardChooseContainer}>
          <button onClick={getDemand}>Попит</button>
          <CardTemplate borderColor={'#328ff3ca'}>
            {selectedDemand ? (
              <>
                <p>ID: {selectedDemand.id}</p>
                <div className={cls.cardInfo}>
                  <p className={cls.title}>{selectedDemand.title}</p>
                  <p
                    className={cls.description}
                    dangerouslySetInnerHTML={{
                      __html: selectedDemand.description,
                    }}
                  />
                  <p>Коди: {selectedDemand.codes.join(', ')}</p>
                </div>
              </>
            ) : (
              ''
            )}
          </CardTemplate>
        </div>
        <div className={cls.cardChooseContainer}>
          <div className={cls.expenseToggleWrapper}>
            <label className={cls.switch}>
              <input
                type="checkbox"
                checked={isHighExpensesActive}
                onChange={() => setIsHighExpensesActive((prev) => !prev)}
                aria-label={
                  isHighExpensesActive
                    ? 'Відображаються великі витрати'
                    : 'Відображаються малі витрати'
                }
              />
              <span className={cls.slider}></span>
            </label>

            <span
              className={`${cls.label} ${isHighExpensesActive ? cls.active : ''}`}
              aria-hidden="true"
            >
              {isHighExpensesActive ? 'Великі витрати' : 'Маленькі витрати'}
            </span>
          </div>
          <button onClick={getExpense}>Витрати</button>
          <CardTemplate borderColor={'rgb(117, 18, 18)'}>
            {selectedExpense ? (
              <>
                <p>ID: {selectedExpense.id}</p>
                <div className={cls.cardInfo}>
                  <p className={cls.title}>
                    {selectedExpense.amountOfExpenses}
                  </p>
                  <p
                    className={cls.description}
                    dangerouslySetInnerHTML={{
                      __html: selectedExpense.description,
                    }}
                  />
                </div>
              </>
            ) : (
              ''
            )}
          </CardTemplate>
        </div>
      </div>
    </div>
  );
};

export default Events;
