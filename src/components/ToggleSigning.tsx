import { FC, useState } from "react";

interface IProps {
  makeVisible: (page: string) => void;
}

const ToggleSigning: FC<IProps> = ({ makeVisible }: IProps) => {
  const [isActive, setIsActive] = useState("signin");
  const makeActive = (page: string) => {
    setIsActive(page);
    makeVisible(page);
  };
  return (
    <div className="p-8 w-full flex flex-col gap-5 justify-center items-center">
      <span className="cursor-pointer w-68 shadow-custom3 flex rounded-full justify-center items-center h-10 relative text-base box-border">
        <div
          onClick={() => makeActive("signin")}
          className={`transition-all duration-300 ease-in-out z-20 h-12 w-28 flex justify-center items-center font-semibold ${
            isActive === "signin" && "text-white"
          }`}
        >
          Sign in
        </div>
        <div
          onClick={() => makeActive("signup")}
          className={`transition-all duration-300 ease-in-out z-20 h-12 w-28 flex justify-center items-center font-semibold ${
            isActive === "signup" && "text-white"
          }
          `}
        >
          Sign up
        </div>
        <span
          className={`shadow-customClose transition-all duration-300 ease-in-out absolute z-10 h-[2rem] w-[6.8rem] rounded-full left-2 ${
            isActive == "signin"
              ? "bg-blue"
              : "translate-x-[6.4rem] bg-purple-600 right-2"
          }`}
        ></span>
      </span>
    </div>
  );
};

export default ToggleSigning;
