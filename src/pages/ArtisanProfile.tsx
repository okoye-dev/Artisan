import { FC } from "react";
import Navigator from "../components/Navigator";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

interface ProfileProps {}

const ArtisanProfile: FC<ProfileProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const img = location.state.image;
  const title = location.state.title;
  return (
    <div className="m-5">
      <IoIosArrowBack
        onClick={() => navigate("/nearby")}
        className="h-8 w-8 p-1 cursor-pointer"
      />
      <section className="mt-4 mb-2 flex gap-10 items-center">
        <div className="flex justify-center items-center w-20 rounded-full overflow-hidden aspect-square">
          <img src={img} alt="img" className="object-cover" />
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="font-bold text-sm py-2 px-6  bg-blue text-white rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            Book Now
          </button>
          <button className="font-bold text-sm py-2 px-6 bg-blue text-white rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            Contact
          </button>
        </div>
      </section>
      <section className="flex flex-col font-bold">{title}</section>
      <div className="w-full flex justify-center items-center my-1">
        <Navigator />
      </div>
    </div>
  );
};

export default ArtisanProfile;
