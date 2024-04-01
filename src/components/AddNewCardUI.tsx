import { FC } from "react";
import cancel from "../assets/svgs/cancel.svg";
import AddNewCard from "./AddNewCard";

interface AddNewCardProps {
  closeMe: () => void;
}

const AddNewCardUI: FC<AddNewCardProps> = ({ closeMe }: AddNewCardProps) => {
  return (
    <div className="bg-white shadow-md flex flex-col justify-between py-12 px-8 w-[22rem] md:w-[30rem] lg:w-[36rem] h-fit gap-3 items-center rounded-md border-2 border-black">
      <div className="flex justify-between w-full font-bold">
        Add new card
        <button onClick={closeMe} className="scale-125 rounded-full">
          <img src={cancel} alt="cancel" />
        </button>
      </div>
      <AddNewCard />
    </div>
  );
};

export default AddNewCardUI;
