import React from "react";
import { CustomSlider } from "./customSlider";
import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";
import Image from "next/image";
import { btnSix, galleryHeading, galleryImages } from "@/constant";

export default function Gallery() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">{galleryHeading}</h2>

      <div className="custom-box-shadow mt-5 mb-6  !py-[1rem] lg:!px-[7rem] lg:!py-[4rem] bg-white flex justify-center">
        <CustomSlider data={galleryImages} />
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName={btnSix} icon={<FaDownload />} />
      </div>
    </>
  );
}
