import { FC } from "react";
import { SingleCompanyProps } from "./types";
// For the single company
const SingleCompany: FC<SingleCompanyProps> = (props) => {
  // Inits
  const { singleCompany } = props;
  // JSX
  return (
    <div className="flex items-center gap-3">
      {singleCompany.img}
      <p className="font-semibold text-xl xl:text-2xl">{singleCompany.title}</p>
    </div>
  );
};

export default SingleCompany;
