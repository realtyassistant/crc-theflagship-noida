"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function TimerModal({ children, btnText = "", autoOpenModal = false, modalOpenTiming = 5000 }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const hasClickedButton = localStorage.getItem("hasClicked");
    // console.log(autoOpenModal, JSON.parse(hasClickedButton));
    let timer;
    if (autoOpenModal) {
      timer = setTimeout(() => {
        const hasClickedButton = localStorage.getItem("hasClicked");
        if (!JSON.parse(hasClickedButton || "false")) {
          setOpen(true);
        }
      }, modalOpenTiming);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [autoOpenModal, modalOpenTiming]); // Added dependencies

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{btnText && <button className="btn-color">{btnText}</button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>{children}</div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
