const replic: string =
  '\nВикористайте цю можливість самостійно або запропонуйте її іншому гравцеві';

interface businessInvestment {
  type: string;
  id: string;
  cost: number;
  firstPayment: number;
  credit: number;
  passiveIncome: number;
  title: string;
  description: string;
}

interface currencyInvestment {
  type: string;
  id: string;
  exchangeRate: string;
  priceRange: string;
  title: string;
  description: string;
}

interface shareInvestment {
  type: string;
  id: string;
  dividends: number;
  currentlyPrice: number;
  priceRange: string;
  title: string;
  description: string;
}

export const listOfSmallInvestments: [
  businessInvestment | currencyInvestment | shareInvestment,
] = [
  {
    type: 'shares',
    id: 'І30',
    dividends: 0,
    currentlyPrice: 10,
    priceRange: '1-20',
    title: 'Акції "АгроСектор" (АС)',
    description:
      'Фінансове становище зміцнюється завдяки ефективним технологіям і розширення ринку збиту продукції, курсова вартість акцій підвищується! Не змарнуйте свій шанс, сьогодні кожен може придбати або продати акції за цією ціною.',
  },
  {
    type: 'business',
    id: 'І17',
    cost: 6000,
    firstPayment: 6000,
    credit: 0,
    passiveIncome: 460,
    title: 'Програмне забезпечення (ПЗ*)',
    description:
      'Відкрийте фірму із створення програмного забезпечення.' + replic,
  },
  {
    type: 'currency',
    id: 'І20',
    exchangeRate: '4',
    priceRange: '0.25-4',
    title: 'Курс євро (Є)',
    description:
      'Міжнародна політична ситуація вплинула на падіння цін на євро. Не змарнуйте свій шанс! Кожен може купити або продати 1 євро за 4',
  },
];
