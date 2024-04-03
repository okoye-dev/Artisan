import { FC } from "react";
import InputField from "../components/InputField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import tick from "../assets/svgs/tickRegistration.svg";

interface IProps {}

const RegistrationCard: FC<IProps> = () => {
  const categoryList: string[] = [
    "Barbing salon",
    "Tattoo artist",
    "Hairdresser",
    "Nail Tech",
  ];
  return (
    <div
      className={`w-full flex flex-col justify-center items-center md:w-[30rem] lg:w-[36rem] px-14 py-4`}
    >
      <InputField title="Full name*" placeHolder="Full name" />
      <InputField title="Company name*" placeHolder="Company name" />
      <InputField title="Company address" placeHolder="Company address" />
      <InputField title="Contact*" placeHolder="Contact" />
      <p className="mt-3 mb-1 text-xs font-semibold w-full"> Category</p>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryList.map((category, index) => (
              <SelectItem key={index} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default RegistrationCard;
