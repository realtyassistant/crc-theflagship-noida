import { lazy } from "react";

const Header = lazy(() => import("./header"));
const HeroSec = lazy(() => import("./heroSec"));
const ImgWithText = lazy(() => import("./imgWithText"));
const ProjectOverview = lazy(() => import("./projectOverview"));
const BrochureStrip = lazy(() => import("./brochureStrip"));
const RowText = lazy(() => import("./rowText"));
const Amenities = lazy(() => import("./amenities"));
const Pricing = lazy(() => import("./pricing"));
const Gallery = lazy(() => import("./gallery"));
const FloorPlan = lazy(() => import("./floorPlan"));
const FooterConnect = lazy(() => import("./footerConnect"));
const Footer = lazy(() => import("./footer"));
const Location = lazy(() => import("./location"));

export { Header, HeroSec, ImgWithText, ProjectOverview, BrochureStrip, RowText, Amenities, Pricing, Gallery, FloorPlan, FooterConnect, Footer, Location };
