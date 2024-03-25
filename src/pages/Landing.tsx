import { FC, useEffect, useState } from "react";
import Loading from "./Loading";
import logo from "../assets/svgs/logo.svg";
import { RiMenu4Line } from "react-icons/ri";
import clipper from "../assets/clipper.jpeg";
import chairArtisan from "../assets/chairArtisan.jpeg";
import nails from "../assets/nails.jpeg";

const Landing: FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 30) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Loading />
      <div
        className={`opacity-0 transition-all duration-500 ${
          !loading && "opacity-100"
        } `}
      >
        <header className={`transition-all duration-300 ease-in-out px-2 py-1 landing-fade flex justify-between items-center overflow-hidden fixed w-full bg-white z-[9998] top-0 ${shadow && 'shadow-lg'}`}>
          <img src={logo} alt="logo" className="w-20 z-10" />
          <div className="p-4 rounded-full cursor-pointer z-10">
            <RiMenu4Line size={"2rem"} />
          </div>
        </header>
        <div className="flex justify-center relative mt-36">
          <span className="z-30">
            <img
              src={clipper}
              alt=""
              className="border-2 h-[13rem] rounded-tr-[3rem] rounded-bl-[3rem] object-cover translate-x-4"
            />
          </span>
          <div className="flex flex-col">
            <span>
              <img
                src={chairArtisan}
                alt=""
                className="border-2 rounded-tl-[1rem] rounded-br-[1rem] object-cover h-[7rem] z-10 -translate-y-7"
              />
            </span>
            <span className="z-20">
              <img
                src={nails}
                alt=""
                className="border-2 rounded-tr-[1rem] rounded-bl-[1rem] object-cover h-[10rem]"
              />
            </span>
          </div>
        </div>
        <div className="px-6">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nisi dicta expedita temporibus corporis quis inventore
                sapiente nesciunt mollitia ab? Harum ea ipsum quam hic
                laudantium esse facilis nihil illum.
              </p>
              <div className="flex justify-start w-full">
                <button className=" bg-gradient-to-r from-blue to-purple-500 rounded-lg py-3 px-8 text-white font-semibold mt-4 flex">
                  Get the App
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="rounded-t-[2rem] bg-blue my-20 p-6 flex justify-center items-center z-20">
          <h1 className="font-bold text-3xl text-white">Why use artisan?</h1>
        </section>
      </div>
    </div>
  );
};

export default Landing;
