import { useAppDispatch } from "../hooks/useAppDispatch";
import { setIsClosing, setIsOpening } from "../store/modalSlice/modalSlice";
import { updateTodo } from "../store/todoSlice/todosSlice";
import EditForm from "./EditForm";
import Modal from "./Modal";

const EditModal = () => {
  const dispatch = useAppDispatch();
  const onCloseModal = () => {
    dispatch(setIsClosing(true));
    dispatch(setIsOpening(false));
  };
  const onSaveChanges = (id: string, title: string) => {
    dispatch(updateTodo({ id, title }));
    dispatch(setIsOpening(false));
    dispatch(setIsClosing(true));
  };

  return (
    <Modal>
      <EditForm onSave={onSaveChanges} onClose={onCloseModal} />
    </Modal>
  );
};

export default EditModal;
