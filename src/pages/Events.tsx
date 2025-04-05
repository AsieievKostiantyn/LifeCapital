import cls from './styles/Events.module.scss';

import { listOfExpenses } from '../data/expends';
import { listOfDemands } from '../data/demands';
import { listOfEvents } from '../data/events';

import { useState } from 'react';
import CardTemplate from '../components/CardTemplate/CardTemplate';

const Events = () => {
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [selectedDemand, setSelectedDemand] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
