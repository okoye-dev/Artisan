import { FC } from "react";
import CarouselItem from "./CarouselItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AppointmentCarousel: FC = () => {
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

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-3 sm:ml-20">
        <div className="overflow-hidden relative w-[20rem] ipad:w-[32rem] md:w-[50rem]">
          <Carousel responsive={responsive}>
            <CarouselItem
              title={"Kleen cut"}
              address={"192, adelabu street, surulere, Lagos"}
              stars={3}
            />
            <CarouselItem
              title={"barbs"}
              address={"192, adelabu street, surulere, Lagos"}
              stars={4}
            />
            <CarouselItem
              title={"Salon galore"}
              address={"192, adelabu street, surulere, Lagos"}
              stars={1}
            />
            <CarouselItem
              title={"HairDo"}
              address={"192, adelabu street, surulere, Lagos"}
              stars={2}
            />
            <CarouselItem
              title={"Kleen cut"}
              address={"192, adelabu street, surulere, Lagos"}
              stars={2}
            />
          </Carousel>
        </div>
      </div>
      <p className="text-center mt-4 text-blue cursor-pointer">
        Already have an appointment?
      </p>
      
    </>
  );
};

export default AppointmentCarousel;
