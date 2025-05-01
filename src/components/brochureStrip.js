import { FaDownload } from "../../public/icon";
import ButtonWithNumber from "./buttonWithNumber";

export default function BrochureStrip({ heading = "", text = "", btnName = "Download Now", number = "" }) {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-[90px]">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10 text-center">
          <div>
            <h3 className="custom-heading  !mb-0 !text-white leading-[3rem]">{heading}</h3>
            <p className="mt-3">{text}</p>
          </div>
          <div>
            <ButtonWithNumber
              btnName={btnName}
              icon={<FaDownload />}
              customStyle="custom-btn flex items-center gap-4  !bg-white !text-themeColor"
              number={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
