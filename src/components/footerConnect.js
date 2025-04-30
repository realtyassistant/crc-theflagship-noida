import LeadForm from "./leadForm";

export default function FooterConnect() {
  return (
    <>
      <div className="hero-sec-bg">
        <div className="container mx-auto px-2 sm:px-[90px]">
          <div className="flex justify-end items-center h-screen">
            <div className="bg-[rgba(255,255,255,0.9)]  rounded-[20px] shadow-[rgba(0, 0, 0, 0.7) 0px 1px 5px] p-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
