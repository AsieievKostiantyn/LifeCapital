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

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'legend',
        element: <PlayerLegend />,
      },
      {
        path: 'investments',
        element: <Investments />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'finances',
        element: <Finances />,
        children: [
          {
            path: 'general',
            element: <FinancesGeneral />,
          },
          {
            path: 'income',
            element: <FinancesIncome />,
          },
          {
            path: 'extend',
            element: <FinancesExtend />,
          },
        ],
      },
      {
        path: 'airbag',
        element: <AirBag />,
      },
      {
        path: 'financial-freedom',
        element: <FinancialFreedom />,
      },
    ],
  },
]);
