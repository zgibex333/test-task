import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        "w-fit cursor-pointer hover:opacity-70 uppercase text-white disabled:opacity-70 disabled:cursor-auto",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
