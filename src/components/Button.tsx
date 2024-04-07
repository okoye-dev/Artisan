import { FC } from "react";

interface ButtonProps {
  btnText: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ btnText, onClick }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick!()}
      className="w-full shadow-md hover:opacity-85 bg-blue text-white py-3 px-6 rounded-2xl font-bold"
    >
      {btnText}
    </button>
  );
};

export default Button;
