import { LocationInterface } from "./LocationInterface";

export interface CompanyInterface {
    id: number,
    company: string,
    companySite: string,
    companyLogo: string,
    position: string,
    location: LocationInterface,
    joining: string,
    ending: string,
    summary: string[]
}