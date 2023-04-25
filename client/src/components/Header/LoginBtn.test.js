import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoginBtn from "./LoginBtn";

describe("LoginBtn component", () => {
  it("renders an anchor tag with the correct href", () => {
    render(<LoginBtn />);
    const link = screen.getByRole("link", { name: /login/i });
    expect(link).toHaveAttribute("href", "./Login");
  });

  it("renders a heading element with the correct text content and ID", () => {
    render(<LoginBtn />);
    const heading = screen.getByRole("heading", { name: /login/i });
    expect(heading).toHaveTextContent("Login");
    expect(heading).toHaveAttribute("id", "login-btn");
  });

  it("navigates to the correct location when clicked", () => {
    render(<LoginBtn />);
    const link = screen.getByRole("link", { name: /login/i });
    fireEvent.click(link);
    expect(window.location.href).toBe("http://localhost/Login");
  });
});
