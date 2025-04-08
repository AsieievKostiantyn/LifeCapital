import cls from './styles/Events.module.scss';

import { listOfExpenses, ExpendsCard } from '../data/expenses';
import { listOfDemands, DemandsCard } from '../data/demands';
import { listOfEvents, EventsCard } from '../data/events';
import { listOfHighExpenses, HighExpensesCard } from '../data/highExpenses';

import CardTemplate from '../components/CardTemplate/CardTemplate';
import useLocalStorage from '../service/useLocalStorage';

const Events = () => {
  const [selectedDemand, setSelectedDemand] =
    useLocalStorage<DemandsCard | null>('demandsCard', null);
  const [selectedEvent, setSelectedEvent] = useLocalStorage<EventsCard | null>(
    'eventsCard',
    null
  );
  const [selectedExpense, setSelectedExpense] = useLocalStorage<
    ExpendsCard | HighExpensesCard | null
  >('expensesCard', null);
  const [isHighExpensesActive, setIsHighExpensesActive] =
    useLocalStorage<boolean>('isHighExpensesActive', false);

  const handleRandomExpense = () => {
    if (isHighExpensesActive) {
      const randomIndex = Math.floor(Math.random() * listOfHighExpenses.length);
      setSelectedExpense(listOfHighExpenses[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * listOfExpenses.length);
      setSelectedExpense(listOfExpenses[randomIndex]);
    }
  };

  const handleRandomDemand = () => {
    const randomIndex = Math.floor(Math.random() * listOfDemands.length);
    setSelectedDemand(listOfDemands[randomIndex]);
  };

  const handleRandomEvent = () => {
    const randomIndex = Math.floor(Math.random() * listOfEvents.length);
    setSelectedEvent(listOfEvents[randomIndex]);
  };

  return (
    <div className="container">
      <div className={cls.wrapper}>
        <div className={cls.cardChooseContainer}>
          <button onClick={handleRandomEvent}>Подія</button>
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
          <button onClick={handleRandomDemand}>Попит</button>
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
          <button onClick={handleRandomExpense}>Витрати</button>
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
