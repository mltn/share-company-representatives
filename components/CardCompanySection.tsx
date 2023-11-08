import { CompanyRepresentative } from "../interfaces/companyRepresentative";

type Props = {
  locale: string;
  companyRepresentative: CompanyRepresentative;
};

export default function CardCompanySection({
  locale,
  companyRepresentative,
}: Props) {
  const companyLabelText = locale === "sr" ? "Kompanija" : "Company";
  const rep = companyRepresentative.representative;
  return (
    <div
      className={
        "box-content service " + (rep != null ? "" : "service-without-rep")
      }
    >
      <div className="logos">
        {companyRepresentative.logos.map((logo) => (
          <img key={logo} src={`/representatives/logos/${logo}`} />
        ))}
      </div>
      <div>
        <span className="service-links">{companyRepresentative.shortName}</span>
      </div>
      <div>
        <h3>{companyLabelText}</h3>
        <p>{companyRepresentative.name}</p>
        <p className="company-hq">{companyRepresentative.location}</p>
      </div>
    </div>
  );
}
