import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container mx-auto px-2 sm:px-[90px]">
        <div className="text-center space-y-5">
          <p>©2025 | Sobha Neopolis (Project RERA Nu: PRM/KA/RERA/1251/446/PR/220923/006283) promoted by Authorised Channel Partner</p>
          <p>
            <strong>Disclaimer:</strong>
          </p>
          <Link href={"/privacy-policy"}>Privacy Policy</Link>
          <p>
            Digital Marketing Partner: &nbsp;
            <strong>
              <Link href="/">Realto Grow Marketing</Link>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}
