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
        className={`opacity-0 transition-all duration-500 ${
          !loading && "opacity-100"
        } `}
      >
        <header
          className={`transition-all duration-300 ease-in-out px-2 py-1 landing-fade flex justify-between items-center overflow-hidden fixed w-full bg-gradient-to-r from-white to-white/70 z-[9998] top-0 backdrop-blur-md ${
            shadow && "shadow-lg"
          }`}
        >
          <img src={logo} alt="logo" className="w-20 z-10 p-2" />
          <div className="p-6 rounded-full cursor-pointer z-10">
            <RiMenu4Line size={"1.5rem"} />
          </div>
        </header>
        <div className="flex justify-center relative mt-36">
          <span className="z-30">
            <img
              src={clipper}
              alt="clippers"
              className="border-2 h-[13rem] rounded-tr-[3rem] rounded-bl-[3rem] object-cover translate-x-4"
            />
          </span>
          <div className="flex flex-col">
            <span>
              <img
                src={chairArtisan}
                alt="chairArtisan"
                className="border-2 rounded-tl-[1rem] rounded-br-[1rem] object-cover h-[7rem] z-10 -translate-y-7"
              />
            </span>
            <span className="z-20">
              <img
                src={nails}
                alt="nails"
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
        <section className="rounded-t-[2rem] bg-gradient-to-b from-blue to-purple-700 to-[80%]  mt-20 p-6 flex flex-col justify-center items-center z-20">
          <h1 className="font-bold text-3xl text-white mb-10">
            Why use artisan?
          </h1>
          <div className="m-2 gap-10 flex flex-col justify-center items-center">
            {whyUseArtisanList.map((obj, i) => (
              <div
                key={i}
                className="text-white flex flex-col justify-center items-center gap-2"
              >
                <img
                  src={obj.icon}
                  alt={obj.header}
                  className={`w-10 bg-white rounded-full ${
                    obj.id == 0 ? " p-0" : "p-2"
                  }`}
                />
                <h1 className="text-center text-2xl font-medium kaushan">
                  {obj.header}
                </h1>
                <p className="text-xs w-3/4 text-center">{obj.content}</p>
                {obj.id !== 0 && (
                  <div className="mt-10 w-full h-[1px] bg-white"></div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-t-[2rem] flex justify-center items-center mt-20 p-6 z-20">download here, or try online</section>
      </div>
    </div>
  );
};

export default Landing;
