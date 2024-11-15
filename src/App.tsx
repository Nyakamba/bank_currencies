import CurrencyListItem from "./components/currency-list-item/CurrencyListItem";
import SearchBar from "./components/search-bar/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center bg-green-700 text-white py-4 h-16 pl-4">
        <h1 className="text-[32px] font-bold">Currency Exchange App</h1>
      </header>
      <div>
        <CurrencyListItem
          countryCode="Us"
          countryName="USA"
          currencyCode="USD"
          currencyName="Us dollar"
          exchangeRate={2.4}
        />
      </div>
    </div>
  );
}

export default App;
