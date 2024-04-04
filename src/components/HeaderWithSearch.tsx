import { FC } from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
  children: string;
}

const HeaderWithSearch: FC<HeaderProps> = ({ children }: HeaderProps) => {
  return (
    <div className="flex justify-center lg:justify-start items-center flex-col ipad:flex-row ipad:gap-10 overflow-hidden ipad:pt-5 md:pt-0 lg:mx-5 pb-5">
      <header className="sm:w-full ipad:w-fit text-lg sm:ml-24 ipad:mx-12 font-semibold my-5">
        {children}
      </header>
      <SearchBar />
    </div>
  );
};

export default HeaderWithSearch;
