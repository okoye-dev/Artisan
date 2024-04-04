import { FC } from "react";
import clipper from "../assets/clipper.jpeg";
import chairArtisan from "../assets/chairArtisan.jpeg";
import nails from "../assets/nails.jpeg";

interface IProps {}

const HeroImageSection: FC<IProps> = () => {
  return (
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
  );
};

export default HeroImageSection;
