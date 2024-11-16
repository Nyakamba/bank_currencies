import React from "react";

interface SearchBarProps {
  searchText: string;
  onSearchTextChange: (value: string) => void;
}

const SearchBar = ({ searchText, onSearchTextChange }: SearchBarProps) => {
  const handleSearchTextChane = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    onSearchTextChange(value);

    if (value === "") {
      window.location.hash = "";
    } else {
      window.location.hash = `#search=${value}`;
    }
  };

  return (
    <div className="flex flex-row items-center sticky top-0 bg-emerald-300 shadow z-10 p-2 space-x-2">
      <div className="text-[20px] text-gary-500">Search</div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChane}
        placeholder="Search currency"
        className="w-full p-3 rounded-lg focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
