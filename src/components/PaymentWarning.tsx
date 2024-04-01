import { FC } from "react";

interface IProps {
  closeMe: () => void;
}

const PaymentWarning: FC<IProps> = ({closeMe}: IProps) => {
  return (
    <span className="bg-gray-200 p-6 w-[22rem] h-fit flex flex-col gap-3 justify-center items-center rounded-md border-2 border-black">
      Please be advised that you are required to notify us of any cancellations
      within a 24-hour window prior to your scheduled appointment.
      <button
        onClick={() => closeMe()}
        className="text-white shadow-md hover:opacity-85 bg-blue rounded-2xl px-4 py-2 font-semibold"
      >
        I agree
      </button>
    </span>
  );
};

export default PaymentWarning;
