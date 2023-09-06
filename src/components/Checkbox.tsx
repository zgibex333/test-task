import { useState } from "react";
import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends Partial<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({ className }) => {
  const [checked, setChecked] = useState(false);
  const CheckIcon = checked ? BiCheckboxSquare : BiCheckbox;
  return (
    <div className="w-fit" onClick={() => setChecked((prev) => !prev)}>
      <CheckIcon
        className={twMerge(
          "hover:opacity-70 cursor-pointer",
          `${checked && "text-cyan-500"}`,
          className
        )}
      />
    </div>
  );
};

export default Checkbox;
