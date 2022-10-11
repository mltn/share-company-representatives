type Props = {
  locale: string;
};

const repLabelText = {
  sr: "Predstavnik",
  en: "Representative",
};
const noRepLabelText = {
  sr: "Nema predstavnika",
  en: "No representative",
};

const CardRepUnavailable = ({ locale }: Props) => (
  <div className="no-rep box-content">
    <h3>{repLabelText[locale]}</h3>
    <div className="no-rep-img"></div>
    <p>{noRepLabelText[locale]}</p>
  </div>
);

export default CardRepUnavailable;
