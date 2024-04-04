import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {}

const DetailsAvailableProfessionals: FC<IProps> = () => {
  return (
    <div className="p-3 w-full flex flex-col justify-center items-start gap-3">
      <section className="flex flex-col font-bold w-full">
        Services
        <div className="bg-black/10 rounded-md px-3 py-2 border-[1px] border-black flex justify-start items-center gap-3 text-sm relative w-full">
          <span className="w-2 h-2 bg-green-500 rounded-full border-[1px] border-black"></span>
          Shave <p className="font-medium">30min</p>
          <p className="absolute right-5 flex justify-center items-center gap-2 font-medium">
            N1,300
            <button className="p-1">
              <IoIosArrowDown />
            </button>
          </p>
        </div>
      </section>
      <section className="flex flex-col font-bold">
        Date
        <div className="bg-black/10 rounded-md px-3 py-2 border-[1px] border-black flex justify-center items-center gap-3 text-sm font-medium">
          dd/mm/yyyy
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 lg:gap-3 font-bold">
        Time
        <div className="bg-black/10 rounded-md px-3 py-2 flex justify-center items-center gap-3 text-sm">
          11 AM
        </div>
      </section>
    </div>
  );
};

export default DetailsAvailableProfessionals;
