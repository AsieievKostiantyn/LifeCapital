import { useEffect, useState } from 'react';
import CardTemplate from '../../components/CardTemplate/CardTemplate';
import { useGameSession } from '../../context/GameSession/useGameSession';
import InvestmentCardPropTable from '../Investments/InvestmentCardPropTable';
import cls from './HostCardTable.module.scss';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../service/firebase';
import { CurrentCards } from '../../types/db';

const HostCardTable = () => {
  const { sessionID } = useGameSession();

  const [currentCards, setCurrentCards] = useState<CurrentCards | null>(null);

  useEffect(() => {
    if (!sessionID) return;

    const currentCardsRef = doc(
      db,
      'gameSessions',
      sessionID,
      'cards',
      'currentCards'
    );

    const unsub = onSnapshot(currentCardsRef, (docSnap) => {
      if (docSnap.exists()) {
        setCurrentCards(docSnap.data());
      } else {
        setCurrentCards(null);
      }
    });

    return () => unsub();
  }, [sessionID]);

  return (
    <div className={cls.container}>
      <div className={cls.cardChooseContainer}>
        <h2 className={cls.cardTypeTitle}>Подія</h2>
        <CardTemplate borderColor={'purple'}>
          {currentCards?.event ? (
            <>
              <p>Картку витягнув гравець: {currentCards.event.playerAdded}</p>
              <p>ID: {currentCards.event.card.id}</p>
              <div className={cls.cardInfo}>
                <p className={cls.title}>{currentCards.event.card.title}</p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: currentCards.event.card.description,
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
        <h2 className={cls.cardTypeTitle}>Попит</h2>
        <CardTemplate borderColor={'#328ff3ca'}>
          {currentCards?.demand ? (
            <>
              <p>Картку витягнув гравець: {currentCards.demand.playerAdded}</p>
              <p>ID: {currentCards.demand.card.id}</p>
              <div className={cls.cardInfo}>
                <p className={cls.title}>{currentCards.demand.card.title}</p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: currentCards.demand.card.description,
                  }}
                />
                <p>Коди: {currentCards.demand.card.codes.join(', ')}</p>
              </div>
            </>
          ) : (
            ''
          )}
        </CardTemplate>
      </div>
      <div className={cls.cardChooseContainer}>
        <h2 className={cls.cardTypeTitle}>Витрати</h2>
        <CardTemplate borderColor={'rgb(117, 18, 18)'}>
          {currentCards?.expense ? (
            <>
              <p>Картку витягнув гравець: {currentCards.expense.playerAdded}</p>
              <p>ID: {currentCards.expense.card.id}</p>
              <div className={cls.cardInfo}>
                <p className={cls.title}>
                  {currentCards.expense.card.amountOfExpenses}
                </p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: currentCards.expense.card.description,
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
        <h2 className={cls.cardTypeTitle}>Інвестиції</h2>
        <CardTemplate borderColor={'rgba(221, 146, 6, 0.845)'}>
          {currentCards?.investment ? (
            <>
              <p>
                Картку витягнув гравець: {currentCards.investment.playerAdded}
              </p>
              <p>ID: {currentCards.investment.card.id}</p>
              <div className={cls.cardInfo}>
                <p className={cls.title}>
                  {currentCards.investment.card.title}
                </p>
                <p
                  className={cls.description}
                  dangerouslySetInnerHTML={{
                    __html: currentCards.investment.card.description,
                  }}
                />
                <InvestmentCardPropTable
                  investment={currentCards.investment.card}
                />
              </div>
            </>
          ) : (
            ''
          )}
        </CardTemplate>
      </div>
    </div>
  );
};

export default HostCardTable;
