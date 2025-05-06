import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload, FaCheckCircle } from "../../public/icon";
import LeadForm from "./leadForm";
import { btnOne, heroSecCardData } from "@/constant";

export default function HeroSec() {
  return (
    <>
      <div className="drop-shadow-lg lg:w-full lg:bg-[url('/banner.webp')] lg:bg-[length:100%_100%] lg:bg-no-repeat">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <div className="flex justify-between gap-3 xl:gap-30 items-center flex-col lg:flex-row h-auto xl:h-screen py-5">
            <div className="bg-[rgba(255,255,255,0.9)]  rounded-[20px] shadow-[rgba(0, 0, 0, 0.35) 0px 5px 5px] p-5 w-full lg:w-auto border border-black lg:border-none">
              <h1 className="custom-heading text-center text-themeColor !mb-0">{heroSecCardData?.heading}</h1>
              <p className="font-bold text-center text-[1.2rem] mb-3">{heroSecCardData?.location}</p>
              <hr className="border-t-2 border-black" />

              <div className="flex justify-center flex-col mx-auto text-center my-4">
                {heroSecCardData?.keyPoint?.map((v, i) => (
                  <p className="flex gap-2 items-center" key={i}>
                    <FaCheckCircle /> {v?.text}
                  </p>
                ))}
              </div>
              <hr className="border-t-2 border-black" />

              <h2 className="font-bold text-themeColor text-center text-[1.5rem] my-4">{heroSecCardData?.price}</h2>
              <p className="font-bold text-center text-[1.2rem] mb-3">{heroSecCardData?.text}</p>
              <div className="mt-8">
                <ButtonWithNumber btnName={heroSecCardData?.btnName} icon={<FaDownload />} />
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)]  rounded-[20px] shadow-[rgba(0, 0, 0, 0.35) 0px 5px 5px] p-5 border border-black lg:border-none">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
