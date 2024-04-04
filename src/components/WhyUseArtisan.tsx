import { FC } from "react";
import shipping from "../assets/svgs/shipping.svg";
import variety from "../assets/svgs/variety.svg";
import quality from "../assets/svgs/quality.svg";

interface IProps {}

const WhyUseArtisan: FC<IProps> = () => {
  interface whyUseArtisan {
    header: string;
    content: string;
    icon: string;
    id?: number;
  }
  const whyUseArtisanList: whyUseArtisan[] = [
    {
      header: "Convenience",
      content:
        "Our app offers hassle-free booking in just a few taps. Say goodbye to long phone calls and waiting times. With instant confirmation and easy rescheduling, managing your appointments has never been easier.",
      icon: shipping,
    },
    {
      header: "Variety",
      content:
        "Explore a diverse range of skilled artisans at your fingertips. Whether you need a stylist, makeup artist, or just a quick haircut, we connect you with talented professionals tailored to your specific needs and preferences.",
      icon: variety,
    },
    {
      header: "Quality Assurance",
      content:
        "Rest assured knowing that all artisans on our platform are thoroughly vetted and reviewed by previous clients. Experience top-notch service and impeccable craftsmanship every time you book through our app.",
      icon: quality,
      id: 0,
    },
  ];

  return (
    <section className="rounded-t-[2rem] bg-gradient-to-b from-blue to-purple-700 to-[80%] mt-20 ipad:p-10 p-6 flex flex-col justify-center items-center z-20">
      <h1 className="font-bold text-3xl ipad:text-4xl text-white mb-10">
        Why use artisan?
      </h1>
      <div className="m-2 gap-10 flex ipad:flex-wrap ipad:flex-row sm:flex-col justify-center items-center pb-20">
        {whyUseArtisanList.map((obj, i) => (
          <div
            key={i}
            className="text-white flex flex-col justify-center items-center gap-2 ipad:bg-white/20 ipad:p-4 ipad:rounded-lg ipad:w-2/5 ipad:pb-8 hover:shadow-custom2 transition-all duration-500 ease-in-out hover:scale-[1.01]"
          >
            <img
              src={obj.icon}
              alt={obj.header}
              className={`w-10 bg-white rounded-full shadow-lg ${
                obj.id == 0 ? "p-0" : "p-2"
              }`}
            />
            <h1 className="text-center text-2xl ipad:text-xl font-medium kaushan">
              {obj.header}
            </h1>
            <p className="text-xs w-3/4 text-center sm:pb-10 ipad:pb-0">
              {obj.content}
            </p>
            {obj.id !== 0 && (
              <div className="mt-10 sm:mt-0 w-full h-[1px] bg-white ipad:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUseArtisan;
