import { FC, useState } from "react";
import Navigator from "../components/Navigator";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import checkmark from "../assets/svgs/check.svg";
import AvailableProfessionals from "../components/AvailableProfessionals";

interface ProfileProps {}

const ArtisanProfile: FC<ProfileProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const img = location.state.image;
  const title = location.state.title;

  const [activeSection, setActiveSection] = useState(2);
  const toggleSection = (i: number) => {
    setActiveSection(i);
  };

  const [availableProfessionals, setAvailableProfessionals] = useState(false);

  return (
    <div className="relative overflow-hidden h-screen">
      <div
        onClick={() => setAvailableProfessionals(false)}
        className={`absolute bg-white/30 backdrop-blur-sm w-full h-full z-30 ${
          !availableProfessionals && "hidden"
        }`}
      ></div>
      {availableProfessionals && <AvailableProfessionals />}
      <div className="m-5 lg:mx-10">
        <IoIosArrowBack
          onClick={() => navigate("/nearby")}
          className="h-8 w-8 p-1 cursor-pointer"
        />
        <section className="mt-4 mb-2 flex gap-10 items-center">
          <div className="flex justify-center items-center w-20 ipad:w-28 rounded-full overflow-hidden aspect-square">
            <img src={img} alt="img" className="object-cover" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setAvailableProfessionals(true)}
              className="font-bold text-sm ipad:text-lg py-2 px-6 ipad:px-8  bg-blue text-white rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              Book Now
            </button>
            <button className="font-bold text-sm ipad:text-lg py-2 px-6 ipad:px-8 bg-blue text-white rounded-full hover:shadow-md hover:scale-[1.02] transition-all duration-300 ease-in-out">
              Contact
            </button>
          </div>
        </section>
        <section className="text-xs ipad:text-base ipad:mx-4 flex flex-col gap-1">
          <h1 className="text-base ipad:text-lg font-bold flex gap-2 items-center">
            {title} <img src={checkmark} alt="checkmark" />
          </h1>
          <p className="ipad:mt-2">Barbing salon</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            aut nisi pariatur deleniti eius tempore dicta quos accusamus enim
            dignissimos id tempora dolores dolorum, iste voluptatum aperiam
            neque consequatur laboriosam?
          </p>
        </section>
        <div className="w-full flex justify-center items-center my-1">
          <Navigator />
        </div>
        <section className="w-full flex justify-center items-center">
          <div className="relative w-full lg:w-4/5 ipad:text-lg my-5 flex justify-around font-bold">
            <button
              onClick={() => toggleSection(0)}
              className="w-full flex justify-center items-center"
            >
              Services
            </button>
            <button
              onClick={() => toggleSection(1)}
              className="w-full flex justify-center items-center"
            >
              Portfolio
            </button>
            <button
              onClick={() => toggleSection(2)}
              className="w-full flex justify-center items-center"
            >
              Reviews
            </button>
            <span className="absolute h-1 w-full bg-black/20 top-6 ipad:top-8 rounded-full"></span>
            <span
              className={`absolute h-1 w-1/3 bg-blue top-6 ipad:top-8 rounded-full transition-all duration-300 ease-in-out ${
                activeSection == 0 && "left-0"
              } ${activeSection == 1 && "left-1/3"} ${
                activeSection == 2 && "left-2/3"
              }`}
            ></span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArtisanProfile;
