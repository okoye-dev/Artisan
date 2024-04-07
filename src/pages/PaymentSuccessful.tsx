import { FC } from "react";
import paymentSuccesful from "../assets/svgs/paymentSuccessful.svg";
import waves from "../assets/svgs/waves.svg";
import cancel from "../assets/svgs/cancel.svg";
import { useNavigate } from "react-router-dom";

const PaymentSuccessful: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3 font-semibold overflow-hidden">
      <img
        onClick={() => {
          navigate("/");
        }}
        src={cancel}
        alt="cancel"
        className="w-10 absolute right-10 top-10"
      />
      <img src={paymentSuccesful} alt="success" />
      <img
        src={waves}
        alt=""
        className="-z-10 w-screen absolute bottom-0 ipad:hidden"
      />
      <p>Payment successful</p>
      <p>
        Your appointment code is{" "}
        <p className="text-2xl font-bold flex justify-center items-center my-1">
          610424
        </p>
      </p>
    </div>
  );
};

export default PaymentSuccessful;
