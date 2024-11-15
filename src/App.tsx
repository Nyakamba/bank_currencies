import CurrencyListItem from "./components/currency-list-item/CurrencyListItem";
import SearchBar from "./components/search-bar/SearchBar";
import { MdOutlineCurrencyExchange } from "react-icons/md";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center bg-green-700 text-white py-4 h-16 pl-4 ">
        <MdOutlineCurrencyExchange className="w-12 h-12" />

        <div className="flex-1">
          <h1 className="text-[32px] text-center  font-bold">
            Currency Exchange App
          </h1>
        </div>
      </header>
      <div>
        <CurrencyListItem
          countryCode="Us"
          countryName="United state of America"
          currencyCode="USD"
          currencyName="Us dollar"
          exchangeRate={2.4}
        />
      </div>
    </div>
  );
}

export default App;
