import { Representative } from "../interfaces/representative";
import RepEmail from "./RepEmail";

type Props = {
  locale: string;
  representative: Representative;
};

const repLabelText = {
  sr: "Predstavnik",
  en: "Representative",
};

const CardRepAvailable = ({ locale, representative }: Props) => (
  <div className="rep box-content">
    <h3>{repLabelText[locale]}</h3>
    {representative.url != null ? (
      <a href={representative.url}>
        <p>{representative.name}</p>
      </a>
    ) : (
      <p>{representative.name}</p>
    )}
    {representative.address != null ? (
      <p className="rep-hq">{representative.address}</p>
    ) : (
      ""
    )}
    <RepEmail email={representative.email} />
  </div>
);

export default CardRepAvailable;
