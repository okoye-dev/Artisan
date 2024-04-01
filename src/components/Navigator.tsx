import { FC } from "react";
import { useNavigate } from "react-router-dom";
import home from "../assets/svgs/home.svg";
import categories from "../assets/svgs/categories.svg";
import nearby from "../assets/svgs/nearby.svg";

const Navigator: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-5 bg-gradient-to-b from-black/90 to-purple-950/80 rounded-full shadow-lg w-fit flex justify-center items-center py-2 px-6 gap-5 text-white text-[0.65rem] ipad:text-xs backdrop-blur-md">
      <button
        onClick={() => navigate("/home")}
        className="flex flex-col justify-center items-center p-1"
      >
        <img src={home} alt="home" width={"12px"} />
        Home
      </button>
      <button
        onClick={() => navigate("/categories")}
        className="flex flex-col justify-center items-center p-1"
      >
        <img
          src={categories}
          alt="categories"
          width={"13px"}
          className="pb-[0.15rem]"
        />
        Categories
      </button>
      <button
        onClick={() => navigate("/nearby")}
        className="flex flex-col justify-center items-center p-1"
      >
        <img src={nearby} alt="nearby" width={"12px"} />
        Nearby
      </button>
    </div>
  );
};

export default Navigator;
