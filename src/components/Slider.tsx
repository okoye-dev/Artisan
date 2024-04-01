import { FC, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderProps {
  images: string[];
}
interface Prop {}

const componentName: FC<SliderProps> = ({ images }: SliderProps) => {
  const slider = useRef<any>(null);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative flex justify-center items-center w-[24rem] ipad:w-[30rem] lg:w-[40rem] mx-5 px-5 py-2">
      <div
        onClick={() => slider?.current?.slickPrev()}
        className="absolute left-3 lg:left-10 p-[0.1rem] rounded-full w-8 lg:w-16 lg:h-16 h-10 flex items-center justify-center z-20"
      >
        <IoIosArrowBack />
      </div>
      <div
        onClick={() => slider?.current?.slickNext()}
        className="absolute right-3 lg:right-10 p-[0.1rem] w-8 lg:w-16 lg:h-16 h-10 flex items-center justify-center rounded-full z-20"
      >
        <IoIosArrowForward />
      </div>
      <div className="w-full px-6 lg:px-16">
        <Slider ref={slider} {...settings}>
          {images.map((image, i) => (
            <div
              key={i}
              className={`border-[5px] lg:border-[12px] border-white rounded-full flex p-[2px] ${
                active === i ? "bg-black " : "bg-white"
              }`}
            >
              <span className="bg-white p-[2px] rounded-full border-5 flex justify-center items-center">
                <div className="flex justify-center items-center aspect-square rounded-full overflow-hidden">
                  <img
                    onClick={() => setActive(i)}
                    src={image}
                    alt="img"
                    className="object-cover"
                  />
                </div>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default componentName;
