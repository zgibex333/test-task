import { useAppDispatch } from "../hooks/useAppDispatch";
import { closeModal } from "../store/modalSlice/modalSlice";
import { updateTodo } from "../store/todoSlice/todosSlice";
import EditForm from "./EditForm";
import Modal from "./Modal";

const EditModal = () => {
  const dispatch = useAppDispatch();
  const onCloseModal = () => {
    dispatch(closeModal());
  };
  const onSaveChanges = (id: string, title: string) => {
    dispatch(updateTodo({ id, title }));
    dispatch(closeModal());
  };

  return (
    <Modal closeModal={onCloseModal}>
      <EditForm onSave={onSaveChanges} onClose={onCloseModal} />
    </Modal>
  );
};

export default EditModal;
