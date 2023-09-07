import { PayloadAction } from "@reduxjs/toolkit";
import { addTodo, removeTodo, todosSlice, updateTodo } from "../todosSlice";

const todosReducer = todosSlice.reducer;

describe("todoReducer", () => {
  it("should return correct state", () => {
    const initState = {
      items: [{ id: "1", title: "title", checked: false }],
    };
    expect(todosReducer(initState, {} as PayloadAction)).toEqual(initState);
  });
  it("should add new Todo correctly", () => {
    const newState = todosReducer({ items: [] }, addTodo({ title: "todo1" }));
    expect(newState.items[0].id).toBeDefined();
    expect(newState.items[0].title).toEqual("todo1");
    expect(newState.items[0].checked).toEqual(false);
  });
  it("should add severalTodos correctly", () => {
    const state = todosReducer({ items: [] }, addTodo({ title: "todo1" }));
    const newState = todosReducer(state, addTodo({ title: "todo2" }));
    expect(newState.items.length).toEqual(2);
  });
  it("should update Todo properly", () => {
    const state = todosReducer({ items: [] }, addTodo({ title: "todo" }));
    const currentTodo = state.items[0];
    expect(currentTodo.title).toEqual("todo");
    expect(currentTodo.checked).toEqual(false);
    const newState = todosReducer(
      state,
      updateTodo({ id: currentTodo.id, title: "todo2", checked: true })
    );
    expect(newState.items[0].id).toEqual(currentTodo.id);
    expect(newState.items[0].title).toEqual("todo2");
    expect(newState.items[0].checked).toEqual(true);
  });
  it("should remove Todo properly", () => {
    const state = todosReducer({ items: [] }, addTodo({ title: "todo" }));
    expect(state.items.length).toEqual(1);
    const newState = todosReducer(state, removeTodo({ id: state.items[0].id }));
    expect(newState.items.length).toEqual(0);
  });
});
