import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("should render the input field with the correct value", () => {
    const props = {
      searchText: "USD",
      onSearchTextChange: jest.fn(),
    };

    render(<SearchBar {...props} />);

    const inputElement = screen.getByPlaceholderText("Search currency");
    expect(inputElement).toHaveValue("USD");
  });

  it("should call onSearchTextChange when the input changes", () => {
    const onSearchTextChange = jest.fn();
    const props = {
      searchText: "",
      onSearchTextChange,
    };

    render(<SearchBar {...props} />);

    const inputElement = screen.getByPlaceholderText("Search currency");
    fireEvent.change(inputElement, { target: { value: "EUR" } });

    expect(onSearchTextChange).toHaveBeenCalledWith("EUR");
  });

  it("should update the hash in the window.location when the input is non-empty", () => {
    const props = {
      searchText: "",
      onSearchTextChange: jest.fn(),
    };

    render(<SearchBar {...props} />);

    const inputElement = screen.getByPlaceholderText("Search currency");

    const originalHash = window.location.hash;
    Object.defineProperty(window, "location", {
      value: { hash: originalHash },
      writable: true,
    });

    fireEvent.change(inputElement, { target: { value: "USD" } });

    expect(window.location.hash).toBe("search?query=USD");
  });

  it("should clear the hash in the window.location when the input is empty", () => {
    const props = {
      searchText: "USD",
      onSearchTextChange: jest.fn(),
    };

    render(<SearchBar {...props} />);

    const inputElement = screen.getByPlaceholderText("Search currency");

    const originalHash = window.location.hash;
    Object.defineProperty(window, "location", {
      value: { hash: originalHash },
      writable: true,
    });

    fireEvent.change(inputElement, { target: { value: "" } });

    expect(window.location.hash).toBe("");
  });
});
