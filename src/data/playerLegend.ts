export interface PlayerLegendType {
  profession: string;
  salary: number;
  children: number;
  monthlyTotalIncome: number;
  monthlyTotalExpenses: number;
  monthlyFreeFunds: number;
  assets: {
    deposit: AssetItem;
    gold: AssetItem;
    savingsInsurance: AssetItem;
    riskInsurance: AssetItem;
    intellectualProperty: AssetItem;
  };
  expenses: {
    incomeTax: number;
    utilities: number;
    householdExpenses: number;
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
interface AssetItem {
  assetAmount: number;
  assetIncome: number;
}

export const listOfPlayersLegends: PlayerLegendType[] = [
  {
    profession: 'Дизайнер',
    salary: 500,
    children: 1,
    monthlyTotalIncome: 500,
    monthlyTotalExpenses: 370,
    monthlyFreeFunds: 130,
    assets: {
      deposit: {
        assetAmount: 0,
        assetIncome: 0,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 50,
      utilities: 70,
      householdExpenses: 190,
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
    monthlyTotalIncome: 1030,
    monthlyTotalExpenses: 860,
    monthlyFreeFunds: 170,
    assets: {
      deposit: {
        assetAmount: 4000,
        assetIncome: 80,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 5000,
        assetIncome: 50,
      },
    },
    expenses: {
      incomeTax: 80,
      utilities: 80,
      householdExpenses: 260,
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
    monthlyTotalIncome: 710,
    monthlyTotalExpenses: 570,
    monthlyFreeFunds: 140,
    assets: {
      deposit: {
        assetAmount: 3000,
        assetIncome: 60,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 10000,
        assetIncome: 50,
      },
    },
    expenses: {
      incomeTax: 70,
      utilities: 70,
      householdExpenses: 190,
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
    monthlyTotalIncome: 420,
    monthlyTotalExpenses: 320,
    monthlyFreeFunds: 100,
    assets: {
      deposit: {
        assetAmount: 5000,
        assetIncome: 100,
      },
      gold: {
        assetAmount: 2000,
        assetIncome: 20,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 40,
      utilities: 50,
      householdExpenses: 140,
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
    monthlyTotalIncome: 1160,
    monthlyTotalExpenses: 1010,
    monthlyFreeFunds: 150,
    assets: {
      deposit: {
        assetAmount: 3000,
        assetIncome: 60,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 100,
      utilities: 80,
      householdExpenses: 360,
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
    monthlyTotalIncome: 680,
    monthlyTotalExpenses: 540,
    monthlyFreeFunds: 140,
    assets: {
      deposit: {
        assetAmount: 3000,
        assetIncome: 60,
      },
      gold: {
        assetAmount: 2000,
        assetIncome: 20,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 70,
      utilities: 60,
      householdExpenses: 180,
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
    monthlyTotalIncome: 1060,
    monthlyTotalExpenses: 900,
    monthlyFreeFunds: 160,
    assets: {
      deposit: {
        assetAmount: 3000,
        assetIncome: 60,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 90,
      utilities: 90,
      householdExpenses: 390,
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
    monthlyTotalIncome: 1280,
    monthlyTotalExpenses: 1100,
    monthlyFreeFunds: 180,
    assets: {
      deposit: {
        assetAmount: 4000,
        assetIncome: 80,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 90,
      utilities: 100,
      householdExpenses: 380,
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
    monthlyTotalIncome: 740,
    monthlyTotalExpenses: 580,
    monthlyFreeFunds: 160,
    assets: {
      deposit: {
        assetAmount: 2000,
        assetIncome: 40,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 80,
      utilities: 80,
      householdExpenses: 200,
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
    monthlyTotalIncome: 1590,
    monthlyTotalExpenses: 1400,
    monthlyFreeFunds: 190,
    assets: {
      deposit: {
        assetAmount: 4000,
        assetIncome: 80,
      },
      gold: {
        assetAmount: 1000,
        assetIncome: 10,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 180,
      utilities: 120,
      householdExpenses: 430,
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
    monthlyTotalIncome: 650,
    monthlyTotalExpenses: 520,
    monthlyFreeFunds: 130,
    assets: {
      deposit: {
        assetAmount: 2000,
        assetIncome: 40,
      },
      gold: {
        assetAmount: 1000,
        assetIncome: 10,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 50,
      utilities: 70,
      householdExpenses: 220,
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
    monthlyTotalIncome: 440,
    monthlyTotalExpenses: 370,
    monthlyFreeFunds: 70,
    assets: {
      deposit: {
        assetAmount: 2000,
        assetIncome: 40,
      },
      gold: {
        assetAmount: 0,
        assetIncome: 0,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 40,
      utilities: 50,
      householdExpenses: 150,
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
    monthlyTotalIncome: 2030,
    monthlyTotalExpenses: 2000,
    monthlyFreeFunds: 30,
    assets: {
      deposit: {
        assetAmount: 0,
        assetIncome: 0,
      },
      gold: {
        assetAmount: 3000,
        assetIncome: 30,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 200,
      utilities: 150,
      householdExpenses: 650,
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
    monthlyTotalIncome: 870,
    monthlyTotalExpenses: 740,
    monthlyFreeFunds: 130,
    assets: {
      deposit: {
        assetAmount: 3000,
        assetIncome: 60,
      },
      gold: {
        assetAmount: 1000,
        assetIncome: 10,
      },
      savingsInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      riskInsurance: {
        assetAmount: 0,
        assetIncome: 0,
      },
      intellectualProperty: {
        assetAmount: 0,
        assetIncome: 0,
      },
    },
    expenses: {
      incomeTax: 80,
      utilities: 70,
      householdExpenses: 260,
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
