import { SingleCompany } from "@/components/Global";
import { companyList } from "@/utils/data";

// Company listing section
const CompanyListing = () => {
  // JSX
  return (
    <div className="py-16 md:py-24">
      <p className="text-gray500 font-medium text-center mb-8">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap  items-center gap-3 justify-center md:justify-between">
        {companyList.map((singleCompany, index) => {
          return <SingleCompany singleCompany={singleCompany} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CompanyListing;
