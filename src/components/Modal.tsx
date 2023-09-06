import { useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  closeModal,
  selectIsModalOpen,
  setIsClosing,
  setIsOpening,
} from "../store/modalSlice/modalSlice";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const isOpen = useAppSelector(selectIsModalOpen);
  const { isOpening, isClosing } = useAppSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(setIsOpening(false));
    dispatch(setIsClosing(true));
  };

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (isOpen) {
      id = setTimeout(() => {
        dispatch(setIsOpening(true));
        dispatch(setIsClosing(false));
      }, 250);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isOpen, dispatch]);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (isClosing) {
      id = setTimeout(() => {
        dispatch(closeModal());
        dispatch(setIsClosing(false));
      }, 250);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isClosing, dispatch]);

  return (
    <>
      {isOpen && (
        <>
          <div
            className={twMerge(
              `${isOpening && "opacity-50"}`,
              `${!isOpening && "opacity-0"}`,
              "absolute top-0 left-0 right-0 bottom-0 z-10 transition bg-neutral-800"
            )}
            onClick={onCloseModal}
          />
          <div
            className={twMerge(
              `${isOpening && "scale-100"}`,
              `${!isOpening && "scale-0"}`,
              "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 transition w-fit flex items-center justify-center"
            )}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
