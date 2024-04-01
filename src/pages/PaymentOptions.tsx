import { FC } from "react";
import { IoIosArrowBack } from "react-icons/io";
import OrderSummary from "../components/OrderSummary";
import { useNavigate } from "react-router-dom";
import CreditDebitCards from "../components/CreditDebitCards";

interface IProps {}

const PaymentOptions: FC<IProps> = () => {
  const navigate = useNavigate();
  const proceedToPay = () => {
    return;
  };
  return (
    <div className="flex flex-col gap-3 p-3 ipad:py-8 ipad:px-12 lg:px-28 w-full overflow-hidden">
      <header className="flex items-center gap-5 font-bold text-lg">
        <IoIosArrowBack size={"1.25rem"} />
        Payment Options
      </header>
      <section className="p-3">
        <OrderSummary
          company={`Kleen cut`}
          professional={`Emeka`}
          service={`Shave`}
          time={`3:30 - 3:30pm`}
          date={`28-01-2024`}
        />
        <p className="my-5 font-bold"> Credit & Debit Cards</p>
        <button className="rounded-2xl shadow-custom3 p-5 flex items-center gap-3 w-full">
          <CreditDebitCards />
        </button>
      </section>
      <section className="flex justify-between items-end px-3 h-full my-3">
        <div className="my-2 text-xl font-bold flex justify-center items-center">
          N1,000
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => proceedToPay()}
            className="shadow-md hover:opacity-85 bg-blue text-white py-3 px-6 rounded-2xl font-bold"
          >
            Proceed to pay
          </button>
        </div>
      </section>
    </div>
  );
};

export default PaymentOptions;
