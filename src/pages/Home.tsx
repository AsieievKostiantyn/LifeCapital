import { useState } from 'react';
import cls from './styles/Home.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';


function Home() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={`${cls.header} ${isOpen ? cls.open : ""}`}>
        <div className={cls.logo}>
          <h1>Життєвий капітал</h1>
        </div>

        <nav>
          <ul className={cls.nav}>
            <li>
              <Link to="/legend" className={cls.link} onClick={() => setIsOpen(false)}>
                Легенда гравця
              </Link>
            </li>
            <li>
              <Link to="/finances" className={cls.link} onClick={() => setIsOpen(false)}>
                Фінанси
              </Link>
            </li>
            <li>
              <Link to="/investments" className={cls.link} onClick={() => setIsOpen(false)}>
                Інвестиції
              </Link>
            </li>
            <li>
              <Link to="/events" className={cls.link} onClick={() => setIsOpen(false)}>
                Активність
              </Link>
            </li>
            <li>
              <Link to="/airbag" className={cls.link} onClick={() => setIsOpen(false)}>
                Подушка безпеки
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {isOpen && <div className={cls.overlay} onClick={() => setIsOpen(false)}></div>}

      <main className={cls.main}>
        <div className={cls.menuContainer}>
          <button className={cls.menuButton} onClick={() => setIsOpen(true)}>
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 12L20 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1>Життєвий капітал</h1>
        </div>

        {location.pathname === '/' ? <button>Начать игру</button> : <Outlet />}
      </main>
    </>
  );
}

export default Home;
