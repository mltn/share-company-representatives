import { CompanyRepresentative } from "../interfaces/companyRepresentative";
import CardCompanySection from "./CardCompanySection";
import CardRepSection from "./CardRepSection";

type Props = {
  locale: string;
  companyRepresentative: CompanyRepresentative;
};

const Card = ({ locale, companyRepresentative }: Props) => {
  return (
    <section>
      <CardCompanySection
        locale={locale}
        companyRepresentative={companyRepresentative}
      />
      <CardRepSection
        locale={locale}
        representative={companyRepresentative.representative}
      />
    </section>
  );
};

export default Card;
