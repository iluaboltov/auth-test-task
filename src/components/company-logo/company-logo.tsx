import Image from "next/image";

import logo from "/public/images/company-logo.svg";
const CompanyLogo = () => {
  return <Image alt={"Qencode"} src={logo} />;
};
export default CompanyLogo;
