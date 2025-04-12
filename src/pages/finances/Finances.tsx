import { Link, Outlet, useLocation } from 'react-router-dom';
import FinancesGeneral from './FinancesGeneral';
import cls from './Finances.module.scss';

const Finances = () => {
  const location = useLocation();

  return (
    <>
      <nav className="borderBottom">
        <ul className={cls.navUl}>
          <li>
            <Link to={'/finances'} className={cls.link} accessKey="1">
              Основна
            </Link>
          </li>
          <li>
            <Link to={'/finances/income'} className={cls.link} accessKey="2">
              Доходи
            </Link>
          </li>
          <li>
            <Link to={'/finances/extend'} className={cls.link} accessKey="3">
              Витрати
            </Link>
          </li>
        </ul>
      </nav>
      <div className={cls.mainContent}>
        {location.pathname === '/finances' ? <FinancesGeneral /> : <Outlet />}
      </div>
    </>
  );
};

export default Finances;
