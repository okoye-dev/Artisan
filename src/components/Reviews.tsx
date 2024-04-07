import { FC } from "react";
import useEmptyArray from "./hooks/useEmptyArray";
import starYellow from "../assets/svgs/star-yellow.svg";
import star from "../assets/svgs/star.svg";

const Reviews: FC = () => {
  const array = useEmptyArray(4);
  return (
    <div className="mt-3 flex flex-col gap-4 sm:w-full w-[40rem] px-5">
      {array.map((_, i) => (
        <div className="flex gap-3 w-full">
          <span className="w-24 aspect-square rounded-full  bg-black/20" />
          <section className="rounded-xl border border-black py-2 px-4 flex flex-col gap-2 w-full">
            <div className="flex gap-3 justify-start items-center text-lg font-semibold">
              Mike Abel{" "}
              <p className="italic text-sm text-black/50 font-normal">
                {i + 3}h ago
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base">komentar...</p>
              <div className="flex">
                {array.map(() => (
                  <img src={starYellow} alt="" className="w-4" />
                ))}
                <img src={star} alt="" className="w-4" />
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
