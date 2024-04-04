import { FC } from "react";
import HomeCarousel from "./HomeCarousel";

const AppointmentCarousel: FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-3 sm:ml-20">
        <HomeCarousel />
      </div>
      <p className="text-center mt-4 text-blue cursor-pointer">
        Already have an appointment?
      </p>
    </>
  );
};

export default AppointmentCarousel;
