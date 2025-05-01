// import localFont from "next/font/local";
import { FaWhatsapp } from "react-icons/fa";
import "./globals.css";
import { Urbanist } from "next/font/google";
import { phoneNumber } from "@/constant";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights you want
  variable: "--font-urbanist", // Custom CSS variable name
});

export const metadata = {
  title: "CRC The Flagship",
  description:
    "CRC The Flagship in Sector 140A is a premium 2.4 million sq. ft. ultra-modern business and retail complex. Designed to meet today’s business needs, CRC Flagship retail shops in Noida offer an ideal environment for rapid scalability and expansion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        {/* <script>
          {`  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2T5BPNP');`}
        </script> */}
      </head>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}> */}
      <body className={urbanist.variable}>
        {children}

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2T5BPNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <a
          href={`https://wa.me/${phoneNumber}`} // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-custom-shadow cursor-pointer hover:bg-green-600 transition"
        >
          <FaWhatsapp size={24} />
        </a>
      </body>
    </html>
  );
}
