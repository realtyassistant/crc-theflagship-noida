import { CustomSlider } from "./customSlider";
// import ButtonWithNumber from "./buttonWithNumber";
// import { FaDownload } from "../../public/icon";
import Image from "next/image";
import { btnSeven, floorPlanHeading, floorPlanImages } from "@/constant";

export default function FloorPlan() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">{floorPlanHeading}</h2>

      <div className="custom-box-shadow mt-5 mb-6  !py-[1rem] lg:!px-[7rem] lg:!py-[4rem] bg-white flex justify-center">
        <CustomSlider data={floorPlanImages} showBtn={true} />
      </div>

      {/* <div className="mt-8">
        <ButtonWithNumber btnName={btnSeven} icon={<FaDownload />} />
      </div> */}
    </>
  );
}
