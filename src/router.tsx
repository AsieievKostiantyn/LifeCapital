import { createHashRouter } from 'react-router-dom';

import Home from './pages/Home.tsx';
import PlayerLegend from './pages/PlayerLegend.tsx';
import Investments from './pages/Investments/Investments.tsx';
import Events from './pages/Events.tsx';

import Finances from './pages/finances/Finances.tsx';
import FinancesGeneral from './pages/finances/FinancesGeneral.tsx';
import FinancesIncome from './pages/finances/FinancesIncome.tsx';
import FinancesExtend from './pages/finances/FinancesExtend.tsx';

import AirBag from './pages/AirBag/AirBag.tsx';
import FinancialFreedom from './pages/FinancialFreedom/FinancialFreedom.tsx';

import LoginPage from './pages/LoginPage/LoginPage.tsx';
import RegisterPage from './pages/LoginPage/RegisterPage.tsx';
import ForgetPasswordPage from './pages/LoginPage/ForgetPasswordPage.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Rules from './pages/Rules/Rules.tsx';
import MyGames from './pages/MyGames/MyGames.tsx';
import GameSessionPage from './pages/GameSessionPage/GameSessionPage.tsx';
import CreateGameForm from './components/CreateGameForm/CreateGameForm.tsx';
import { GameSessionProvider } from './context/GameSession/GameSessionProvider.tsx';
import HostCardTable from './pages/HostCardTable/HostCardTable.tsx';
import PlayersState from './pages/HostPlayersState/HostPlayersState.tsx';
import NavBar from './pages/HostPlayersState/NavBar.tsx';
import SessionSetting from './pages/Host/SessionSettings/SessionSetting.tsx';

const playerRoutes = [
  { path: 'legend', element: <PlayerLegend /> },
  { path: 'investments', element: <Investments /> },
  { path: 'events', element: <Events /> },
  {
    path: 'finances',
    element: <Finances />,
    children: [
      { index: true, element: <FinancesGeneral /> },
      { path: 'income', element: <FinancesIncome /> },
      { path: 'extend', element: <FinancesExtend /> },
    ],
  },
  { path: 'airbag', element: <AirBag /> },
  { path: 'financial-freedom', element: <FinancialFreedom /> },
];

const hostRoutes = [
  { path: 'settings', element: <SessionSetting /> },
  { path: 'cards', element: <HostCardTable /> },
  {
    path: 'stat',
    element: <NavBar />,
    children: [
      {
        path: ':player',
        element: <PlayersState />,
      },
    ],
  },
];

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'rules',
        element: <Rules />,
      },
      {
        path: 'games',
        element: (
          <ProtectedRoute>
            <MyGames />
          </ProtectedRoute>
        ),
      },
      {
        path: 'createGame',
        element: <CreateGameForm />,
      },
    ],
  },
  {
    path: 'game/:sessionId',
    element: (
      <ProtectedRoute>
        <GameSessionProvider>
          <GameSessionPage />
        </GameSessionProvider>
      </ProtectedRoute>
    ),
    children: [
      { path: 'player', children: playerRoutes },
      { path: 'host', children: hostRoutes },
    ],
  },
  {
    path: 'login',
    element: (
      <ProtectedRoute requireUnauth>
        <LoginPage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'register',
    element: (
      <ProtectedRoute requireUnauth>
        <RegisterPage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'forget-password',
    element: <ForgetPasswordPage />,
  },
]);
