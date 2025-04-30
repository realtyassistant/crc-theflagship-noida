import Image from "next/image";
import { FaCheck } from "../../public/icon";
import ButtonWithNumber from "./buttonWithNumber";
import { FaCarAlt } from "../../public/icon";

export default function Location() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">Unbeatable Location</h2>
      <hr className="border-t-2 border-black" />

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="flex-1">
          <h2 className="font-bold text-[1.4rem] mb-3">Location Advantage</h2>
          <ul>
            <li className="flex items-center gap-2">
              <FaCheck /> Prestige Tech Park - 3.5 Km
            </li>
            <li className="flex items-center gap-2">
              <FaCheck /> Embassy TechVillage - 0.10 km
            </li>
            <li className="flex items-center gap-2">
              <FaCheck /> Pritech Park - 5.5 Km
            </li>
            <li className="flex items-center gap-2">
              <FaCheck /> Oakridge International School - 8 Km
            </li>
            <li className="flex items-center gap-2">
              <FaCheck /> The International School Bangalore - 7 Km
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="relative w-full h-[350px]">
            <Image src="/banner.jpg" alt="Sample Image" fill className="rounded-[10px] object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ButtonWithNumber btnName="Book Site Visit" icon={<FaCarAlt />} />
      </div>
    </>
  );
}
