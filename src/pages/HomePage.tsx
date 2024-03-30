import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import search from "../assets/svgs/search.svg";
import AppointmentCarousel from "../components/AppointmentCarousel";
import Navigator from "../components/Navigator";

const componentName: FC = () => {
  const location = useLocation();
  const loggedInAs = location.state;
  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {showElement && (
        <div className="absolute top-2 w-full flex justify-center items-center text-green-600 text-xs">
          Logged in as {loggedInAs}
        </div>
      )}
      <div className="flex justify-center lg:justify-start items-center flex-col ipad:flex-row ipad:gap-10 overflow-hidden ipad:pt-5 md:pt-0 lg:mx-5 pb-5 mb-[20vh]">
        <header className="sm:w-full ipad:w-fit text-lg sm:ml-24 ipad:mx-12 font-semibold my-5">
          Home
        </header>
        <section className="w-fit flex justify-center items-center gap-3">
          <div className="flex bg-white h-fit justify-start items-center py-2 px-5 rounded-full gap-3 border-[1px] border-black/10 ipad:w-[60vw] sm:w-[90vw] my-8 sm:my-0  shadow-md">
            <img src={search} alt="search" className="w-4 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-[150px] sm:w-[120px] ipad:w-[250px] focus:outline-none placeholder:text-sm text-black"
            />
          </div>
        </section>
      </div>
      <AppointmentCarousel />

      <Navigator />
    </div>
  );
};

export default componentName;
