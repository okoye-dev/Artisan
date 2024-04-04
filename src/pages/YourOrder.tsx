import { FC, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import PaymentWarning from "../components/PaymentWarning";
import ArtisanDisplayCard from "@/components/ArtisanDisplayCard";

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
        <ArtisanDisplayCard />
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
