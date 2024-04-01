import { FC } from "react";
import boy from "../assets/boy.jpeg";
import Slider from "../components/Slider";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AvailableProfessionals: FC = () => {
  const navigate = useNavigate();
  const images = [boy, boy, boy, boy, boy, boy, boy, boy];
  return (
    <div className="flex w-screen h-screen absolute justify-center items-center">
      <section className="z-40 bg-white flex justify-center items-center rounded-xl px-3 py-2 w-[22rem] ipad:w-[30rem] lg:w-[40rem] shadow-lg border-2 border-black lg:text-lg">
        <div className="flex flex-col justify-center items-center w-full font-bold mt-1">
          Available Professionals
          <div className="h-10 mx-2 sm:mb-12 ipad:mb-14 mb-20 sm:">
            <Slider images={images} />
          </div>
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
          <button
            onClick={() => navigate("/your-order")}
            className="bg-blue rounded-2xl px-6 py-2 my-4 text-white shadow-md hover:opacity-85"
          >
            Preview Order
          </button>
        </div>
      </section>
    </div>
  );
};

export default AvailableProfessionals;
