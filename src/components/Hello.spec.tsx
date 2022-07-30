import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

it("renders 'Hello World'", () => {
  render(<Hello />);
  const myElement = screen.getByText(/Hello World/);
  // screen.debug();
  expect(myElement).toBeInTheDocument();
});
