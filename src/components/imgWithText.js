import Image from "next/image";
import { FaWpforms } from "../../public/icon";
import { imagWithTextData } from "@/constant";
import ButtonWithNumber from "./buttonWithNumber";

export default function ImgWithText() {
  return (
    <>
      <h1 className="custom-heading text-center text-themeColor">{imagWithTextData?.heading}</h1>
      <hr className="border-t-2 border-black" />
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="flex-1">
          <div className="relative w-full h-[350px]">
            <Image src={imagWithTextData?.image} alt={imagWithTextData?.alt} fill className="rounded-[10px] object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <p dangerouslySetInnerHTML={{ __html: imagWithTextData?.firstPara }}></p>
          <p dangerouslySetInnerHTML={{ __html: imagWithTextData?.secondPara }}></p>
          <p>{imagWithTextData?.thirdPara}</p>
          <p dangerouslySetInnerHTML={{ __html: imagWithTextData?.fourthPara }}></p>
          <p>{imagWithTextData?.reraNumber}</p>

          <div className="mt-10">
            <ButtonWithNumber btnName={imagWithTextData?.btnName} icon={<FaWpforms />} number={false} />
          </div>
        </div>
      </div>
    </>
  );
}
