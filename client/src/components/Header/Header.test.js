import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import reducer from "../../reducers";

describe("Header", () => {
  it("renders correctly", () => {
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(screen.getByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sign Up" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Logout" })).not.toBeInTheDocument();
  });

  it("navigates to the correct location when Login button is clicked", () => {
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const loginButton = screen.getByRole("heading", { name: "Login" });
    userEvent.click(loginButton);
    expect(window.location.href).toBe("http://localhost/Login");
  });

  it("navigates to the correct location when Sign Up button is clicked", () => {
    const store = createStore(reducer);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const signUpButton = screen.getByRole("heading", { name: "Sign Up" });
    userEvent.click(signUpButton);
    expect(window.location.href).toBe("http://localhost/SignUp");
  });

  it("logs out the user when Logout button is clicked", () => {
    const store = createStore(reducer, { isLoggedIn: { value: true } });
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const logoutButton = screen.getByRole("heading", { name: "Logout" });
    fireEvent.click(logoutButton);
    expect(store.getState().isLoggedIn.value).toBe(false);
  });
});
