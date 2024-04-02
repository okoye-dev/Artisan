import { FC } from "react";
import InputField from "../components/InputField";

interface IProps {}

const RegistrationCard: FC<IProps> = () => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center md:w-[30rem] lg:w-[36rem] px-14 py-4`}
    >
      <InputField title="Full name*" placeHolder="Full name" />
      <InputField title="Company name*" placeHolder="Company name" />
      <InputField title="Company address" placeHolder="Company address" />
      <InputField title="Contact*" placeHolder="Contact" />
    </div>
  );
};

export default RegistrationCard;
