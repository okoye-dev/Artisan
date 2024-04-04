import { FC } from "react";
import man from "../assets/man.jpeg";

interface IProps {}

const ArtisanDisplayCard: FC<IProps> = () => {
  return (
    <section className="my-5 px-3 flex gap-3 justify-start items-center">
      <div className="rounded-full overflow-hidden flex justify-center items-center w-20 lg:w-28 aspect-square bg-blue">
        <img src={man} alt="img" className="scale-[1.65]" />
      </div>
      <div>
        <p className="font-bold text-2xl lg:text-2xl">Emeka</p>
        <p className="opacity-50 text-sm lg:text-lg ml-1">Kleen cut</p>
      </div>
    </section>
  );
};

export default ArtisanDisplayCard;
