import { FC } from "react";
import ArtisanNearbyCard from "../components/ArtisanNearbyCard";
import Navigator from "../components/Navigator";
import chairArtisan from "../assets/chairArtisan.jpeg";

const Nearby: FC = () => {
  const iterate = [...Array(6).keys()];
  return (
    <div className="mx-5">
      <div className="flex justify-center lg:justify-start items-center flex-col ipad:flex-row ipad:gap-10 overflow-hidden ipad:pt-5 md:pt-0 lg:mx-5">
        <header className="sm:w-full ipad:w-fit text-lg sm:ml-24 ipad:mx-12 font-semibold my-5">
          Nearby
        </header>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full md:w-[600px] bg-gray-300 h-[100px] lg:h-[200px] rounded-xl border-2 border-black mb-5"></div>
      </div>
      <section className="flex flex-col justify-center items-center gap-5 mb-12 w-full">
        {iterate.map(() => (
          <ArtisanNearbyCard
            image={chairArtisan}
            title="Kleen cut"
            address="17 Adelabu street, Surulere Lagos"
            distance="1.3km"
          />
        ))}
      </section>
      <div className="w-full flex justify-center items-center my-1">
        <Navigator />
      </div>
    </div>
  );
};

export default Nearby;
