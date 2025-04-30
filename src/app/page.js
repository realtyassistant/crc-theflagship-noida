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
import { phoneNumber, brochureData, bookNowData } from "@/constant";

export default function Home() {
  return (
    <>
      <Header />

      <div className="mb-[100px]">
        <HeroSec />
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <ImgWithText />
      </div>

      <div className="bg-bgColor py-[60px] px-[16px]" id="overview">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <ProjectOverview />
        </div>
      </div>

      <div className="bg-themeColor text-white py-[60px] px-[16px] mb-[100px]">
        <BrochureStrip {...brochureData} />
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <RowText />
      </div>

      <div className="bg-bgColor py-[60px] px-[16px] mb-[100px]" id="amenities">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <Amenities />
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]" id="pricing">
        <Pricing />
      </div>

      <div className="bg-themeColor text-white py-[60px] px-[16px] mb-[100px]">
        <BrochureStrip {...bookNowData} />
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]" id="gallery">
        <Gallery />
      </div>

      <div className="bg-bgColor py-[60px] px-[16px] mb-[100px]" id="plans">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <FloorPlan />
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]" id="location">
        <Location />
      </div>

      <FooterConnect />

      <div className="bg-black text-white py-[60px] px-[16px]">
        <Footer />
      </div>
    </>
  );
}
