import { FC } from "react";
import useGetCategories from "./hooks/useGetCategories";

interface IProps {}

const CategoriesList: FC<IProps> = () => {
  const categories = useGetCategories();

  return (
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
  );
};

export default CategoriesList;
