import { FC } from "react";
import useEmptyArray from "./hooks/useEmptyArray";

const Portfolio: FC = () => {
  const array = useEmptyArray(9);
  return (
    <div className="w-full h-[480px] bg-slate-200 flex flex-wrap">
      {array.map(() => (
        <div className="w-1/3 h-40 border border-black/50"></div>
      ))}
    </div>
  );
};

export default Portfolio;
