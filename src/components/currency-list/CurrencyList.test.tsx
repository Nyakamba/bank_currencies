import { render, screen, waitFor } from "@testing-library/react";
import { Currency } from "../../types/types";
import CurrencyList from "./CurrencyList";

jest.mock("../currency-list-item/CurrencyListItem", () => {
  return jest.fn(({ countryName, currencyName }) => (
    <div>{`${countryName} - ${currencyName}`}</div>
  ));
});

const fxRates: Currency[] = [
  { currency: "USD", exchangeRate: { middle: 1.2 }, nameI18N: "US Dollar" },
  {
    currency: "CAD",
    exchangeRate: { middle: 1.5 },
    nameI18N: "Canadian Dollar",
  },
];

describe("CurrencyList Component", () => {
  it("should render the list of currencies when matching countries are found", async () => {
    render(<CurrencyList searchText="US" fxRates={fxRates} />);

    await waitFor(() => {
      expect(screen.getByText("United States - US Dollar")).toBeInTheDocument();
    });
  });

  it('should display "No currency found" message when no countries match the searchText', async () => {
    render(<CurrencyList searchText="XYZ" fxRates={fxRates} />);

    await waitFor(() => {
      expect(screen.getByText('No currency found: "XYZ"')).toBeInTheDocument();
    });
  });
});
