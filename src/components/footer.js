import { footerData } from "@/constant";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-[90px]">
        <div className="text-center space-y-5">
          <p>{footerData?.paraOne}</p>

          <p className="text-justify">
            <strong>Disclaimer:</strong> {footerData?.disclaimer} &nbsp;
            <Link href={"/privacy-policy"} className="font-bold hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
