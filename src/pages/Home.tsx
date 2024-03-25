import { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="w-screen h-screen bg-blue text-white text-3xl font-bold flex justify-center items-center text-center">
      Sorry, this page is still in development.
    </div>
  );
};

export default Home;
