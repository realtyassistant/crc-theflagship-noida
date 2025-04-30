import { CustomSlider } from "./customSlider";
import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";
import Image from "next/image";

export default function FloorPlan() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">Master & Floor Plans</h2>

      <div className="custom-box-shadow mt-5 mb-6 !px-[3.5rem] !py-[1rem] lg:!px-[7rem] lg:!py-[4rem] bg-white flex justify-center">
        <CustomSlider>
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[32rem]">
            <Image src="/banner.jpg" alt="Sample" fill className="object-cover rounded-md" sizes="100vw" />
          </div>
        </CustomSlider>
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName="Get All Floor Plans & Specifications" icon={<FaDownload />} />
      </div>
    </>
  );
}
