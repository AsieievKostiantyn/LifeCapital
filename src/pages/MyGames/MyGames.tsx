import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../../context/useAuth';
import { db } from '../../service/firebase';
import cls from './MyGames.module.scss';
import { AddedPlayer } from '../../components/CreateGameForm/CreateGameForm';

interface GameSession {
  id: string;
  sessionName: string;
  hostId: string;
  playersData: {
    name: string;
    email: string;
  }[];
}

const MyGames = () => {
  const { user, userData } = useAuth();
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, 'gameSessions'),
      (snapshot) => {
        const newSessions: GameSession[] = [];

        snapshot.forEach((doc) => {
          const data = doc.data();
          const isHost = data.hostId === user.uid;
          const isPlayer = data.players?.some(
            (p: AddedPlayer) => p.email === user.email
          );

          if (isHost || isPlayer) {
            newSessions.push({ id: doc.id, ...data } as GameSession);
          }
        });

        setSessions(newSessions);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const goToSession = (id: string) => {
    navigate(`/game/${id}`);
  };

  const goToCreate = () => {
    navigate('/createGame');
  };

  return (
    <div className={cls.wrapper}>
      <h2 className={cls.title}>Мої ігрові сесії</h2>

      <div className={cls.grid}>
        {userData?.role === 'host' && (
          <button className={cls.createCard} onClick={goToCreate}>
            <span className={cls.plus}>+</span>
          </button>
        )}

        {sessions.length ? (
          sessions.map((session) => (
            <button
              key={session.id}
              className={cls.sessionCard}
              onClick={() => goToSession(session.id)}
            >
              {session.sessionName}
            </button>
          ))
        ) : (
          <p>
            У вас немає жодної ігрової сесії, зачекайте поки ведучий вас додасть
          </p>
        )}
      </div>
    </div>
  );
};

export default MyGames;
