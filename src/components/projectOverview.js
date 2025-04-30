import React from "react";

export default function ProjectOverview() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">Project Overview</h2>
      <hr className="border-t-2 border-black" />

      <div className="custom-box-shadow mt-5 mb-6">
        <div className="grid grid-cols-12">
          {/* Row 1 */}
          <div className="col-span-4 text-[18px] font-bold py-2 px-[5px] lg:pl-[50px]">Type of Project:</div>
          <div className="col-span-8 py-2 px-[5px]">Apartments Township</div>

          {/* Row 2 - even row with bg */}
          <div className="col-span-4 text-[18px] font-bold py-2 lg:pl-[50px] px-[5px]  bg-[rgba(155,155,155,0.5)]">Location:</div>
          <div className="col-span-8 py-2 bg-[rgba(155,155,155,0.5)] px-[5px]">Off Panathur Main Road, East Bangalore</div>

          {/* Row 3 */}
          <div className="col-span-4 text-[18px] font-bold py-2 px-[5px] lg:pl-[50px]">Land Area:</div>
          <div className="col-span-8 py-2 px-[5px]">26 Acres</div>

          {/* Row 4 - even row with bg */}
          <div className="col-span-4 text-[18px] font-bold py-2 lg:pl-[50px] bg-[rgba(155,155,155,0.5)] px-[5px]">No. of Towers:</div>
          <div className="col-span-8 py-2 bg-[rgba(155,155,155,0.5)] px-[5px]">19 Towers</div>

          {/* Row 5 */}
          <div className="col-span-4 text-[18px] font-bold py-2 lg:pl-[50px] px-[5px]">Project Status:</div>
          <div className="col-span-8 py-2 px-[5px]">Under Construction</div>

          {/* Row 6 - even row with bg */}
          <div className="col-span-4 text-[18px] font-bold py-2 bg-[rgba(155,155,155,0.5)] lg:pl-[50px] px-[5px]">Possession Date:</div>
          <div className="col-span-8 py-2 bg-[rgba(155,155,155,0.5)] px-[5px]">Dec 2026</div>
        </div>
      </div>
    </>
  );
}
