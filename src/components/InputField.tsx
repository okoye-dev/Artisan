import { FC } from "react";
import eye from "../assets/svgs/eye.svg";

interface InputFieldProps {
  title: string;
  placeHolder: string;
  viewPassword?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  title,
  placeHolder,
  viewPassword,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-5 w-full text-sm my-2">
      <section className="font-semibold flex flex-col gap-1 w-full relative text-xs">
        {title}
        <input
          title={title.toLowerCase()}
          placeholder={placeHolder}
          type="text"
          className="font-normal placeholder:text-xs border-2 rounded-xl px-3 py-3"
        />
        {viewPassword && (
          <button className="flex justify-evenly items-center bg-blue z-10">
            <img src={eye} alt="view" className="absolute top-9 right-6" />
          </button>
        )}
      </section>
    </div>
  );
};

export default InputField;
