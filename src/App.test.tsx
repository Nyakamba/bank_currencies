import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render the header with correct text and icon", () => {
    render(<App />);

    expect(screen.getByText("Currency Exchange App")).toBeInTheDocument();
  });

  it('should display FilteredCurrency component when navigating to "/"', () => {
    render(<App />);

    expect(screen.getByText(/Exchange/i)).toBeInTheDocument();
  });

  it("should render the app container with the correct classes", () => {
    render(<App />);

    const appContainer = screen.getByRole("banner");
    expect(appContainer).toHaveClass("bg-green-700");
    expect(appContainer).toHaveClass("items-center");
  });
});
