import { FC } from "react";
import Loading from "./Loading";
import logo from "../assets/svgs/logo.svg";
import { RiMenu4Line } from "react-icons/ri";
import clipper from "../assets/clipper.jpeg";
import chairArtisan from "../assets/chairArtisan.jpeg";
import nails from "../assets/nails.jpeg";

const Landing: FC = () => {
  return (
    <div className="overflow-x-hidden p-3">
      <Loading />
      <header className="landing-fade flex justify-between items-center overflow-hidden">
        <img src={logo} alt="logo" className="w-20 z-10" />
        <div className="p-4 rounded-full cursor-pointer z-10">
          <RiMenu4Line size={"2rem"} />
        </div>
      </header>
      <div className="flex relative translate-x-12 mt-16">
        <span className="translate-x-16 translate-y-10 z-30">
          <img
            src={clipper}
            alt=""
            className="border-2 h-[13rem] rounded-tr-[3rem] rounded-bl-[3rem] object-cover"
          />
        </span>
        <div className="flex flex-col">
          <span>
            <img
              src={chairArtisan}
              alt=""
              className="border-2 rounded-tl-[1rem] rounded-br-[1rem] object-cover h-[7rem] z-10 -translate-y-6"
            />
          </span>
          <span className="translate-y-5 translate-x-2 z-20">
            <img
              src={nails}
              alt=""
              className="border-2 rounded-tr-[1rem] rounded-bl-[1rem] object-cover h-[10rem]"
            />
          </span>
        </div>
      </div>
      <div className="p-6">
        <section className="w-full flex flex-col justify-center items-center">
          <h1 className="hero text-5xl font-extrabold flex flex-col items-center text-center mt-20 z-10">
            Book your appointments
            <span className="font-normal kaushan text-orange-600 relative">
              in one go
            </span>
            <div className="hero relative">
              with <span className="text-blue">artisan</span>
            </div>
          </h1>
          <div className="mx-5">
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nisi dicta expedita temporibus corporis quis inventore sapiente
              nesciunt mollitia ab? Harum ea ipsum quam hic laudantium esse
              facilis nihil illum.
            </p>
            <div className="flex justify-start w-full">
              <button className="bg-blue rounded-lg p-3 text-white font-semibold w-1/3 mt-4">
                Get the App
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
