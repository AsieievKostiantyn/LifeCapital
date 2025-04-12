export interface PlayerLegend {
  profession: string;
  salary: number;
  children: number;
  assets: {
    deposit: number;
    gold: number;
    savingsInsurance: number;
    riskInsurance: number;
    intellectualProperty: number;
    intellectualPropertyIncome: number;
  };
  costs: {
    incomeTax: number;
    utilities: number;
    householdExpenses: number;
    totalExpenses: number;
    otherExpenses: number;
    childExpenses: number;
    credits: {
      realEstate: CreditItem;
      car: CreditItem;
      machinery: CreditItem;
      furniture: CreditItem;
      otherCredits: CreditItem;
    };
  };
}

interface CreditItem {
  amountOfCredit: number;
  interest: number;
}

export const listOfPlayersLegends = [
  {
    profession: 'Дизайнер',
    salary: 500,
    children: 1,
    assets: {
      deposit: 0,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 50,
      utilities: 70,
      householdExpenses: 190,
      totalExpenses: 310,
      otherExpenses: 0,
      childExpenses: 60,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 0,
          interest: 0,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Інженер',
    salary: 900,
    children: 2,
    assets: {
      deposit: 4000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 5000,
      intellectualPropertyIncome: 59,
    },
    costs: {
      incomeTax: 80,
      utilities: 80,
      householdExpenses: 260,
      totalExpenses: 420,
      otherExpenses: 0,
      childExpenses: 100,
      credits: {
        realEstate: {
          amountOfCredit: 43000,
          interest: 140,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 2700,
          interest: 100,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Викладач',
    salary: 600,
    children: 0,
    assets: {
      deposit: 3000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 10000,
      intellectualPropertyIncome: 50,
    },
    costs: {
      incomeTax: 70,
      utilities: 70,
      householdExpenses: 190,
      totalExpenses: 330,
      otherExpenses: 0,
      childExpenses: 90,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 8000,
          interest: 120,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 1000,
          interest: 30,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Кухар',
    salary: 300,
    children: 0,
    assets: {
      deposit: 5000,
      gold: 2000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 40,
      utilities: 50,
      householdExpenses: 140,
      totalExpenses: 230,
      otherExpenses: 0,
      childExpenses: 90,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 2450,
          interest: 50,
        },
        furniture: {
          amountOfCredit: 1500,
          interest: 40,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Менеджер',
    salary: 1100,
    children: 2,
    assets: {
      deposit: 3000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 100,
      utilities: 80,
      householdExpenses: 360,
      totalExpenses: 540,
      otherExpenses: 0,
      childExpenses: 100,
      credits: {
        realEstate: {
          amountOfCredit: 70000,
          interest: 180,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 900,
          interest: 50,
        },
        furniture: {
          amountOfCredit: 1500,
          interest: 40,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Лікар',
    salary: 600,
    children: 1,
    assets: {
      deposit: 3000,
      gold: 2000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 70,
      utilities: 60,
      householdExpenses: 180,
      totalExpenses: 310,
      otherExpenses: 0,
      childExpenses: 80,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 6000,
          interest: 100,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 2000,
          interest: 50,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Дистриб`ютор',
    salary: 1000,
    children: 1,
    assets: {
      deposit: 3000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 90,
      utilities: 90,
      householdExpenses: 390,
      totalExpenses: 570,
      otherExpenses: 0,
      childExpenses: 110,
      credits: {
        realEstate: {
          amountOfCredit: 80000,
          interest: 220,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 0,
          interest: 0,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Підприємець',
    salary: 1200,
    children: 2,
    assets: {
      deposit: 4000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 90,
      utilities: 100,
      householdExpenses: 380,
      totalExpenses: 570,
      otherExpenses: 0,
      childExpenses: 120,
      credits: {
        realEstate: {
          amountOfCredit: 45000,
          interest: 100,
        },
        car: {
          amountOfCredit: 7000,
          interest: 140,
        },
        machinery: {
          amountOfCredit: 1700,
          interest: 50,
        },
        furniture: {
          amountOfCredit: 0,
          interest: 0,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Водій',
    salary: 700,
    children: 2,
    assets: {
      deposit: 2000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 80,
      utilities: 80,
      householdExpenses: 200,
      totalExpenses: 360,
      otherExpenses: 0,
      childExpenses: 70,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 6000,
          interest: 80,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 0,
          interest: 0,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Будівельник',
    salary: 1500,
    children: 2,
    assets: {
      deposit: 4000,
      gold: 1000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 180,
      utilities: 120,
      householdExpenses: 430,
      totalExpenses: 730,
      otherExpenses: 0,
      childExpenses: 130,
      credits: {
        realEstate: {
          amountOfCredit: 90000,
          interest: 200,
        },
        car: {
          amountOfCredit: 12000,
          interest: 150,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 2000,
          interest: 60,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Працівник банку',
    salary: 600,
    children: 1,
    assets: {
      deposit: 2000,
      gold: 1000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 50,
      utilities: 70,
      householdExpenses: 220,
      totalExpenses: 340,
      otherExpenses: 0,
      childExpenses: 70,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 5000,
          interest: 80,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 1000,
          interest: 30,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Офісний працівник',
    salary: 400,
    children: 1,
    assets: {
      deposit: 2000,
      gold: 0,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 40,
      utilities: 50,
      householdExpenses: 150,
      totalExpenses: 240,
      otherExpenses: 0,
      childExpenses: 50,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 0,
          interest: 0,
        },
        machinery: {
          amountOfCredit: 1300,
          interest: 40,
        },
        furniture: {
          amountOfCredit: 1200,
          interest: 40,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Програміст',
    salary: 2000,
    children: 1,
    assets: {
      deposit: 0,
      gold: 3000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 200,
      utilities: 150,
      householdExpenses: 650,
      totalExpenses: 1000,
      otherExpenses: 0,
      childExpenses: 150,
      credits: {
        realEstate: {
          amountOfCredit: 90000,
          interest: 250,
        },
        car: {
          amountOfCredit: 25000,
          interest: 300,
        },
        machinery: {
          amountOfCredit: 7000,
          interest: 250,
        },
        furniture: {
          amountOfCredit: 2000,
          interest: 50,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
  {
    profession: 'Військовослужбовець',
    salary: 800,
    children: 2,
    assets: {
      deposit: 3000,
      gold: 1000,
      savingsInsurance: 0,
      riskInsurance: 0,
      intellectualProperty: 0,
      intellectualPropertyIncome: 0,
    },
    costs: {
      incomeTax: 80,
      utilities: 70,
      householdExpenses: 260,
      totalExpenses: 410,
      otherExpenses: 0,
      childExpenses: 90,
      credits: {
        realEstate: {
          amountOfCredit: 0,
          interest: 0,
        },
        car: {
          amountOfCredit: 6000,
          interest: 100,
        },
        machinery: {
          amountOfCredit: 0,
          interest: 0,
        },
        furniture: {
          amountOfCredit: 1400,
          interest: 50,
        },
        otherCredits: {
          amountOfCredit: 0,
          interest: 0,
        },
      },
    },
  },
];
