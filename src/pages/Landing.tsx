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
import GetTheAppButton from "../components/GetTheAppButton";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

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
        "Explore a diverse range of skilled artisans at your fingertips. Whether you need a stylist, makeup artist, or just a quick haircut, we connect you with talented professionals tailored to your specific needs and preferences.",
      icon: variety,
    },
    {
      header: "Quality Assurance",
      content:
        "Rest assured knowing that all artisans on our platform are thoroughly vetted and reviewed by previous clients. Experience top-notch service and impeccable craftsmanship every time you book through our app.",
      icon: quality,
      id: 0,
    },
  ];

  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Loading />
      <div
        className={`opacity-0 transition-all duration-300 ${
          !loading && "opacity-100"
        } `}
      >
        <header
          className={`transition-all duration-300 ease-in-out px-2 py-1 landing-fade flex justify-between lg:justify-center items-center lg:min-h-20 fixed w-full bg-gradient-to-r from-white to-white/70 z-[9998] top-0 backdrop-blur-md lg:px-0 ${
            shadow && "shadow-lg"
          }
          `}
        >
          <img
            src={logo}
            alt="logo"
            className="w-20 z-10 p-2 lg:absolute left-10 top-2"
          />

          <div
            className="lg:hidden p-6 rounded-full cursor-pointer"
            onClick={() => {
              setNavOpen(true);
            }}
          >
            <RiMenu4Line size={"1.5rem"} className="md:hidden" />
          </div>
          <nav
            className={`transition-all duration-300 ease-in-out lg:flex lg:flex-row justify-center gap-[5vw] items-center w-3/5 sm:flex sm:flex-col ipad:flex-col sm: absolute sm:z-[9998] sm:h-screen ipad:h-screen md:h-fit md:py-6 md:w-full md:text-lg md:shadow-none md:gap-[8vw] md:flex md:flex-row sm:bg-white sm:gap-16 ipad:gap-16 sm:top-0 ipad:top-0 sm:right-0 ipad:right-0 sm:shadow-xl ipad:shadow-xl ipad:text-xl ${
              navOpen ? "sm:translate-x-0" : "sm:translate-x-[90vw]"
            }`}
          >
            <span
              className="absolute right-4 top-3 p-3 rounded-full"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              <IoMdClose size={"2rem"} className="md:hidden" />
            </span>
            <a className="text-black/80 font-bold">Home</a>
            <a className="text-black/80 font-bold">Categories</a>
            <a className="text-black/80 font-bold">Nearby</a>
          </nav>
          <button className="sm:hidden ipad:hidden transition-all duration-300 ease-in-out bg-gradient-to-tr from-black via-black via-[40%] to-purple-700 rounded-full px-6 py-3 hover:scale-105 text-white">
            Download Now
          </button>
        </header>
        <section className="lg:flex justify-center">
          <div className="flex justify-center relative mt-36">
            <span className="z-30">
              <img
                src={clipper}
                alt="clippers"
                className="h-[13rem] ipad:h-[15rem] lg:h-[18rem] rounded-tr-[3rem] rounded-bl-[3rem] object-cover translate-x-4 shadow-custom"
              />
            </span>
            <div className="flex flex-col">
              <span>
                <img
                  src={chairArtisan}
                  alt="chairArtisan"
                  className="rounded-tl-[1rem] rounded-br-[1rem] object-cover h-[7rem] ipad:h-[9rem] lg:h-[12rem] z-10 -translate-y-7 shadow-custom"
                />
              </span>
              <span className="z-20">
                <img
                  src={nails}
                  alt="nails"
                  className="rounded-tr-[1rem] rounded-bl-[1rem] object-cover sm:h-[10rem] ipad:h-[12rem] lg:h-[15rem] shadow-custom"
                />
              </span>
            </div>
          </div>
          <div className="px-6 lg:w-3/5 flex justify-center">
            <section className="flex flex-col justify-center items-center">
              <h1 className="hero sm:text-5xl ipad:text-6xl lg:text-5xl font-extrabold flex flex-col items-center text-center mt-20 z-10 lg:mt-40">
                Book your appointments
                <span className="font-normal kaushan text-orange-600 relative">
                  in one go
                </span>
                <div className="hero relative">
                  with <span className="text-blue">artisan</span>
                </div>
              </h1>
              <div className="mx-5 md:text-lg md:text-center lg:text-start">
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores nisi dicta expedita temporibus corporis quis inventore
                  sapiente nesciunt mollitia ab? Harum ea ipsum quam hic
                  laudantium esse facilis nihil illum.
                </p>
                <div className="flex justify-start lg:mx-5 w-full">
                  <GetTheAppButton />
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="rounded-t-[2rem] bg-gradient-to-b from-blue to-purple-700 to-[80%] mt-20 ipad:p-10 p-6 flex flex-col justify-center items-center z-20">
          <h1 className="font-bold text-3xl ipad:text-4xl text-white mb-10">
            Why use artisan?
          </h1>
          <div className="m-2 gap-10 flex ipad:flex-wrap ipad:flex-row sm:flex-col justify-center items-center pb-20">
            {whyUseArtisanList.map((obj, i) => (
              <div
                key={i}
                className="text-white flex flex-col justify-center items-center gap-2 ipad:bg-white/20 ipad:p-4 ipad:rounded-lg ipad:w-2/5 ipad:pb-8 hover:shadow-custom2 transition-all duration-500 ease-in-out hover:scale-[1.01]"
              >
                <img
                  src={obj.icon}
                  alt={obj.header}
                  className={`w-10 bg-white rounded-full shadow-lg ${
                    obj.id == 0 ? "p-0" : "p-2"
                  }`}
                />
                <h1 className="text-center text-2xl ipad:text-xl font-medium kaushan">
                  {obj.header}
                </h1>
                <p className="text-xs w-3/4 text-center">{obj.content}</p>
                {obj.id !== 0 && (
                  <div className="mt-10 w-full h-[1px] bg-white ipad:hidden"></div>
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
