import { Representative } from "../../interfaces/representative"
import { CompanyRepresentative } from "../../interfaces/companyRepresentative"
import entities from "../../public/representatives/reps.json"

export const getCompanyRepresentatives = (locale: string): CompanyRepresentative[] => {
  const companyRepresentatives = entities.map(entity => {
    let representative: Representative = entity[`data-${locale}`].representative;
    let company: CompanyRepresentative = {
      shortName: entity.name,
      logos: entity.logos,
      name: entity[`data-${locale}`].company,
      location: entity[`data-${locale}`].location,
      representative: representative
    }
    return company;
  });

  return sortCompanyRepresentatives(companyRepresentatives);
}

const sortCompanyRepresentatives = (list: CompanyRepresentative[]): CompanyRepresentative[] => {
  return list.sort((a, b) => {
    if (a.representative != null && b.representative == null) return -1;
    if (a.representative == null && b.representative != null) return 1;
    if (a.shortName < b.shortName) return -1;
    if (a.shortName > b.shortName) return 1;
    if (a.shortName == b.shortName) return 0;
  });
};

