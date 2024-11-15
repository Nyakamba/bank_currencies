import { useState } from "react";
import data from "../../data/fx.json";
import SearchBar from "../search-bar/SearchBar";
import CurrencyList from "../currency-list/CurrencyList";
import { Currency } from "../../types/types";

const FilteredCurrency = () => {
  const [searchText, setSearchText] = useState("");

  const filteredCurrencies = data.fx.filter((currency) =>
    currency.nameI18N?.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />

      <CurrencyList
        searchText={searchText}
        fxRates={filteredCurrencies as Currency[]}
      />
    </>
  );
};

export default FilteredCurrency;
