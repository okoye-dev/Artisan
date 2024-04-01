import { FC } from "react";

interface IProps {}

const AddNewCard: FC<IProps> = (props) => {
  return (
    <div className="flex flex-col gap-5 w-full text-sm my-3">
      <section className="font-semibold flex flex-col gap-2 w-full">
        Card Number
        <input
          title="card-number"
          placeholder="Enter 12 digit card number"
          type="text"
          className="font-normal placeholder:text-xs border-2 rounded-xl px-3 py-2"
        />
      </section>
      <section className="flex justify-between gap-4">
        <div className="font-semibold flex flex-col gap-2 w-full">
          Valid Thru
          <div className="flex gap-3">
            <input
              title="month"
              placeholder="Month"
              type="text"
              className="font-normal w-[5.5rem] placeholder:text-xs border-2 rounded-xl px-3 py-2"
            />
            <input
              title="month"
              placeholder="Year"
              type="text"
              className="font-normal w-[5.5rem] placeholder:text-xs border-2 rounded-xl px-3 py-2"
            />
          </div>
        </div>
        <div className="font-semibold flex flex-col items-end gap-2 w-full">
          <span className="-translate-x-12">CVV</span>
          <input
            title="cvv"
            placeholder="CVV"
            type="text"
            className="font-normal w-[5rem] placeholder:text-xs border-2 rounded-xl px-3 py-2"
          />
        </div>
      </section>
      <section className="font-semibold flex flex-col gap-2 w-full">
        Card Holder's Name
        <input
          title="name"
          placeholder="Name on Card"
          type="text"
          className="font-normal placeholder:text-xs border-2 rounded-xl px-3 py-2"
        />
      </section>
    </div>
  );
};

export default AddNewCard;
