import Image from "next/image";
import { FaCheck } from "../../public/icon";
import ButtonWithNumber from "./buttonWithNumber";
import { FaCarAlt } from "../../public/icon";
import { btnEight, locationHeading, locationData, locationImage } from "@/constant";

export default function Location() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">{locationHeading}</h2>
      <hr className="border-t-2 border-black" />

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="flex-1">
          {/* <h2 className="font-bold text-[1.4rem] mb-3">Location Advantage</h2> */}
          <ul>
            {locationData && locationData.length > 0 ? (
              locationData?.map((v, i) => (
                <li className="flex items-center gap-2" key={i}>
                  <FaCheck /> {v}
                </li>
              ))
            ) : (
              <li>No location found</li>
            )}
          </ul>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[350px]">
            <Image src={locationImage} alt="Sample Image" fill className="rounded-[10px] object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName={btnEight} icon={<FaCarAlt />} />
      </div>
    </>
  );
}
