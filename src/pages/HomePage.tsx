import { FC } from "react";
import AppointmentCarousel from "../components/AppointmentCarousel";
import Navigator from "../components/Navigator";
import HeaderWithSearch from "@/components/HeaderWithSearch";

const HomePage: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderWithSearch>Home</HeaderWithSearch>
      <div className="mt-32">
        <AppointmentCarousel />
      </div>
      <Navigator />
    </div>
  );
};

export default HomePage;
