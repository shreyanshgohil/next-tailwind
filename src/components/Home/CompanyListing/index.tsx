import { SingleCompany } from "@/components/Global";
import {
  LayersSvg,
  SisyphusSvg,
  CircoolesSvg,
  CatalogSvg,
  QuotuebtSvg,
  Logo,
} from "@/utils/svg";

// Company listing section
const CompanyListing = () => {
  // Inits
  const companyList = [
    {
      img: <LayersSvg />,
      title: "Layers",
    },
    {
      img: <SisyphusSvg />,
      title: "Sisyphus",
    },
    {
      img: <CircoolesSvg />,
      title: "Circooles",
    },
    {
      img: <CatalogSvg />,
      title: "catalog",
    },
    {
      img: <QuotuebtSvg />,
      title: "Quotuebt",
    },
    {
      img: <Logo />,
      title: "Hourglass",
    },
  ];
  // JSX
  return (
    <div className="py-24">
      <p className="text-gray500 font-medium text-center mb-8">
        Join 4,000+ companies already growing
      </p>
      <div className="flex items-center justify-between">
        {companyList.map((singleCompany, index) => {
          return <SingleCompany singleCompany={singleCompany} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CompanyListing;
