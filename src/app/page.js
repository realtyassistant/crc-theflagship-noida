import AboutCrcGroup from "@/components/aboutCrcGroup";
import Amenities from "@/components/amenities";
import BrochureStrip from "@/components/brochureStrip";
import CallWithEnquire from "@/components/callWithEnquire";
import FloorPlan from "@/components/floorPlan";
import Footer from "@/components/footer";
import FooterConnect from "@/components/footerConnect";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import HeroSec from "@/components/heroSec";
import ImgWithText from "@/components/imgWithText";
import LeadForm from "@/components/leadForm";
import Location from "@/components/location";
import Pricing from "@/components/pricing";
import ProjectOverview from "@/components/projectOverview";
import RowText from "@/components/rowText";
import TimerModal from "@/components/timerModal";
import { phoneNumber, brochureData, bookNowData } from "@/constant";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <div className="lg:hidden relative w-full h-[300px] mb-3">
        <Image src="/banner-mobile.webp" alt="Mobile banner" fill className="object-cover" sizes="100vw" priority />
      </div>

      <div className="sm:mb-[100px]">
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

      <div className="container mx-auto px-2 sm:px-[90px] mb-[100px]">
        <AboutCrcGroup />
      </div>

      <FooterConnect />

      <div className="bg-black text-white py-[60px] px-[16px]">
        <Footer />
      </div>

      <TimerModal autoOpenModal={true}>
        <LeadForm />
      </TimerModal>

      <CallWithEnquire />
    </>
  );
}
