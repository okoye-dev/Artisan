import { FC } from "react";
import rememberMe from "../assets/svgs/rememberMe.svg";

interface IProps {}

const RememberMe: FC<IProps> = () => {
  return (
    <div className="w-full flex justify-between items-center text-sm font-semibold">
      <span className="flex gap-2">
        <img src={rememberMe} alt="tick" /> Remember me
      </span>
      <a>Forgot Password?</a>
    </div>
  );
};

export default RememberMe;
