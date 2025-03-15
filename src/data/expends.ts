interface expendsCard {
  id: string;
  amountOfExpenses: number;
  description: string;
}

export const listOfExpenses: expendsCard[] = [
  {
    id: 'В20',
    amountOfExpenses: 750,
    description: 'Відвідайте з дітьми парк розваг \n <b>750</b>',
  },
  {
    id: 'В31',
    amountOfExpenses: 700,
    description: 'Здивуйте своїх друзів незвичайною розвагою \n <b>700</b>',
  },
  {
    id: 'В4',
    amountOfExpenses: 620,
    description: 'Відвідайте з сім`єю піцерію \n <b>620</b>',
  },
  {
    id: 'В13',
    amountOfExpenses: 700,
    description: 'Відзначте день народження дитини в кафе \n <b>700</b>',
  },
  {
    id: 'В17',
    amountOfExpenses: 650,
    description: 'Відвідайте косметолога \n <b>650</b>',
  },
  {
    id: 'В25',
    amountOfExpenses: 850,
    description: 'Купіть модний смартфон \n <b>850</b>',
  },
  {
    id: 'В22',
    amountOfExpenses: 700,
    description:
      'Пройдіть курси іноземної мови за <b>700</b> і збільшіть розмір оплати праці на <b>50%</b>',
  },
  {
    id: 'В23',
    amountOfExpenses: 1500,
    description:
      'Купіть набір побутової техніки.\nОплатіть одноразово <b>1500</b>, або в розстрочку - перший платіж <b>500</b> та залишіть <b>1000</b> і <b>30</b> як відсотки за користування кредитом',
  },
  {
    id: 'В18',
    amountOfExpenses: 800,
    description: 'Відвідайте спектакль столичного театру \n <b>800</b>',
  },
  {
    id: 'В2',
    amountOfExpenses: 550,
    description: 'Оновіть свій імідж, відвідайте перукаря \n <b>550</b>',
  },
];
