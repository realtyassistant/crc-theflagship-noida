import Image from "next/image";
import { FaWpforms } from "../../public/icon";

export default function ImgWithText() {
  return (
    <>
      <h1 className="custom-heading text-center">Your Home To Live Your Life At Its Best</h1>
      <hr className="border-t-2 border-black" />
      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        <div className="flex-1">
          <div className="relative w-full h-[350px]">
            <Image src="/banner.jpg" alt="Sample Image" fill className="rounded-[10px] object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <p>
            Sprawled over 26 acres stands Sobha Neopolis, a Greek Theme Apartments Township with 1, 3 & 4 Bedroom Apartments off Panathur Main Road, East
            Bengaluru for those who have found their space complete with the relaxed air and natural calm that comes with feeling utterly at home.
          </p>
          <p className="mt-10">
            The location is right in the heart of East Bangalore. Several Reputed Schools, Hospitals & Major IT Parks are within 10 mins radius of the project.
          </p>
          <button className="custom-btn flex items-center gap-4 mx-auto mt-10">
            <FaWpforms /> Enquire Now
          </button>
        </div>
      </div>
    </>
  );
}
