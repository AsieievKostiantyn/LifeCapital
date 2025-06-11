import { Link } from 'react-router-dom';
import cls from '../GameSessionPage.module.scss';

interface PlayerNavBarProps {
  setIsOpen: (open: boolean) => void;
}

const PlayerNavBar = ({ setIsOpen }: PlayerNavBarProps) => {
  return (
    <nav>
      <ul className={cls.nav}>
        <li>
          <Link
            to="player/legend"
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Легенда гравця
          </Link>
        </li>
        <li>
          <Link
            to={`player/finances`}
            onClick={() => setIsOpen(false)}
            className={cls.link}
          >
            Фінанси
          </Link>
        </li>
        <li>
          <Link
            to={'player/investments'}
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Інвестиції
          </Link>
        </li>
        <li>
          <Link
            to={'player/events'}
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Активність
          </Link>
        </li>
        <li>
          <Link
            to={'player/airbag'}
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Подушка безпеки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PlayerNavBar;
