import { FC } from "react";
import logo from "../assets/svgs/logo.svg";
import { useState, useEffect } from "react";

const Loading: FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

  return (
    <div
      className={`absolute opacity-0 overflow-hidden ${
        loading &&
        "background-fade flex justify-center items-center h-full w-full bg-white z-[9999]"
      }`}
    >
      <img className="logo-animation w-28" src={logo} alt="logo"/>
    </div>
  );
};

export default Loading;
