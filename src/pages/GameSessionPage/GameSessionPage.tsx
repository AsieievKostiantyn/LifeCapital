import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PlayerNavBar from './NavBars/PlayerNavBar';
import HostNavBar from './NavBars/HostNavBar';

import { useMenuToggle } from '../../service/hooks/useMenuToggle';
import { useGameSession } from '../../context/GameSession/useGameSession';
import { useAuth } from '../../context/useAuth';

function GameSessionPage() {
  const { isOpen, openMenu, setIsOpen } = useMenuToggle();
  const { sessionData } = useGameSession();
  const { user } = useAuth();

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}>
        {sessionData?.hostId === user?.uid ? (
          <HostNavBar setIsOpen={setIsOpen} />
        ) : (
          <PlayerNavBar setIsOpen={setIsOpen} />
        )}
      </Header>
      <Main openMenu={openMenu}>
        <Outlet />
      </Main>
    </>
  );
}

export default GameSessionPage;
