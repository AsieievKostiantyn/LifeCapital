import { DemandsCard } from '../data/demands';
import { EventsCard } from '../data/events';
import { ExpendsCard } from '../data/expenses';
import { BusinessLargeInvestment } from '../data/largeInvestments';
import {
  BusinessInvestment,
  CurrencyInvestment,
  ShareInvestment,
} from '../data/smallInvestments';

export type CardsCollectionDoc =
  | 'demands'
  | 'events'
  | 'expenses'
  | 'highExpenses'
  | 'largeInvestments'
  | 'smallInvestments'
  | 'playerLegend';

export type CurrentCardType = 'investment' | 'demand' | 'event' | 'expense';

type CurrentCardEntry<T> = {
  card: T;
  playerAdded: string;
};

export type CurrentCards = {
  demand?: CurrentCardEntry<DemandsCard>;
  event?: CurrentCardEntry<EventsCard>;
  expense?: CurrentCardEntry<ExpendsCard>;
  investment?: CurrentCardEntry<
    | BusinessLargeInvestment
    | BusinessInvestment
    | CurrencyInvestment
    | ShareInvestment
  > & {
    availableToInvest: boolean;
  };
};

// Типи для підсвітки UX ведучого
export type FieldChangeStatus = 'added' | 'removed' | 'changed';
export type FieldChangeMap<T> = {
  [K in keyof T]?: FieldChangeStatus;
};

export interface BusinessTableRowType {
  id: number;
  code: string;
  firstPayment: string;
  cost: string;
  credit: string;
  passiveIncome: string;
}

export interface ShareTableRowType {
  id: number;
  code: string;
  packetCoast: string;
  sharePrice: string;
  numberOfShares: string;
}

export interface AirBagTableRowType {
  id: number;
  source: string;
  replenishment: string;
  accumulatedAmount: string;
}

export type PlayersStateType = {
  finGlobal: {
    balance: string;
    depositAmount: string;
    amountOfSummaryIncomes: string;
    amountOfSummaryExpenses: string;
    amountOfFreeMoney: string;
  };
  finIncomes: {
    salary: string;
    childSupport: string;
    depositIncome: string;
    goldAmount: string;
    goldIncome: string;
    riskInsuranceAmount: string;
    riskInsuranceIncome: string;
    intellectualPropertyAmount: string;
    intellectualPropertyIncome: string;
    savingsInsuranceAmount: string;
    savingsInsuranceIncome: string;
    amountOfSummaryIncomes: string;
  };
  finExpenses: {
    expenseMonthlyHousehold: string;
    expenseAdditional: string;
    expenseNumChildren: string;
    expenseChild: string;
    realEstateAmount: string;
    realEstateExpense: string;
    carAmount: string;
    carExpense: string;
    appliancesAmount: string;
    appliancesExpense: string;
    furnitureAmount: string;
    furnitureExpense: string;
    othersAmount: string;
    othersExpense: string;
  };
  finBusinessTable: BusinessTableRowType[];
  invShareTable: ShareTableRowType[];
  abTable: AirBagTableRowType[];
};
