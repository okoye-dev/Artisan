import { FC, useEffect, useState } from "react";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUseArtisan from "@/components/WhyUseArtisan";
import DownloadLinks from "@/components/DownloadLinks";

const Landing: FC = () => {
  const navigate = useNavigate();
  const goToGetStarted = () => {
    navigate("/get-started");
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Loading />
      <div
        className={`opacity-0 transition-all duration-200 ${
          !loading && "opacity-100"
        } `}
      >
        <Navbar />
        <Hero />
        <WhyUseArtisan />
        <section className="rounded-t-[2rem] flex justify-center items-center -translate-y-12 py-5 ipad:py-8 z-30 bg-white sm:flex-col ipad:flex-row">
          <DownloadLinks />
          <span className="h-[1px] bg-black/30 w-3/4 ipad:hidden" />
          <button
            onClick={goToGetStarted}
            className={`ipad:ml-8 flex justify-center items-center text-white font-semibold transiton-all duration-500 ease-in-out m-3 px-8 py-3 bg-gradient-to-r bg-large bg-[left] hover:bg-[right] from-blue via-purple-500 via-[40%] to-black rounded-2xl hover:scale-105 shadow-lg hover:shadow-2xl`}
          >
            Continue on web
          </button>
          <p className="text-xs absolute bottom-0 z-20">All rights reserved.</p>
        </section>
      </div>
    </div>
  );
};

export default Landing;
