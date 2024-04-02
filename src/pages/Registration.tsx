import { FC } from "react";
import RegistrationCard from "../components/RegistrationCard";

interface IProps {}

const Registration: FC<IProps> = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col pt-12">
      <div className="w-full flex flex-col gap-2 text-xs px-14 md:items-center">
        <span className="bg-black/30 w-32 aspect-square" />
        Upload an image
      </div>
      <RegistrationCard />
    </div>
  );
};

export default Registration;
