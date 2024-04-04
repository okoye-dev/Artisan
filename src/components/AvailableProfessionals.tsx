import { FC } from "react";
import boy from "../assets/boy.jpeg";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";
import DetailsAvailableProfessionals from "./DetailsAvailableProfessionals";
import Button from "./Button";

const AvailableProfessionals: FC = () => {
  const navigate = useNavigate();
  const goToYourOrder = () => {
    navigate("/your-order");
  };
  // dummy data
  const images = [boy, boy, boy, boy, boy, boy, boy, boy];
  return (
    <div className="flex w-screen h-screen absolute justify-center items-center">
      <section className="z-40 bg-white flex justify-center items-center rounded-xl px-3 py-2 w-[22rem] ipad:w-[30rem] lg:w-[40rem] shadow-lg border-2 border-black lg:text-lg">
        <div className="flex flex-col justify-center items-center w-full font-bold mt-1">
          Available Professionals
          <div className="h-10 mx-2 sm:mb-12 ipad:mb-14 mb-20 sm:">
            <Slider images={images} />
          </div>
          <DetailsAvailableProfessionals />
          <div className="my-2">
            <Button onClick={goToYourOrder} btnText="Preview Order" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvailableProfessionals;
