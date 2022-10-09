import { Representative } from "./representative"

export type CompanyRepresentative = {
    shortName: string
    name: string
    location: string
    logos: string[]
    representative: Representative
}