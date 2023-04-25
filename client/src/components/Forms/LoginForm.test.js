import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("displays error message when login fails", async () => {
    const mockErrorResponse = new Response(null, { status: 401 });
    jest.spyOn(global, "fetch").mockResolvedValue(mockErrorResponse);

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText("Username or password is wrong");
    expect(errorMessage).toBeInTheDocument();
  });

  test("dispatches setIsLoggedIn and setUserName when login succeeds", async () => {
    const mockSuccessResponse = new Response(JSON.stringify({}), { status: 200 });
    jest.spyOn(global, "fetch").mockResolvedValue(mockSuccessResponse);

    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(store.getState().isLoggedIn.value).toBe(true);
    expect(store.getState().userName.value).toBe("testuser");
  });
});
