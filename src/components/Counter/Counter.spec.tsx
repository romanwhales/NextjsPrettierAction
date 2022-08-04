import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter ", () => {
  describe('initialized with defaultCount = 10 and description="WWW"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="WWW" />);
    });
    it("renders 'Current count: 10'", () => {
      expect(screen.getByText("Current count: 10")).toBeInTheDocument();
    });
    it("render title as 'WWW' ", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });
    describe("when the incrementor changes to 5 and '+' button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Add to Counter" }));
      });
      it("renders 'Current count: 15'", async () => {
        await waitFor(() =>
          expect(screen.getByText(/Current count: 15/)).toBeInTheDocument()
        );
      });
    });
    describe("when the incrementor changes to 25 and '-' button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}25");
        user.click(screen.getByRole("button", { name: "Decrement" }));
      });
      it("renders 'Current count: 15'", () => {
        expect(screen.getByText(/Current count: -15/)).toBeInTheDocument();
      });
    });
  });
  describe('initialized with defaultCount = 0 and description="My Counter"', () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });
    it("defaultCount = 0, and then counter = 0", () => {
      expect(screen.getByText("Current count: 0")).toBeInTheDocument();
    });

    it("render title as my 'My Counter' ", () => {
      expect(screen.getByText(/My Counter/)).toBeInTheDocument();
    });

    describe("when + is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "Add to Counter" }));
      });
      it("renders 'Current count: 1'", async () => {
        await waitFor(() =>
          expect(screen.getByText("Current count: 1")).toBeInTheDocument()
        );
      });
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        //Using the aria-label to get the button
        fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
      });
      it("renders 'Current count: -1'", () => {
        expect(screen.getByText("Current count: -1")).toBeInTheDocument();
      });
    });
  });
});
