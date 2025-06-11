import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGameSession } from '../../service/gameSessions/createGameSession';
import { useAuth } from '../../context/useAuth';
import { db } from '../../service/firebase';
import { collection, getDocs } from 'firebase/firestore';
import cls from './CreateGameForm.module.scss';

interface FormData {
  sessionName: string;
  newPlayerName: string;
}

export interface AddedPlayer {
  name: string;
  email: string;
}

interface UserDoc {
  uid: string;
  displayName: string;
  email: string;
  role: string;
}

const CreateGameForm = () => {
  const { user, userData } = useAuth();
  const navigate = useNavigate();
  const [addedPlayersData, setAddedPlayersData] = useState<AddedPlayer[]>([]);
  const [allUsers, setAllUsers] = useState<UserDoc[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    resetField,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      const users: UserDoc[] = snapshot.docs.map(
        (doc) => doc.data() as UserDoc
      );
      setAllUsers(users);
    };
    fetchUsers();
  }, []);

  const onAddPlayer = () => {
    const inputName = getValues('newPlayerName').trim();
    setValidationMessage(null);

    if (!inputName) {
      setValidationMessage('Поле не може бути порожнім.');
      return;
    }

    const found = allUsers.find((u) => u.displayName === inputName);

    if (!found) {
      setValidationMessage('Користувача з таким імʼям не знайдено.');
      return;
    }

    if (addedPlayersData.find((p) => p.email === found.email)) {
      setValidationMessage('Цей гравець вже доданий.');
      return;
    }

    setAddedPlayersData((prev) => [
      ...prev,
      { name: found.displayName, email: found.email },
    ]);
    resetField('newPlayerName');
  };

  const removePlayer = (emailToRemove: string) => {
    setAddedPlayersData((prev) =>
      prev.filter((p) => p.email !== emailToRemove)
    );
  };

  const onSubmit = async (data: FormData) => {
    if (!user || !userData) {
      setError('Не авторизовано');
      return;
    }

    try {
      const sessionId = await createGameSession(
        user,
        userData,
        data.sessionName,
        addedPlayersData
      );
      navigate(`/game/${sessionId}`);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className={cls.container}>
      <h2 className={cls.title}>Створити нову гру</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.formGroup}>
          <label className={cls.label}>Назва гри</label>
          <input
            {...register('sessionName', { required: 'Назва гри обовʼязкова' })}
            className={cls.input}
            placeholder="Наприклад: Турнір #3"
          />
          {errors.sessionName && (
            <p className={cls.error}>{errors.sessionName.message}</p>
          )}
        </div>

        <div className={cls.formGroup}>
          <label className={cls.label}>Імʼя гравця</label>
          <div className={cls.form}>
            <input
              {...register('newPlayerName')}
              className={cls.input}
              placeholder="Введіть імʼя гравця"
            />
            <button type="button" className={cls.button} onClick={onAddPlayer}>
              Додати
            </button>
          </div>
          {validationMessage && (
            <p className={cls.error}>{validationMessage}</p>
          )}
        </div>

        {addedPlayersData.length > 0 && (
          <div className={cls.list}>
            <strong>Гравці:</strong>
            <ul>
              {addedPlayersData.map((player) => (
                <li key={player.email} className={cls.emailItem}>
                  <span>{player.name}</span> — <span>{player.email}</span>
                  <button
                    onClick={() => removePlayer(player.email)}
                    className={cls.removeButton}
                    title="Видалити"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button type="submit" className={`${cls.button} ${cls.primaryAction}`}>
          Створити гру
        </button>
        {error && <p className={cls.error}>{error}</p>}
      </form>
    </div>
  );
};

export default CreateGameForm;
