import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";
import { rowWithTextData } from "@/constant";

export default function RowText() {
  return (
    <>
      <div>
        <h3 className="custom-heading text-center text-themeColor">{rowWithTextData?.heading}</h3>
        <hr className="border-t-2 border-black" />
        <ul className="mt-4 space-y-4">
          <li dangerouslySetInnerHTML={{ __html: rowWithTextData?.firstPara }}></li>
          <li dangerouslySetInnerHTML={{ __html: rowWithTextData?.secondPara }}></li>
          <li dangerouslySetInnerHTML={{ __html: rowWithTextData?.thirdPara }}></li>
        </ul>
        <p>{rowWithTextData?.reraNumber}</p>

        <hr className="border-t-2 border-black mt-5" />

        <p className="text-center mt-4">
          <strong>{rowWithTextData?.text}</strong>
        </p>
        <div className="mt-8">
          <ButtonWithNumber btnName={rowWithTextData?.btnName} icon={<FaDownload />} />
        </div>
      </div>
    </>
  );
}
