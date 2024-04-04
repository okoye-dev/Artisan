import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {}

const GetStarteddToggler: FC<IProps> = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("client");

  function clientActive() {
    isActive === "client" ? navigate("/home") : setIsActive("client");
  }

  function artisanActive() {
    isActive === "artisan"
      ? navigate("/artisan-signin")
      : setIsActive("artisan");
  }
  return (
    <span className="cursor-pointer w-64 shadow-custom3 flex rounded-full justify-center items-center h-14 relative text-xl box-border">
      <div
        onClick={clientActive}
        className={`transition-all duration-300 ease-in-out z-20 h-12 w-32 flex justify-center items-center ${
          isActive === "client" && "text-white"
        }`}
      >
        Client
      </div>
      <div
        onClick={artisanActive}
        className={`transition-all duration-300 ease-in-out z-20 h-12 w-32 flex justify-center items-center ${
          isActive === "artisan" && "text-white"
        }
          `}
      >
        Artisan
      </div>
      <span
        className={`shadow-customClose transition-all duration-300 ease-in-out absolute z-10 h-[2.9rem] w-[7.7rem] rounded-full left-2 ${
          isActive == "client"
            ? "bg-blue"
            : "translate-x-[7.4rem] bg-purple-600 right-2"
        }`}
      ></span>
    </span>
  );
};

export default GetStarteddToggler;
