import React from "react";
import countries from "../../data/countries.json";
import CurrencyListItem from "../currency-list-item/CurrencyListItem";
import { Country, Currency } from "../../types/types";

interface filterCountryProps {
  countryList: Country[];
  filterString: string;
}

interface EnhanceCountryProps {
  countries: Country[];
  fxRates: Currency[];
}

interface CurrencyListProps {
  filterText: string;
  fxRates: Currency[];
}

const { country: countryList } = countries.countries;

export const filterCountries = ({
  countryList,
  filterString,
}: filterCountryProps) => {
  return countryList.filter(
    (country) =>
      country.currencyCode.includes(filterString) ||
      country.countryName.toLowerCase().includes(filterString.toLowerCase())
  );
};

export function enhanceCountries({ countries, fxRates }: EnhanceCountryProps) {
  return countries.map((country) => {
    const fxRate = fxRates.find(
      (rate) => rate.currency === country.currencyCode
    );
    return {
      countryName: country.countryName,
      countryCode: country.countryCode,
      currencyCode: country.currencyCode,
      exchangeRate: fxRate?.exchangeRate?.middle,
      currencyName: fxRate?.nameI18N,
    };
  });
}

const CurrencyList = ({ filterText, fxRates }: CurrencyListProps) => {
  const filterString = filterText ? filterText.toUpperCase() : "";

  const enhancedCountryList = enhanceCountries({
    countries: countryList,
    fxRates,
  });

  const filteredCountries = filterCountries({
    countryList: enhancedCountryList,
    filterString,
  });

  if (filteredCountries.length === 0) {
    const noResultText = `No currency found: "${filterText}"`;
    return <div className="">{noResultText}</div>;
  }
  return filteredCountries.map((enhancedFxRate) => (
    <CurrencyListItem
      countryCode={enhancedFxRate.countryCode}
      countryName={enhancedFxRate.countryName}
      currencyCode={enhancedFxRate.currencyCode}
      exchangeRate={enhancedFxRate.exchangeRate}
      currencyName={enhancedFxRate.currencyName}
      key={enhancedFxRate.countryCode}
    />
  ));
};

export default CurrencyList;
