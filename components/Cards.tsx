import { CompanyRepresentative } from "../interfaces/companyRepresentative";
import Card from "./Card";

type Props = {
  locale: string;
  companyRepresentatives: CompanyRepresentative[];
};

const Cards = ({ locale, companyRepresentatives }: Props) => {
  return (
    <main id="cards">
      {companyRepresentatives
        .map((companyRepresentative) => (
          <Card
            key={companyRepresentative.shortName}
            locale={locale}
            companyRepresentative={companyRepresentative}
          />
        ))}
    </main>
  );
};

export default Cards;
