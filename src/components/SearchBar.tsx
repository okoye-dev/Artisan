import { FC } from "react";
import search from "../assets/svgs/search.svg";

interface IProps {};

const SearchBar:FC<IProps> = () => {
   return (
     <div className="flex bg-white h-fit justify-start items-center py-2 px-5 rounded-full gap-3 border-[1px] border-black/10 ipad:w-[60vw] sm:w-[90vw] my-8 sm:my-0  shadow-md">
       <img src={search} alt="search" className="w-4 cursor-pointer" />
       <input
         type="text"
         placeholder="Search"
         className="bg-transparent w-full focus:outline-none placeholder:text-sm text-black"
       />
     </div>
   );
};

export default SearchBar;