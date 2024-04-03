import { FC } from "react";
import RegistrationCard from "../components/RegistrationCard";
import Button from "@/components/Button";

interface IProps {}

const Registration: FC<IProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ipad:h-screen">
      <div className="w-full justify-center items-center flex flex-col pt-12">
        <div className="w-full flex flex-col gap-2 text-xs px-14 md:items-center">
          <span className="bg-black/30 w-32 aspect-square" />
          Upload an image
        </div>
        <RegistrationCard />
      </div>
      <div className="w-full flex justify-center items-center sm:px-20 ipad:px-[15rem] lg:px-[24rem] pt-5 pb-8">
        <Button btnText="Finish registration" />
      </div>
    </div>
  );
};

export default Registration;
