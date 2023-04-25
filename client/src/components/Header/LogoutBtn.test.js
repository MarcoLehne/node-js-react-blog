import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { store } from "../../store/configureStore";
import { setIsLoggedIn } from "../../reducers/slicers/isLoggedInSlice";
import { setUserName } from "../../reducers/slicers/userName";
import LogoutBtn from "./LogoutBtn";

describe("LogoutBtn", () => {
  beforeEach(() => {
    store.dispatch(setIsLoggedIn(true));
    store.dispatch(setUserName("testuser"));
  });

  afterEach(() => {
    store.dispatch(setIsLoggedIn(false));
    store.dispatch(setUserName(null));
  });

  it("logs the user out when clicked", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: "success" }),
      })
    );

    render(<LogoutBtn />);

    const logoutButton = screen.getByRole("link", { name: /logout/i });

    fireEvent.click(logoutButton);

    expect(store.getState().isLoggedIn).toEqual(false);
    expect(store.getState().userName).toBeNull();
    expect(global.fetch).toHaveBeenCalledWith("/internal/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "testuser" }),
    });
  });
});
