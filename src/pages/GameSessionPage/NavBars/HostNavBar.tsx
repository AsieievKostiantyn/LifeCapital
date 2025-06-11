import { Link } from 'react-router-dom';
import cls from '../GameSessionPage.module.scss';

interface PlayerNavBarProps {
  setIsOpen: (open: boolean) => void;
}

const HostNavBar = ({ setIsOpen }: PlayerNavBarProps) => {
  return (
    <nav>
      <ul className={cls.nav}>
        <li>
          <Link
            to="host/settings"
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Налаштування сесії
          </Link>
        </li>
        <li>
          <Link
            to="host/stat"
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Таблиці гравців
          </Link>
        </li>
        <li>
          <Link
            to="host/cards"
            className={cls.link}
            onClick={() => setIsOpen(false)}
          >
            Картки
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HostNavBar;
