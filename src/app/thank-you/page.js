"use client";

import { phoneNumber, thankYouURL } from "@/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function ThankYouPage() {
  const router = useRouter();

  const getLeadId = Cookies.get("leadId");

  const thankYouPageRequest = async () => {
    if (getLeadId) {
      try {
        const response = await fetch(thankYouURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ lead_id: getLeadId }),
        });

        const data = await response.json();

        if (data?.status) {
          Cookies.remove("leadId");
          setTimeout(() => {
            router.push("/");
          }, 5000);
        } else {
          console.warn("Invalid response:", data);
        }
      } catch (error) {
        console.error("Failed to send thank-you request:", error);
      }
    } else {
      console.warn("leadId cookie not found!");
    }
  };

  useEffect(() => {
    thankYouPageRequest();
  }, [getLeadId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-3xl font-bold text-themeColor mb-4">Thank You</h1>
      <p className="text-lg font-medium text-gray-800 mb-6">
        For being Interested in the Property. Our Customer Relationship Manager will get back to you shortly.
      </p>

      <Link href={`tel:${phoneNumber}`}>
        <div className="custom-btn flex items-center gap-4 mx-auto bg-themeColor text-white px-6 py-2 rounded shadow hover:bg-opacity-90">{phoneNumber}</div>
      </Link>

      <Link href="/" className="mt-6 text-black underline hover:text-themeColor transition">
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
}
