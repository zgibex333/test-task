import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { selectIsModalOpen } from "../store/modalSlice/modalSlice";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const isOpen = useAppSelector(selectIsModalOpen);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  // FIX IT: process of clossing can be moved to store   
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const onCloseModal = () => {
    setIsOpening(false);
    setIsClosing(true);
  };

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (isOpen) {
      id = setTimeout(() => {
        setIsOpening(true);
      }, 250);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isOpen]);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;
    if (isClosing) {
      id = setTimeout(() => {
        closeModal();
        setIsClosing(false);
      }, 250);
    }
    return () => {
      clearTimeout(id);
    };
  }, [isClosing, closeModal]);

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
