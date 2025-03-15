import cls from './styles/Events.module.scss';

import { listOfExpenses } from '../data/expends';
import { listOfDemands } from '../data/demands';
import { listOfEvents } from '../data/events';

import { useState } from 'react';

const Events = () => {
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedDemand, setSelectedDemand] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [savedCards, setSavedCards] = useState(null);

  const handleRandomExpense = () => {
    const randomIndex = Math.floor(Math.random() * listOfExpenses.length);
    setSelectedExpense(listOfExpenses[randomIndex]);
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
    <div className={cls.container}>
      <div className={cls.cardChooseContainer}>
        <button onClick={handleRandomEvent}>Подія</button>
        <div className={`${cls.smallCard} ${cls.eventBorder}`}>
          {selectedEvent ? (
            <>
              <p className={cls.amountOfExpenses}>{selectedEvent.title}</p>
              <p
                className={cls.description}
                dangerouslySetInnerHTML={{
                  __html: selectedEvent.description,
                }}
              />
            </>
          ) : (
            'Подія'
          )}
        </div>
      </div>
      <div className={cls.cardChooseContainer}>
        <button onClick={handleRandomDemand}>Попит</button>
        <div className={`${cls.smallCard} ${cls.demandBorder}`}>
          {selectedDemand ? (
            <>
              <p className={cls.amountOfExpenses}>{selectedDemand.title}</p>
              <p
                className={cls.description}
                dangerouslySetInnerHTML={{
                  __html: selectedDemand.description,
                }}
              />
            </>
          ) : (
            'Попит'
          )}
        </div>
      </div>
      <div className={cls.cardChooseContainer}>
        <button onClick={handleRandomExpense}>Витрати</button>
        <div className={`${cls.smallCard} ${cls.expendsBorder}`}>
          {selectedExpense ? (
            <>
              <p className={cls.amountOfExpenses}>
                {selectedExpense.amountOfExpenses}
              </p>
              <p
                className={cls.description}
                dangerouslySetInnerHTML={{
                  __html: selectedExpense.description,
                }}
              />
            </>
          ) : (
            'Витрати'
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
