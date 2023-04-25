import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreatePost from "./CreatePost";

test("renders a CreatePost button", () => {
  const onCreatePostMock = jest.fn();
  render(<CreatePost onCreatePost={onCreatePostMock} />);
  const createButton = screen.getByRole("button", { name: "Create" });
  expect(createButton).toBeInTheDocument();
});

test("calls onCreatePost prop when clicked", () => {
  const onCreatePostMock = jest.fn();
  render(<CreatePost onCreatePost={onCreatePostMock} />);
  const createButton = screen.getByRole("button", { name: "Create" });
  fireEvent.click(createButton);
  expect(onCreatePostMock).toHaveBeenCalledTimes(1);
});
