import { FC } from "react";
import appStore from "../assets/svgs/353095.svg";
import playStore from "../assets/svgs/291947.svg";

interface IProps {}

const DownloadLinks: FC<IProps> = () => {
  return (
    <div className="flex gap-2 mb-4 justify-center items-center">
      <img
        src={appStore}
        alt="download on appstore"
        className="w-28 hover:scale-105 transition-all duration-300 ease-in-out ipad:translate-y-2"
      />
      <img
        src={playStore}
        alt="download on playstore"
        className="w-[8.35rem] hover:scale-105 transition-all duration-300 ease-in-out  ipad:translate-y-2"
      />
    </div>
  );
};

export default DownloadLinks;
