import { Representative } from "../interfaces/representative";
import RepEmail from "./RepEmail";

type Props = {
  locale: string;
  representative: Representative;
};

const CardRepSection = ({ locale, representative }: Props) => {
  const repLabelText = locale === "sr" ? "Predstavnik" : "Representative";
  const noRepLabelText =
    locale === "sr" ? "Nema predstavnika" : "No representative";
  if (representative != null) {
    return (
      <div className="rep">
        <h3>{repLabelText}</h3>
        <a href={representative.url}>
          <p>{representative.name}</p>
        </a>
        <p className="rep-hq">{representative.address}</p>
        <RepEmail email={representative.email} />
      </div>
    );
  } else {
    return (
      <div className="no-rep">
        <h3>{repLabelText}</h3>
        <div className="no-rep-img"></div>
        <p>{noRepLabelText}</p>
      </div>
    );
  }
};

export default CardRepSection;
