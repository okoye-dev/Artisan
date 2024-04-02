import { FC, useState } from "react";
import ToggleSigning from "../components/ToggleSigning";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

interface IProps {}

const ArtisanSignIn: FC<IProps> = () => {
  const [page, setPage] = useState("signin");
  const makePageVisible = (page: string) => {
    setPage(page);
  };
  return (
    <div className="py-14 px-12 w-full flex flex-col justify-center items-center">
      <p className="font-extrabold text-2xl"> ARTISAN</p>
      <ToggleSigning makeVisible={makePageVisible} />
      {page == "signin" ? <SignIn /> : <SignUp />}
    </div>
  );
};

export default ArtisanSignIn;
