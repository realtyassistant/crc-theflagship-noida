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
            The content mentioned on this website is for information purposes only, price mentioned are subject to change without notice & properties mentioned
            are subject to availability. Images for representation purposes only. This is not the official website. this website belongs to the authorised sales
            partner. We may also send updates to the mobile number/email id registered with us.
          </p>
          <p>
            <strong>Privacy Policy: </strong>We collect information from you when you register on our site or fill out a form. When filling out a form on our
            site you may be asked to enter your: name, e-mail address and phone number. You may, however, visit our site anonymously. Any information we collect
            from you is to personalize your experience and improve our website and customer service.
          </p>
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
