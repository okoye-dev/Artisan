import { FC, useEffect, useState } from "react";
import Loading from "./Loading";
import logo from "../assets/svgs/logo.svg";
import { RiMenu4Line } from "react-icons/ri";
import clipper from "../assets/clipper.jpeg";
import chairArtisan from "../assets/chairArtisan.jpeg";
import nails from "../assets/nails.jpeg";
import shipping from "../assets/svgs/shipping.svg";
import variety from "../assets/svgs/variety.svg";
import quality from "../assets/svgs/quality.svg";
import appStore from "../assets/svgs/353095.svg";
import playStore from "../assets/svgs/291947.svg";
import GetTheAppButton from "../components/GetTheAppButton"
import { useNavigate } from "react-router-dom";

const Landing: FC = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
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
  }, []);

  interface whyUseArtisan {
    header: string;
    content: string;
    icon: string;
    id?: number;
  }
  const whyUseArtisanList: whyUseArtisan[] = [
    {
      header: "Convenience",
      content:
        "Our app offers hassle-free booking in just a few taps. Say goodbye to long phone calls and waiting times. With instant confirmation and easy rescheduling, managing your appointments has never been easier.",
      icon: shipping,
    },
    {
      header: "Variety",
      content:
        "Explore a diverse range of skilled artisans at your fingertips. Whether you need a stylist, makeup artist, or just a quick haircut, our platform connects you with talented professionals tailored to your specific needs and preferences.",
      icon: variety,
    },
    {
      header: "Quality Assurance",
      content:
        "Rest assured knowing that all artisans on our platform are thoroughly vetted and reviewed by previous clients. Experience top-notch service and impeccable craftsmanship every time you book through our app",
      icon: quality,
      id: 0,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Loading />
      <div
        className={`opacity-0 transition-all duration-300 ${
          !loading && "opacity-100"
        } `}
      >
        <header
          className={`transition-all duration-300 ease-in-out px-2 py-1 landing-fade flex justify-between lg:justify-center items-center overflow-hidden lg:min-h-20 fixed w-full bg-gradient-to-r from-white to-white/70 z-[9998] top-0 backdrop-blur-md ${
            shadow && "shadow-lg"
          }`}
        >
          <img src={logo} alt="logo" className="w-20 z-10 p-2 lg:absolute left-10 top-2" />
          <div className="lg:hidden p-6 rounded-full cursor-pointer z-10">
            <RiMenu4Line size={"1.5rem"} />
          </div>
          <nav className="hidden lg:flex z-[9998] justify-center gap-[5vw] items-center w-3/5">
            <a className="text-black/80 font-bold">Home</a>
            <a className="text-black/80 font-bold">Categories</a>
            <a className="text-black/80 font-bold">Nearby</a>
          </nav>
        </header>
        <div className="flex justify-center relative mt-36">
          <span className="z-30">
            <img
              src={clipper}
              alt="clippers"
              className="h-[13rem] ipad:h-[15rem] rounded-tr-[3rem] rounded-bl-[3rem] object-cover translate-x-4 shadow-custom"
            />
          </span>
          <div className="flex flex-col">
            <span>
              <img
                src={chairArtisan}
                alt="chairArtisan"
                className="rounded-tl-[1rem] rounded-br-[1rem] object-cover h-[7rem] ipad:h-[9rem] z-10 -translate-y-7 shadow-custom"
              />
            </span>
            <span className="z-20">
              <img
                src={nails}
                alt="nails"
                className="rounded-tr-[1rem] rounded-bl-[1rem] object-cover sm:h-[10rem] ipad:h-[12rem] shadow-custom"
              />
            </span>
          </div>
        </div>
        <div className="px-6">
          <section className="w-full flex flex-col justify-center items-center">
            <h1 className="hero sm:text-5xl ipad:text-6xl font-extrabold flex flex-col items-center text-center mt-20 z-10">
              Book your appointments
              <span className="font-normal kaushan text-orange-600 relative">
                in one go
              </span>
              <div className="hero relative">
                with <span className="text-blue">artisan</span>
              </div>
            </h1>
            <div className="mx-5 md:text-lg md:text-center">
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores nisi dicta expedita temporibus corporis quis inventore
                sapiente nesciunt mollitia ab? Harum ea ipsum quam hic
                laudantium esse facilis nihil illum.
              </p>
              <div className="flex justify-start ipad:justify-center w-full">
                <GetTheAppButton/>
              </div>
            </div>
          </section>
        </div>
        <section className="rounded-t-[2rem] bg-gradient-to-b from-blue to-purple-700 to-[80%] mt-20 ipad:p-10 p-6 flex flex-col justify-center items-center z-20">
          <h1 className="font-bold text-3xl ipad:text-4xl text-white mb-10">
            Why use artisan?
          </h1>
          <div className="m-2 gap-10 flex flex-col justify-center items-center pb-20">
            {whyUseArtisanList.map((obj, i) => (
              <div
                key={i}
                className="text-white flex flex-col justify-center items-center gap-2"
              >
                <img
                  src={obj.icon}
                  alt={obj.header}
                  className={`w-10 bg-white rounded-full shadow-lg ${
                    obj.id == 0 ? " p-0" : "p-2"
                  }`}
                />
                <h1 className="text-center text-2xl ipad:text-3xl font-medium kaushan">
                  {obj.header}
                </h1>
                <p className="text-xs ipad:text-sm w-3/4 text-center">
                  {obj.content}
                </p>
                {obj.id !== 0 && (
                  <div className="mt-10 w-full h-[1px] bg-white"></div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-t-[2rem] flex justify-center items-center -translate-y-12 py-5 ipad:py-8 z-30 bg-white sm:flex-col ipad:flex-row">
          <div className="flex gap-2 mb-4 justify-center items-center">
            <img
              src={appStore}
              alt="download on appstore"
              className="w-28 hover:scale-105 transition-all duration-300 ease-in-out ipad:translate-y-2"
            />
            <img
              src={playStore}
              alt="download on playstore"
              className="w-[8.35rem] hover:scale-105 transition-all duration-300 ease-in-out  ipad:translate-y-2"
            />
          </div>
          <span className="h-[1px] bg-black/30 w-3/4 ipad:hidden"></span>
          <button
            onClick={goToHome}
            className={`ipad:ml-8 flex justify-center items-center text-white font-semibold transiton-all duration-500 ease-in-out m-3 px-8 py-3 bg-gradient-to-r bg-large bg-[left] hover:bg-[right] from-blue via-purple-500 via-[40%] to-black rounded-lg hover:scale-105 shadow-lg hover:shadow-2xl`}
          >
            Continue on web
          </button>
          <p className="text-xs absolute bottom-0 z-20">All rights reserved.</p>
        </section>
      </div>
    </div>
  );
};

export default Landing;
