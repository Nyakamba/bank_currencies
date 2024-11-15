import { MdOutlineCurrencyExchange } from "react-icons/md";
import FilteredCurrency from "./components/filtered-currency-list/FilteredCurrency";

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
        <FilteredCurrency />
      </div>
    </div>
  );
}

export default App;
