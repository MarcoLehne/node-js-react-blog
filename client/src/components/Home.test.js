import React from "react";
import { render, screen } from "@testing-library/react";
import { useAsync } from "react-use";
import { useSelector } from "react-redux";
import Home from "./Home";

jest.mock("react-use", () => ({
  useAsync: jest.fn(),
}));
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Home component", () => {
  it("renders a list of users when the data is loaded", async () => {
    const mockUsers = [
      { id: 1, name: "user1" },
      { id: 2, name: "user2" },
      { id: 3, name: "user3" },
    ];
    useAsync.mockReturnValue({
      loading: false,
      value: { users: mockUsers },
      error: null,
    });
    useSelector.mockReturnValue({ value: true });

    render(<Home />);

    const userLinks = await screen.findAllByRole("link", { name: /user/i });
    expect(userLinks.length).toBe(mockUsers.length);
    userLinks.forEach((link, index) => {
      expect(link).toHaveAttribute("href", `/${mockUsers[index].name}`);
      expect(link).toHaveTextContent(mockUsers[index].name);
    });
  });

  it("renders a loading message when the data is being fetched", () => {
    useAsync.mockReturnValue({
      loading: true,
      value: null,
      error: null,
    });
    useSelector.mockReturnValue({ value: true });

    render(<Home />);

    const loadingMessage = screen.getByText("loading");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("does not render user links when the user is not logged in", () => {
    useAsync.mockReturnValue({
      loading: false,
      value: { users: [{ id: 1, name: "user1" }] },
      error: null,
    });
    useSelector.mockReturnValue({ value: false });

    render(<Home />);

    const userLinks = screen.queryAllByRole("link", { name: /user/i });
    expect(userLinks.length).toBe(0);
  });
});
