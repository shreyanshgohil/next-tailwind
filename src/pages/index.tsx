import { Banner, CompanyListing } from "@/components/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Home page
export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <div className="banner">
        <Banner />
      </div>
      <div className="company-list">
        <CompanyListing />
      </div>
    </main>
  );
}
