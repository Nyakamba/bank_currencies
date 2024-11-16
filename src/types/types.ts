export interface Currency {
  currency: string;
  precision?: number;
  nameI18N?: string;
  exchangeRate: {
    buy?: number;
    middle?: number;
    sell?: number;
    indicator?: number;
    lastModified?: string;
  };
}

export interface Country {
  countryName: string;
  countryCode: string;
  currencyCode: string;
  exchangeRate?: number;
  currencyName?: string;
}

// export interface FxRate {
//   currency: string;
//   nameI18N: string;
//   exchangeRate: {
//     middle: number;
//   };
// }
