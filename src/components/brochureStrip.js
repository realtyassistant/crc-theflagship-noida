import { FaDownload } from "../../public/icon";

export default function BrochureStrip({ heading = "", text = "", btnName = "Download Now", number = "" }) {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-[90px]">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-10 text-center">
          <div>
            <h3 className="custom-heading !mb-0 !text-white leading-[3rem]">{heading}</h3>
            <p className="mt-3">{text}</p>
          </div>
          <div>
            <button className="custom-btn flex items-center gap-4  !bg-white !text-[#142d63]">
              <FaDownload /> {btnName}
            </button>

            {number && (
              <p className="mt-3 font-bold">
                Call Us:{" "}
                <a href={`tel:${number}`} className="text-white hover:underline">
                  {number}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
