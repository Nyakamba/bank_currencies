import { render, screen } from "@testing-library/react";
import CurrencyListItem from "./CurrencyListItem";

describe("CurrencyListItem Component", () => {
  it("should render the country flag image with the correct src", () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
      exchangeRate: 1.2,
    };

    render(<CurrencyListItem {...props} />);

    const flagImage = screen.getByAltText("US flag");
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute("src", "/flags/us.png");
  });

  it("should render the currency code and country name correctly", () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
      exchangeRate: 1.2,
    };

    render(<CurrencyListItem {...props} />);

    const currencyElement = screen.getByText("USD");
    const countryElement = screen.getByText("United States");

    expect(currencyElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
  });

  it('should render "-" when exchangeRate is not provided', () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
    };

    render(<CurrencyListItem {...props} />);

    const exchangeRateElement = screen.getByText("-");
    expect(exchangeRateElement).toBeInTheDocument();
  });

  it("should render the exchangeRate with 4 decimal places when provided", () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
      exchangeRate: 1.234567,
    };

    render(<CurrencyListItem {...props} />);

    const exchangeRateElement = screen.getByText("1.2346");
    expect(exchangeRateElement).toBeInTheDocument();
  });

  it('should render "-" for countryName if not provided', () => {
    const props = {
      countryCode: "US",
      currencyCode: "USD",
      exchangeRate: 1.2,
      countryName: "",
    };

    render(<CurrencyListItem {...props} />);

    const countryElement = screen.getByText("-");
    expect(countryElement).toBeInTheDocument();
  });

  it("should render the currency name if provided in title", () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
      currencyName: "US Dollar",
      exchangeRate: 1.2,
    };

    render(<CurrencyListItem {...props} />);

    const currencyElement = screen.getByTitle("US Dollar");
    expect(currencyElement).toBeInTheDocument();
  });

  it("should render the currencyCode in title when currencyName is not provided", () => {
    const props = {
      countryCode: "US",
      countryName: "United States",
      currencyCode: "USD",
      exchangeRate: 1.2,
    };

    render(<CurrencyListItem {...props} />);

    const currencyElement = screen.getByTitle("USD");
    expect(currencyElement).toBeInTheDocument();
  });
});
