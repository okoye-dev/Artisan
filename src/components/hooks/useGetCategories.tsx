import barber from "../../assets/barber.jpeg";

const useGetCategories = () => {

   //fetch categories from backend

   // dummy data
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
  return categories;
};

export default useGetCategories;
