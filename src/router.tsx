import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.tsx';
import PlayerLegend from './pages/PlayerLegend.tsx';
import Investments from './pages/Investments/Investments.tsx';
import Events from './pages/Events.tsx';

import Finances from './pages/finances/Finances.tsx';
import FinancesGeneral from './pages/finances/FinancesGeneral.tsx';
import FinancesIncome from './pages/finances/FinancesIncome.tsx';
import FinancesExtend from './pages/finances/FinancesExtend.tsx';

import AirBag from './pages/AirBag/AirBag.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/legend',
        element: <PlayerLegend />,
      },
      {
        path: '/investments',
        element: <Investments />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/finances',
        element: <Finances />,
        children: [
          {
            path: '/finances/general',
            element: <FinancesGeneral />,
          },
          {
            path: '/finances/income',
            element: <FinancesIncome />,
          },
          {
            path: '/finances/extend',
            element: <FinancesExtend />,
          },
        ],
      },
      {
        path: '/airbag',
        element: <AirBag />,
      },
    ],
  },
]);
