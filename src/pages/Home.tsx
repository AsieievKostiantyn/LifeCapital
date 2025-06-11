import { useState } from 'react';
import cls from './styles/Home.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import ButtonWithConfirmModal from '../components/ButtonWithConfirmModal/ButtonWithConfirmModal';
import Information from './Information/Information';

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, logout } = useAuth();
  const location = useLocation();

  return (
    <>
      <header className={`${cls.header} ${isOpen ? cls.open : ''}`}>
        <div>
          <div className={cls.logo}>
            <h1>Життєвий капітал</h1>
          </div>

          <nav>
            <ul className={cls.nav}>
              <li>
                <Link
                  to="/"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Інформація
                </Link>
              </li>
              <li>
                <Link
                  to="/rules"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Правила
                </Link>
              </li>
              <li>
                <Link
                  to="/games"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Мої ігри
                </Link>
              </li>

              {/* <li>
                <Link
                  to="/legend"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Легенда гравця
                </Link>
              </li>
              <li>
                <Link
                  to="/finances"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Фінанси
                </Link>
              </li>
              <li>
                <Link
                  to="/investments"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Інвестиції
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Активність
                </Link>
              </li>
              <li>
                <Link
                  to="/airbag"
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Подушка безпеки
                </Link>
              </li>
              <li>
                <Link
                  to={'/financial-freedom'}
                  className={cls.link}
                  onClick={() => setIsOpen(false)}
                >
                  Фінансова свобода
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className={cls.authDataContainer}>
          {userData ? (
            <>
              <p>{userData.displayName}</p>
              <ButtonWithConfirmModal
                buttonText="Вийти"
                modalTitle="Підтвердження виходу"
                modalDescription="Ви впевнені, що хочете вийти?"
                confirmText="Так, вийти"
                cancelText="Залишитися"
                onConfirm={logout}
              />
            </>
          ) : (
            <Link to={'./login'}>Увійти</Link>
          )}
        </div>
      </header>

      {isOpen && (
        <div className={cls.overlay} onClick={() => setIsOpen(false)}></div>
      )}

      <main className={cls.main}>
        <div className={cls.menuContainer}>
          <button className={cls.menuButton} onClick={() => setIsOpen(true)}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <p>Життєвий капітал</p>
        </div>

        {location.pathname === '/' ? <Information /> : <Outlet />}
      </main>
    </>
  );
}

export default Home;
