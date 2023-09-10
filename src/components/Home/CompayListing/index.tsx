import { SingleCompany } from "@/components/Global";

// Company listing section
const CompanyListing = () => {
  // Inits
  const companyList = [
    {
      img: "/assets/images/layers.png",
      title: "Layers",
    },
    {
      img: "/assets/images/sisyphus.png",
      title: "Sisyphus",
    },
    {
      img: "/assets/images/circooles.png",
      title: "Circooles",
    },
    {
      img: "/assets/images/catalog.png",
      title: "catalog",
    },
    {
      img: "/assets/images/quotuebt.png",
      title: "Quotuebt",
    },
    {
      img: "/assets/images/hourglass.png",
      title: "Hourglass",
    },
  ];
  // JSX
  return (
    <div className="py-24">
      <p className="text-gray500 font-medium text-center">
        Join 4,000+ companies already growing
      </p>
      <div>
        {companyList.map((singleCompany) => {
          return <SingleCompany />;
        })}
      </div>
    </div>
  );
};

export default CompanyListing;
