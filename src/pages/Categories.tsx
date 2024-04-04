import { FC } from "react";
import Navigator from "../components/Navigator";
import CategoriesList from "@/components/CategoriesList";
import HeaderWithSearch from "@/components/HeaderWithSearch";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  return (
    <>
      <HeaderWithSearch>Categories</HeaderWithSearch>
      <CategoriesList />
      <div className="w-full flex justify-center items-center my-2">
        <Navigator />
      </div>
    </>
  );
};

export default Categories;
