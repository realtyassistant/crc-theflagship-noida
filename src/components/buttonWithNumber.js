import { phoneNumber } from "@/constant";
import { FaDownload, IoIosCall } from "../../public/icon";

export default function ButtonWithNumber({ btnName = "", icon = <FaDownload /> }) {
  return (
    <>
      <button className="custom-btn flex items-center gap-4 mx-auto">
        {icon} {btnName}
      </button>
      <div className="mt-3 font-bold text-[1.2rem] flex items-center justify-center">
        <IoIosCall className="text-[1.4rem]" />
        <span>Call Us:</span> &nbsp;
        <a href={`tel:${phoneNumber}`} className="text-[#142d63] hover:underline">
          {phoneNumber}
        </a>
      </div>
    </>
  );
}
