import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";
import { amenitiesData, amenitiesHeading, btnFour } from "@/constant";
import React from "react";

export default function Amenities() {
  return (
    <>
      <h2 className="custom-heading text-themeColor text-center">{amenitiesHeading}</h2>
      <div className="custom-box-shadow mt-5 mb-6 bg-white">
        <div className="grid grid-cols-12 lg:grid-cols-12 px-6 gap-3 sm:text-center lg:text-left">
          {amenitiesData &&
            amenitiesData.length > 0 &&
            amenitiesData?.map((v, i) => (
              <React.Fragment key={i}>
                <div className="col-span-6">➤{v}</div>
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName={btnFour} icon={<FaDownload />} />
      </div>
    </>
  );
}
