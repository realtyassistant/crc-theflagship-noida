"use client";

import { btnOne, phoneNumber } from "@/constant";
import ButtonWithNumber from "./buttonWithNumber";

export default function CallWithEnquire() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full flex items-center bg-themeColor md:hidden ">
        {/* <div className="flex-1 text-center  text-white font-medium">
          <a className="block w-full" href={`tel:${phoneNumber}`}>
            Tap to Call
          </a>
        </div> */}
        <div className="flex-1">
          <ButtonWithNumber btnName={btnOne} icon={false} number={false} customStyle="!p-4 !rounded-none !w-full !text-[16px] !justify-center" />
        </div>
      </div>
    </>
  );
}
