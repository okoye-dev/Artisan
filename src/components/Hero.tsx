import { FC } from "react";
import GetTheAppButton from "../components/GetTheAppButton";
import HeroImageSection from "./HeroImageSection";

interface IProps {}

const Hero: FC<IProps> = () => {
  return (
    <section className="lg:flex justify-center">
      <HeroImageSection />
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
          <div className="mx-5 md:text-lg text-center">
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              nisi dicta expedita temporibus corporis quis inventore sapiente
              nesciunt mollitia ab? Harum ea ipsum quam hic laudantium esse
              facilis nihil illum.
            </p>
            <div className="flex justify-center lg:mx-5 w-full">
              <GetTheAppButton />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
