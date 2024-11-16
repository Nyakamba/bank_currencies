import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/fx.json";
import { Currency } from "../../types/types";
import CurrencyList from "../currency-list/CurrencyList";
import SearchBar from "../search-bar/SearchBar";

const FilteredCurrency = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearchTextChange = (value: string) => {
    setSearchText(value);
    if (value === "") {
      navigate("/");
    }
  };

  const filteredCurrencies = data.fx.filter((currency) =>
    currency.nameI18N?.toLowerCase().includes(searchText.toLowerCase())
  ) as Currency[];

  return (
    <>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={handleSearchTextChange}
      />

      <CurrencyList searchText={searchText} fxRates={filteredCurrencies} />
    </>
  );
};

export default FilteredCurrency;
