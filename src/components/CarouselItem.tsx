import { useState, FC } from "react";
import barber from "../assets/barber.jpeg";
import location from "../assets/svgs/location.svg";
import star from "../assets/svgs/star.svg";
import starYellow from "../assets/svgs/star-yellow.svg";

interface CarouselItemProps {}

const CarouselItem: FC<CarouselItemProps> = () => {
  const [n, setN] = useState(4);
  const rating = [...Array(n).keys()];
  const fiveMinusRating = [...Array(5 - n).keys()];

  const setRating = (number: number) => {
    setN(number);
  };

  return (
    <div className={`w-1/2`}>
      <div className="rounded-t-xl overflow-hidden flex flex-col  border-2 border-black">
        <img src={barber} alt="img" />
      </div>
      <section className="flex flex-col w-full rounded-b-xl justify-center items-center relative border-2 border-black">
        <div className="flex gap-2">
          <img src={location} alt="" width={"16rem"} />
          <div className="flex flex-col">
            <p className="font-bold flex justify-between mt-2">
              Kleen cut
              <span className="flex">
                {rating.map(() => (
                  <img src={starYellow} alt="" />
                ))}
                {fiveMinusRating.map(() => (
                  <img src={star} alt="" />
                ))}
              </span>
            </p>
            <p className="text-black/70 text-[0.65rem]">
              192, adelabu street, surulere, lagos.
            </p>
          </div>
        </div>
        <button className="bg-blue rounded-full px-4 py-2 w-fit my-2 text-white text-xs">
          Book now
        </button>
      </section>
    </div>
  );
};

export default CarouselItem;
