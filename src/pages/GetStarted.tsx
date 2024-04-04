import GetStarteddToggler from "@/components/GetStartedToggler";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="w-screen h-screen text-black text-3xl font-bold flex flex-col justify-around items-center text-center">
      Get Started
      <GetStarteddToggler />
    </div>
  );
};

export default Home;
