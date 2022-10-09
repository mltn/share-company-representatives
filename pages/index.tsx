import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Cards from "../components/Cards";
import { CompanyRepresentative } from "../interfaces/companyRepresentative";
import { getCompanyRepresentatives } from "./api/representatives";

type Props = {
  locale: string;
  companyRepresentatives: CompanyRepresentative[];
};

const IndexPage = ({ locale, companyRepresentatives }: Props) => {
  const title = locale === "sr" ? "Predstavnici" : "Representatives";
  return (
    <Layout title={title}>
      <Intro locale={locale} />
      <Cards locale={locale} companyRepresentatives={companyRepresentatives} />
    </Layout>
  );
};

export default IndexPage;

export async function getStaticProps({ locale }) {
  const companyRepresentatives = getCompanyRepresentatives(locale);
  return {
    props: {
      locale,
      companyRepresentatives,
    },
  };
}
