import { Representative } from "../interfaces/representative";
import CardRepAvailable from "./CardRepAvailable";
import CardRepUnavailable from "./CardRepUnavailable";

type Props = {
  locale: string;
  representative: Representative;
};

const CardRepSection = ({ locale, representative }: Props) => (
  <>
    {representative != null ? (
      <CardRepAvailable locale={locale} representative={representative} />
    ) : (
      <CardRepUnavailable locale={locale} />
    )}
  </>
);

export default CardRepSection;
