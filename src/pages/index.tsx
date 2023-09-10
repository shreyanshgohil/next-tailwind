import { Banner, CompanyListing, Features, CTA } from "@/components/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Home page
export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <section className="banner">
        <Banner />
      </section>
      <div className=" px-4 lg:px-10  xl:px-[112px] ">
        <section className="company-list border-b-2 border-solid border-gray200">
          <CompanyListing />
        </section>
        <section>
          <Features />
        </section>
        <section className="pb-16 lg:pb-24">
          <CTA />
        </section>
      </div>
    </main>
  );
}
