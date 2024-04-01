import { FC } from "react";
import barbing2 from "../assets/barbing2.jpeg";

interface OrderProps {
  company: string;
  professional: string;
  service: string;
  time: string;
  date: string;
}

const OrderSummary: FC<OrderProps> = ({
  company,
  professional,
  service,
  time,
  date,
}: OrderProps) => {
  const orderSummary = [
    "Company:",
    "Professional:",
    "Service:",
    "Time:",
    "Date:",
  ];

  const orderSummaryValues = [company, professional, service, time, date];
  return (
    <div className="rounded-2xl shadow-custom3 p-5">
      <section className="flex justify-start gap-5">
        <div className="rounded-xl flex justify-center items-center shadow-md overflow-hidden w-24 aspect-square m-3">
          <img src={barbing2} alt="img" />
        </div>
        <div className="flex flex-col gap-1 justify-center items-start">
          <header className="font-bold">Order Summary</header>
          {orderSummary.map((i, index) => (
            <span className="font-semibold text-xs text-black/60 gap-1 flex">
              <p className="">{i}</p>
              {orderSummaryValues[index]}
            </span>
          ))}
        </div>
      </section>
      <span className="font-bold flex justify-between mt-3 mx-3">
        Total Amount <p>N1,000</p>
      </span>
    </div>
  );
};

export default OrderSummary;
