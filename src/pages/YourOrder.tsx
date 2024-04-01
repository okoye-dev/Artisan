import { FC, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import man from "../assets/man.jpeg";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import PaymentWarning from "../components/PaymentWarning";

interface IProps {}

const YourOrder: FC<IProps> = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const nextPage = () => {
    setOpen(false);
    navigate("/payment-options");
  };

  return (
    <>
      <Popup openMe={open} closeMe={nextPage}>
        <PaymentWarning closeMe={nextPage} />
      </Popup>

      <div className="flex flex-col gap-3 p-3 ipad:py-8 ipad:px-12 lg:px-28 w-full overflow-hidden">
        <header className="flex items-center gap-5 font-bold text-lg">
          <IoIosArrowBack size={"1.25rem"} />
          Your Order
        </header>
        <section className="my-5 px-3 flex gap-3 justify-start items-center">
          <div className="rounded-full overflow-hidden flex justify-center items-center w-20 lg:w-28 aspect-square bg-blue">
            <img src={man} alt="img" className="scale-[1.65]" />
          </div>
          <div>
            <p className="font-bold text-2xl lg:text-2xl">Emeka</p>
            <p className="opacity-50 text-sm lg:text-lg ml-1">Kleen cut</p>
          </div>
        </section>
        <p className="text-xl w-full flex justify-center">
          28th Jan 2024 at 3pm
        </p>
        <section className="text-xl flex justify-center gap-16">
          <p>Shave </p>
          <p>30 mins</p>
          <p>N1,300</p>
        </section>
        <section className="flex justify-end flex-col px-3 h-full">
          <span className="bg-black/20 h-1 my-2 w-full rounded-full"></span>
          <div className="font-bold text-xl flex justify-between">
            Subtotal <p>N1,000</p>
          </div>
          <div className="flex justify-center my-5">
            <button
              onClick={() => setOpen(true)}
              className="shadow-md hover:opacity-85 bg-blue text-white py-3 px-6 rounded-2xl font-bold"
            >
              Continue to payment
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default YourOrder;
