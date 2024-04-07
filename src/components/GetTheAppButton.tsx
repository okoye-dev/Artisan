import { FC, useState } from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const GetTheAppButton: FC = () => {
  const [hover, setHover] = useState(true);
  const handleHoverTrue = () => {
    setHover(true);
  };
  const handleHoverFalse = () => {
    setHover(false);
  };

  return (
    <button
      onMouseOver={handleHoverFalse}
      onMouseLeave={handleHoverTrue}
      className={`transition-all duration-300 ease-in-out py-3 pl-8 ipad:py-5 ipad:hover:py-7 ipad:hover:pl-10 ipad:hover:pr-8 hover:pr-5 text-white font-semibold mt-4 flex justify-center items-center gap-1 bg-gradient-to-r bg-large bg-[left] hover:bg-[right] from-blue via-purple-500 via-[40%] to-black rounded-lg hover:scale-105 shadow-lg hover:shadow-2xl`}
    >
      Get the App
      <span
        className={`flex justify-center border-[1px] rounded-lg p-[1px] transition-all duration-500 ease-in-out ${
          hover ? "opacity-0 -translate-x-10" : "ml-1 translate-x-0"
        }`}
      >
        <GrAppleAppStore />
      </span>
      <span
        className={`transition-all duration-[750ms]  ease-in-out flex justify-center ${
          hover ? "opacity-0 -translate-x-10" : "translate-x-0"
        }`}
      >
        <IoLogoGooglePlaystore size={"1.25rem"} />
      </span>
    </button>
  );
};

export default GetTheAppButton;