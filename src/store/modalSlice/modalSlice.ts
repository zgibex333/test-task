import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalState {
  isOpen: boolean;
  isOpening: boolean;
  isClosing: boolean;
  currentTodoId: string | undefined;
}

const initialState: ModalState = {
  isOpen: false,
  isOpening: false,
  isClosing: false,
  currentTodoId: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    setIsOpening: (state, action: PayloadAction<boolean>) => {
      state.isOpening = action.payload;
    },
    setIsClosing: (state, action: PayloadAction<boolean>) => {
      state.isClosing = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setCurrentTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.currentTodoId = action.payload.id;
    },
  },
});

export const { openModal, closeModal, setCurrentTodo, setIsClosing, setIsOpening } = modalSlice.actions;

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectCurrentTodoId = (state: RootState) =>
  state.modal.currentTodoId;
