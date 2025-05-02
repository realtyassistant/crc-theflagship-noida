"use client";

import { phoneNumber } from "@/constant";
import { FaDownload, IoIosCall } from "../../public/icon";
import { ModalWraper } from "./modalWraper";
import { useEffect, useState } from "react";
import LeadForm from "./leadForm";
import TimerModal from "./timerModal";

export default function ButtonWithNumber({ btnName = "", icon = <FaDownload />, number = true, customStyle = "" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("hasClicked", false);
  }, []);

  const handleManualOpen = () => {
    setOpen(true);
    localStorage.setItem("hasClicked", "true"); // prevent TimerModal
  };

  return (
    <>
      <button className={`custom-btn flex items-center gap-4 mx-auto bg-themeColor ${customStyle}`} onClick={handleManualOpen}>
        {icon} {btnName}
      </button>
      <ModalWraper open={open} setOpen={setOpen}>
        <LeadForm />
      </ModalWraper>
      {/* {number && (
        <div className="mt-3 font-bold text-[1.2rem] flex items-center justify-center">
          <IoIosCall className="text-[1.4rem]" />
          <span>Call Us:</span> &nbsp;
          <a href={`tel:${phoneNumber}`} className="text-themeColor hover:underline">
            {phoneNumber}
          </a>
        </div>
      )} */}
    </>
  );
}
