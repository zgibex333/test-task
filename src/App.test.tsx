import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import {
  LONG_STRING_51_SYMBOL,
  TEN_TODOS,
  renderWithProviders,
} from "./utils/test-utils";
import App from "./App";
import {
  findByRole,
  screen,
} from "@testing-library/react";

const user = userEvent.setup();

test("Should not allow to add too long todo", async () => {
  renderWithProviders(<App />);
  const input = screen.getByTestId("header-input");
  const submitBtn = screen.getByTestId("add-todo-header-btn");
  expect(input).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();
  await user.type(input, LONG_STRING_51_SYMBOL);
  expect(submitBtn).toBeDisabled();
});

test("Should add todo on page, open popup and edit it", async () => {
  const user = userEvent.setup();
  const { store } = renderWithProviders(<App />);
  const input = screen.getByTestId("header-input");
  const submitBtn = screen.getByTestId("add-todo-header-btn");
  const correctString = LONG_STRING_51_SYMBOL.slice(0, 10);
  await user.type(input, correctString);
  expect(input).toHaveValue(correctString);
  await user.click(submitBtn);
  const editBtn = screen.getByTestId("edit-item");
  await user.click(editBtn);
  const editPopupInput = screen.getByTestId("edit-popup-input");
  const savePopupBtn = screen.getByTestId("save-popup-btn");
  expect(editPopupInput).toBeInTheDocument();
  expect(savePopupBtn).toBeInTheDocument();
  await user.type(editPopupInput, correctString);
  const newValue = correctString.concat(correctString);
  expect(editPopupInput).toHaveValue(newValue);
  await user.click(await screen.findByTestId("save-popup-btn"));
  expect(store.getState().todos.items[0].title).toEqual(newValue);
});

test("Should add todo on page and delete it", async () => {
  const user = userEvent.setup();
  const { container } = renderWithProviders(<App />);
  const input = screen.getByTestId("header-input");
  const submitBtn = screen.getByTestId("add-todo-header-btn");
  const correctString = LONG_STRING_51_SYMBOL.slice(0, 10);
  await user.type(input, correctString);
  expect(input).toHaveValue(correctString);
  await user.click(submitBtn);
  await user.click(await findByRole(container, "button", { name: /remove/i }));
  expect(screen.queryByText(correctString)).not.toBeInTheDocument();
});

test("Should display correct amount of todos and remove them", async () => {
  renderWithProviders(<App />, {
    preloadedState: {
      todos: { items: [...TEN_TODOS] },
    },
  });
  const todoCollection = await screen.findAllByTestId("todo-item");
  expect(todoCollection.length).toBe(TEN_TODOS.length);
});
