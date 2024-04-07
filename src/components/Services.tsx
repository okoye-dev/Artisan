import { FC } from "react";
import useEmptyArray from "./hooks/useEmptyArray";

const Services: FC = () => {
  const array = useEmptyArray(5);
  return (
    <div className="flex flex-col gap-5">
      {array.map(() => (
        <div className="flex justify-between items-center px-10 font-bold text-xl rounded-xl shadow-custom2 hover:scale-[1.02] transition-all duration-200 ease-in-out">
          <div className="flex flex-col gap-1 py-4 justify-center items-center text-sm font-medium">
            Shaving <p className="text-black/50">30 min</p>
          </div>
          N1,000
        </div>
      ))}
    </div>
  );
};

export default Services;
