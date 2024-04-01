import { FC } from "react";
import addBtn from "../assets/svgs/addNewCard.svg";

interface IProps {}

const CreditDebitCards: FC<IProps> = () => {
  return (
    <>
      <img src={addBtn} alt="" />
      <p className="text-black/50 text-sm">Add new card</p>
    </>
  );
};

export default CreditDebitCards;
