import { FaLock } from "../../public/icon";
import ButtonWithNumber from "./buttonWithNumber";

export default function Pricing() {
  return (
    <>
      <h2 className="custom-heading text-center">Pricing</h2>

      {/* table */}
      <div className="custom-box-shadow mt-5 mb-6 overflow-x-auto">
        <table className="lg:table-fixed min-w-full lg:w-full text-left text-sm">
          <thead className="border-b-2 border-black">
            <tr>
              <th className="py-3 px-4 font-bold text-[18px]">Type</th>
              <th className="py-3 px-4 font-bold text-[18px]">Sizes</th>
              <th className="py-3 px-4 font-bold text-[18px]">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">1 BHK</td>
              <td className="py-3 px-4">666 Sq.Ft</td>
              <td className="py-3 px-4">₹93 L*</td>
            </tr>
            <tr className="bg-[rgba(155,155,155,0.5)] border-b">
              <td className="py-3 px-4">1 BHK</td>
              <td className="py-3 px-4">666 Sq.Ft</td>
              <td className="py-3 px-4">
                <button className="custom-btn flex items-center gap-2 text-[#142d63]">
                  <FaLock /> Unlock Price
                </button>
              </td>
            </tr>
            <tr className="">
              <td className="py-3 px-4">1 BHK</td>
              <td className="py-3 px-4">666 Sq.Ft</td>
              <td className="py-3 px-4">₹93 L*</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* button with number */}
      <ButtonWithNumber btnName="Get Price Sheet & Payment Plan" />
    </>
  );
}
