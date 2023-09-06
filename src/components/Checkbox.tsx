import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

interface CheckboxProps extends Partial<HTMLInputElement> {
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onChange,
  checked,
}) => {
  const CheckIcon = checked ? BiCheckboxSquare : BiCheckbox;
  return (
    <div className="w-fit">
      <CheckIcon
        onClick={onChange}
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
