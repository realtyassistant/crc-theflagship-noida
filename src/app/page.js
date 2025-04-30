import Amenities from "@/components/amenities";
import BrochureStrip from "@/components/brochureStrip";
import FloorPlan from "@/components/floorPlan";
import Footer from "@/components/footer";
import FooterConnect from "@/components/footerConnect";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import HeroSec from "@/components/heroSec";
import ImgWithText from "@/components/imgWithText";
import Location from "@/components/location";
import Pricing from "@/components/pricing";
import ProjectOverview from "@/components/projectOverview";
import RowText from "@/components/rowText";
import { phoneNumber } from "@/constant";

export default function Home() {
  const brochureData = {
    heading: "Download E-Brochure Now!",
    text: "Get all the details about the project to make an informed decision!",
  };

  const bookNowData = {
    heading: "Book your Site Visit Now!",
    text: "Visit the site & see if your requirements are matching, book your site visit now!",
    btnName: "Book Now",
    number: phoneNumber,
  };

  return (
    <>
      <Header />
      <HeroSec />
      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <ImgWithText />
      </div>

      <div className="bg-color py-[60px] px-[16px]">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <ProjectOverview />
        </div>
      </div>

      <div className="bg-[#142d63] text-white py-[60px] px-[16px] mb-[100px]">
        <BrochureStrip {...brochureData} />
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <RowText />
      </div>

      <div className="bg-color py-[60px] px-[16px] mb-[100px]">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <Amenities />
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <Pricing />
      </div>
      <div className="bg-[#142d63] text-white py-[60px] px-[16px]">
        <BrochureStrip {...bookNowData} />
      </div>
      <Gallery />
      <FloorPlan />
      <Location />
      <FooterConnect />

      <div className="bg-black text-white py-[60px] px-[16px]">
        <Footer />
      </div>
    </>
  );
}
