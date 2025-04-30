import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";

export default function Amenities() {
  return (
    <>
      <h2 className="custom-heading text-themeColor text-center">Amenities</h2>
      <div className="custom-box-shadow mt-5 mb-6 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 px-6 gap-3 text-center lg:text-left">
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
          <div className="col-span-6">➤ Club House</div>
        </div>
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName="Get Specifications" icon={<FaDownload />} />
      </div>
    </>
  );
}
