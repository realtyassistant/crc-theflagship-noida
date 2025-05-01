import { aboutCrcGropupData } from "@/constant";
import React from "react";

export default function AboutCrcGroup() {
  return (
    <>
      <h1 className="custom-heading text-center text-themeColor">{aboutCrcGropupData?.heading}</h1>
      <p className="text-justify">{aboutCrcGropupData?.paraOne}</p>
      <p className="text-justify">{aboutCrcGropupData?.paraTwo}</p>
      <p className="text-justify">{aboutCrcGropupData?.paraThree}</p>
      <div dangerouslySetInnerHTML={{ __html: aboutCrcGropupData?.paraFour }}></div>
    </>
  );
}
