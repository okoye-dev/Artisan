import { FC } from "react";

interface ButtonProps {
  btnText: string;
}

const Button: FC<ButtonProps> = ({ btnText }: ButtonProps) => {
  return (
    <button
      onClick={() => {}}
      className="w-full shadow-md hover:opacity-85 bg-blue text-white py-3 px-6 rounded-2xl font-bold"
    >
      {btnText}
    </button>
  );
};

export default Button;
