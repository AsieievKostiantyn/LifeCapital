const replic: string =
  '\nВикористайте цю можливість самостійно або запропонуйте її іншому гравцеві';

interface businessLargeInvestment {
  type: 'business';
  id: string;
  cost: number;
  firstPayment: number;
  credit: number;
  passiveIncome: number;
  title: string;
  description: string;
}

export const listOfLargeInvestments: businessLargeInvestment[] = [
  {
    type: 'business',
    id: 'ВІ14',
    cost: 180000,
    firstPayment: 30000,
    credit: 150000,
    passiveIncome: 1400,
    title: 'Клініка стоматології (КС*)',
    description:
      'Ви можете придбати сучасну клініку стоматології із великою клієнтською базою' +
      replic,
  },
  {
    type: 'business',
    id: 'ВІ36',
    cost: 155000,
    firstPayment: 20000,
    credit: 135000,
    passiveIncome: 1000,
    title: 'Будинок на 4 сім`ї (Б-4)',
    description:
      'Виставлений на продаж будинок на 4 сім`ї в центрі міста' +
      replic +
      'Можлива ціна продажу в подальшому - до 240000',
  },
  {
    type: 'business',
    id: 'ВІ23',
    cost: 500000,
    firstPayment: 50000,
    credit: 45000,
    passiveIncome: 3500,
    title: 'Офісний центр (ОЦ-12)',
    description:
      'Виставлена на продаж дванадцяти-поверхова офісна будівля в центрі міста' +
      replic +
      'Можлива ціна продажу в подальшому - до 1200000',
  },
];
