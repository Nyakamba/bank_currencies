export interface Currency {
  currency: string;
  precision: number;
  nameI18N?: string;
  exchangeRate: {
    buy: number;
    middle: number;
    sell: number;
    indicator: number;
    lastModified: string;
  };
}
