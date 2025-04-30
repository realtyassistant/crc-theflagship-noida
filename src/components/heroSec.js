import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload, FaCheckCircle } from "../../public/icon";
import LeadForm from "./leadForm";

export default function HeroSec() {
  return (
    <>
      <div className="hero-sec-bg sm:h-screen">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <div className="flex justify-between gap-3 lg:gap-40 items-center flex-col lg:flex-row h-auto lg:h-screen py-5">
            <div className="bg-[rgba(255,255,255,0.9)]  rounded-[20px] shadow-[rgba(0, 0, 0, 0.7) 0px 1px 5px] p-5">
              <h2 className="custom-heading text-center text-themeColor !mb-0">CRC The Flagship</h2>
              <p className="font-bold text-center text-[1.2rem] mb-3">Sector 140A, Noida</p>
              <hr className="border-t-2 border-black" />

              <div className="flex justify-center flex-col mx-auto text-center my-4">
                <p className="flex gap-2 items-center">
                  <FaCheckCircle /> Premium Retail Shops
                </p>
                <p className="flex gap-2 items-center">
                  <FaCheckCircle /> Right On Noida Expressway
                </p>
                <p className="flex gap-2 items-center">
                  <FaCheckCircle /> Close To Prime Business & IT Parks
                </p>
              </div>
              <hr className="border-t-2 border-black" />

              <h2 className="font-bold text-themeColor text-center text-[1.5rem] my-4">₹75 Lakhs Onwards*</h2>
              <p className="font-bold text-center text-[1.2rem] mb-3">Limited Units Left… Hurry Up!</p>
              <div className="mt-8">
                <ButtonWithNumber btnName="Enquire Now" icon={<FaDownload />} />
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.9)]  rounded-[20px] shadow-[rgba(0, 0, 0, 0.7) 0px 1px 5px] p-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
