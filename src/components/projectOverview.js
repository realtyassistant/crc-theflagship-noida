import { projectOverviewData, projectOverviewHeading } from "@/constant";
import React from "react";

export default function ProjectOverview() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">{projectOverviewHeading}</h2>
      <hr className="border-t-2 border-black" />

      <div className="custom-box-shadow mt-5 mb-6">
        <div className="grid grid-cols-12">
          {projectOverviewData &&
            projectOverviewData.length > 0 &&
            projectOverviewData?.map((v, i) => (
              <React.Fragment key={i}>
                <div
                  className={
                    i % 2 !== 0
                      ? "col-span-4 text-[18px] font-bold py-2 lg:pl-[50px] px-[5px]  bg-[rgba(155,155,155,0.5)]"
                      : "col-span-4 text-[18px] font-bold py-2 px-[5px] lg:pl-[50px]"
                  }
                >
                  {v?.title}
                </div>
                <div className={i % 2 !== 0 ? "col-span-8 py-2 bg-[rgba(155,155,155,0.5)] px-[5px]" : "col-span-8 py-2 px-[5px]"}>{v?.text}</div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
}
