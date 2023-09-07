import { PayloadAction } from "@reduxjs/toolkit";
import {
  modalSlice,
  openModal,
  setCurrentTodo,
  setIsClosing,
  setIsOpening,
} from "../modalSlice";

const modalReducer = modalSlice.reducer;

const initState = {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  currentTodoId: undefined,
};

describe("modalReducer", () => {
  it("should return correct state", () => {
    expect(modalReducer(initState, {} as PayloadAction)).toEqual(initState);
  });
  it("should opearate with state correctly", () => {
    const state1 = modalReducer(initState, setIsClosing(true));
    const state2 = modalReducer(state1, setIsOpening(true));
    const state3 = modalReducer(state2, openModal());
    const finalState = modalReducer(state3, setCurrentTodo({ id: "1" }));
    expect(finalState.currentTodoId).toEqual("1");
    expect(finalState.isOpen).toBeTruthy();
    expect(finalState.isClosing).toBeTruthy();
    expect(finalState.isOpening).toBeTruthy();
  });
});
