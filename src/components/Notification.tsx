import { ToastContainer } from "react-toastify";

const Notification = () => {
  return (
    <ToastContainer
      position="bottom-center"
      hideProgressBar
      autoClose={3000}
    />
  );
};

export default Notification;
