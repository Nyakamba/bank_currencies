import SearchBar from "./components/search-bar/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center bg-green-700 text-white py-4 h-16 pl-4">
        <h1 className="text-[32px] font-bold">Currency Exchange App</h1>
      </header>
      <div>
        <SearchBar searchText="" onSearchTextChange={() => "sss"} />
      </div>
    </div>
  );
}

export default App;
