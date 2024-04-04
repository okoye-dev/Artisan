import { FC, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../assets/svgs/logo.svg";
import { useNavigate } from "react-router-dom";

interface IProps {}

const Navbar: FC<IProps> = () => {
  const navigate = useNavigate();

  const [navOpen, setNavOpen] = useState(false);
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

  return (
    <nav
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
        <a
          onClick={() => navigate("/home")}
          className="text-black/80 font-bold hover:text-blue"
        >
          Home
        </a>
        <a
          onClick={() => navigate("/categories")}
          className="text-black/80 font-bold hover:text-blue"
        >
          Categories
        </a>
        <a
          onClick={() => navigate("/nearby")}
          className="text-black/80 font-bold hover:text-blue"
        >
          Nearby
        </a>
      </nav>
      <button className="sm:hidden ipad:hidden transition-all duration-300 ease-in-out bg-gradient-to-tr from-black via-black via-[40%] to-purple-700 rounded-full px-6 py-3 hover:scale-105 text-white">
        Download Now
      </button>
    </nav>
  );
};

export default Navbar;
