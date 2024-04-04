import { FC } from "react";
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface IProps {}

const HomeCarousel: FC<IProps> = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 699 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 699, min: 0 },
      items: 1,
    },
  };

  // just dummy objects to display carousel
  const item = {
    title: "Kleen cut",
    address: "192, adelabu street, surulere, Lagos",
    stars: 3,
  };
  const items = [item, item, item, item, item];
  return (
    <div className="overflow-hidden relative w-[20rem] ipad:w-[32rem] md:w-[50rem]">
      <Carousel responsive={responsive}>
        {items.map((item, index) => (
          <CarouselItem
            title={item.title}
            address={item.address}
            stars={index + 1}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
