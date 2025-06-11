import { Link, Outlet } from 'react-router-dom';
import cls from './Finances.module.scss';

const Finances = () => {
  return (
    <>
      <nav className="borderBottom">
        <ul className={cls.navUl}>
          <li>
            <Link to={''} className={cls.link}>
              Основна
            </Link>
          </li>
          <li>
            <Link to={'./income'} className={cls.link}>
              Доходи
            </Link>
          </li>
          <li>
            <Link to={'./extend'} className={cls.link}>
              Витрати
            </Link>
          </li>
        </ul>
      </nav>
      <div className={cls.mainContent}>
        <Outlet />
      </div>
    </>
  );
};

export default Finances;
