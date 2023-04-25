import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HomeBtn from "./HomeBtn";

describe("HomeBtn component", () => {
  it("renders an anchor tag with the correct href", () => {
    render(<HomeBtn />);
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveAttribute("href", "./");
  });

  it("renders a heading element with the correct text content and ID", () => {
    render(<HomeBtn />);
    const heading = screen.getByRole("heading", { name: /home/i });
    expect(heading).toHaveTextContent("Home");
    expect(heading).toHaveAttribute("id", "home-btn");
  });

  it("navigates to the correct location when clicked", () => {
    render(<HomeBtn />);
    const link = screen.getByRole("link", { name: /home/i });
    fireEvent.click(link);
    expect(window.location.href).toBe("http://localhost/");
  });
});
