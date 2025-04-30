import ButtonWithNumber from "./buttonWithNumber";
import { FaDownload } from "../../public/icon";

export default function RowText() {
  return (
    <>
      <div>
        <h3 className="custom-heading text-center text-themeColor">LUXURY LIVING FOR A SELECT FEW AT SOBHA NEOPOLIS</h3>
        <hr className="border-t-2 border-black" />
        <ul className="mt-4 space-y-4">
          <li>
            ➤ It offers Spacious & luxurious 1, 3 & 4 BHK Apartments right in the heart of East Bangalore, standing tall on upscale Panathur Main Road, it is
            going to be a Landmark Development and the Ideal Setting for your Life.
          </li>

          <li>
            ➤ It offers Spacious & luxurious 1, 3 & 4 BHK Apartments right in the heart of East Bangalore, standing tall on upscale Panathur Main Road, it is
            going to be a Landmark Development and the Ideal Setting for your Life.
          </li>

          <li>
            ➤ It offers Spacious & luxurious 1, 3 & 4 BHK Apartments right in the heart of East Bangalore, standing tall on upscale Panathur Main Road, it is
            going to be a Landmark Development and the Ideal Setting for your Life.
          </li>
        </ul>

        <hr className="border-t-2 border-black mt-5" />

        <p className="text-center mt-4">
          <strong>New launch offer is applicable for a limited time only, Register Now.</strong>
        </p>
        <div className="mt-8">
          <ButtonWithNumber btnName="Get New Launch Offer" icon={<FaDownload />} />
        </div>
      </div>
    </>
  );
}
