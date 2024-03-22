import CompanyLogo from "@/components/company-logo/company-logo";
import { ReactNode } from "react";

const FormCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"flex w-100 flex-col items-center gap-16"}>
      <div className={"flex w-full justify-center"}>
        <CompanyLogo />
      </div>
      {children}
    </div>
  );
};
export default FormCard;
