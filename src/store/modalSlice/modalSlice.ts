import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ModalState {
  isOpen: boolean;
  currentTodoId: string | undefined;
}

const initialState: ModalState = {
  isOpen: false,
  currentTodoId: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setCurrentTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.currentTodoId = action.payload.id;
    },
  },
});

export const { openModal, closeModal, setCurrentTodo } = modalSlice.actions;

export const selectIsModalOpen = (state: RootState) => state.modal.isOpen;
export const selectCurrentTodoId = (state: RootState) => state.modal.currentTodoId;

export default modalSlice.reducer;
