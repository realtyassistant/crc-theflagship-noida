import Amenities from "@/components/amenities";
import BrochureStrip from "@/components/brochureStrip";
import FloorPlan from "@/components/floorPlan";
import Footer from "@/components/footer";
import FooterConnect from "@/components/footerConnect";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import HeroSec from "@/components/HeroSec";
import ImgWithText from "@/components/imgWithText";
import Location from "@/components/Location";
import Pricing from "@/components/pricing";
import ProjectOverview from "@/components/projectOverview";
import RowText from "@/components/rowText";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSec />
      <ImgWithText />
      <ProjectOverview />
      <BrochureStrip />
      <RowText />
      <Amenities />
      <Pricing />
      <BrochureStrip />
      <Gallery />
      <FloorPlan />
      <Location />
      <FooterConnect />
      <Footer />
    </>
  );
}
