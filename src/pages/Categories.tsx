import { FC } from "react";
import barber from "../assets/barber.jpeg";
import search from "../assets/svgs/search.svg";
import Navigator from "../components/Navigator";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  const categories = [
    { artisan: "Hairdresser", image: barber },
    { artisan: "Barber", image: barber },
    { artisan: "Makeup artist", image: barber },
    { artisan: "Nail Tech", image: barber },
    { artisan: "Tattoo Artist", image: barber },
    { artisan: "Waxing specialist", image: barber },
    { artisan: "Skincare Specialist", image: barber },
    { artisan: "Masseuse", image: barber },
  ];
  return (
    <>
      <div className="flex justify-center lg:justify-start items-center flex-col ipad:flex-row ipad:gap-10 overflow-hidden ipad:pt-5 md:pt-0 lg:mx-5 pb-5">
        <header className="sm:w-full ipad:w-fit text-lg sm:ml-24 ipad:mx-12 font-semibold my-5">
          Categories
        </header>
        <section className="w-fit flex justify-center items-center gap-3">
          <div className="flex bg-white h-fit justify-start items-center py-2 px-5 rounded-full gap-3 border-[1px] border-black/10 ipad:w-[60vw] sm:w-[90vw] my-8 sm:my-0  shadow-md">
            <img src={search} alt="search" className="w-4 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-[150px] sm:w-[120px] ipad:w-[250px] focus:outline-none placeholder:text-sm text-black"
            />
          </div>
        </section>
      </div>
      <section className="flex flex-wrap gap-5 my-5 mx-5 ipad:mx-16 lg:mx-40 justify-center items-center mb-20">
        {categories.map((object, id) => (
          <div key={id} className="w-[150px] md:w-[190px] lg:w-[220px]">
            <div className="rounded-xl border-[1px] border-black overflow-hidden">
              <img
                src={object.image}
                alt={object.artisan}
                className="object-cover"
              />
            </div>
            <p className="flex justify-center items-center my-1">
              {object.artisan}
            </p>
          </div>
        ))}
      </section>
      <div className="w-full flex justify-center items-center my-2">
        <Navigator />
      </div>
    </>
  );
};

export default Categories;
