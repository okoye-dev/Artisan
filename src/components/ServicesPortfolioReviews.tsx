import { FC, useState } from "react";

interface IProps {
  onClick: (i: number) => void;
}

const ServicesPortfolioReviews: FC<IProps> = ({ onClick }: IProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const toggleSection = (i: number) => {
    setActiveSection(i);
    onClick(i);
  };

  const sections = ["Services", "Portfolio", "Reviews"];
  return (
    <div className="relative w-full lg:w-4/5 ipad:text-lg my-5 flex justify-around font-bold">
      {sections.map((section, index) => (
        <button
          onClick={() => toggleSection(index)}
          className="w-full flex justify-center items-center"
        >
          {section}
        </button>
      ))}

      <span className="absolute h-1 w-full bg-black/20 top-6 ipad:top-8 rounded-full"></span>
      <span
        className={`absolute h-1 w-1/3 bg-blue top-6 ipad:top-8 rounded-full transition-all duration-300 ease-in-out ${
          activeSection == 0 && "left-0"
        } ${activeSection == 1 && "left-1/3"} ${
          activeSection == 2 && "left-2/3"
        }`}
      ></span>
    </div>
  );
};

export default ServicesPortfolioReviews;
