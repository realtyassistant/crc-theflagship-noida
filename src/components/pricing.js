import { pricingTableHeadings, pricingHeading, priceBtn, pricingTableData } from "@/constant";
import { FaLock } from "../../public/icon";
import ButtonWithNumber from "./buttonWithNumber";

export default function Pricing() {
  return (
    <>
      <h2 className="custom-heading text-center text-themeColor">{pricingHeading}</h2>

      {/* table */}
      <div className="custom-box-shadow mt-5 mb-6 overflow-x-auto">
        <table className="lg:table-fixed min-w-full lg:w-full text-left text-sm">
          <thead className="border-b-2 border-black">
            {pricingTableHeadings &&
              pricingTableHeadings.length > 0 &&
              pricingTableHeadings?.map((v, i) => (
                <tr key={i}>
                  <th className="py-3 px-4 font-bold text-[18px]">{v.tableHeadingFirst}</th>
                  <th className="py-3 px-4 font-bold text-[18px]">{v.tableHeadingSecond}</th>
                  <th className="py-3 px-4 font-bold text-[18px]">{v.tableHeadingThird}</th>
                </tr>
              ))}
          </thead>
          <tbody>
            {pricingTableData &&
              pricingTableData?.length > 0 &&
              pricingTableData?.map((v, i) => (
                <tr key={i}>
                  <td className="py-3 px-4">{v?.tableTextFirst}</td>
                  <td className="py-3 px-4">{v?.tableTextSecond}</td>
                  <td className="py-3 px-4">{v?.tableTextThird}</td>
                </tr>
              ))}
            {/* <tr className="bg-[rgba(155,155,155,0.5)] border-b">
              <td className="py-3 px-4">1 BHK</td>
              <td className="py-3 px-4">666 Sq.Ft</td>
              <td className="py-3 px-4">
                <button className="custom-btn flex items-center gap-2 text-themeColor bg-themeColor">
                  <FaLock /> Unlock Price
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>

      {/* button with number */}
      <ButtonWithNumber btnName={priceBtn} />
    </>
  );
}
