import {
  Outlet,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useGameSession } from '../../context/GameSession/useGameSession';
import { useEffect } from 'react';
import cls from './HostPlayersState.module.scss';

const NavBar = () => {
  const { sessionData } = useGameSession();
  const location = useLocation();
  const navigate = useNavigate();
  const { player } = useParams();

  useEffect(() => {
    if (sessionData?.players?.length && location.pathname.endsWith('/stat')) {
      navigate(`${location.pathname}/${sessionData.players[0].name}`);
    }
  }, [sessionData, location.pathname, navigate]);

  return (
    <>
      <nav className="borderBottom">
        <ul className={cls.navBar}>
          {sessionData?.players?.length
            ? sessionData.players.map((p) => (
                <li
                  key={p.email}
                  className={p.name === player ? cls.active : cls.link}
                >
                  <Link to={`${p.name}`}>{p.name}</Link>
                </li>
              ))
            : ''}
        </ul>
      </nav>
      <div className={cls.main}>
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
