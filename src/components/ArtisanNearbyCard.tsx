import { FC } from "react";

interface IProps {
  title: string;
  address: string;
  distance: string;
  image?: string;
}

const ArtisanNearbyCard: FC<IProps> = ({
  image,
  title,
  address,
  distance,
}: IProps) => {
  return (
    <div className="flex gap-4 justify-start items-center w-full md:w-[500px] lg:w-[800px] px-4 py-3 rounded-xl border-[1px] border-black">
      <div className="flex justify-center items-center w-[100px] lg:w-[150px] aspect-square overflow-hidden rounded-xl">
        <img src={image} alt="img" className="object-cover" />
      </div>
      <div className="flex flex-col w-full">
        <section className="flex flex-col justify-start items-start">
          <h1 className="font-bold lg:text-lg">{title}</h1>
          <p className="text-[0.65rem] lg:text-sm text-black/70">{address}</p>
        </section>
        <p className="flex justify-end items-center w-full text-[0.65rem] lg:text-sm text-black/70">
          {distance}
        </p>
      </div>
    </div>
  );
};

export default ArtisanNearbyCard;
