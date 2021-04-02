import { location } from "./location";

export interface encounter{
    encounterID: number,
    encounterTitle: string,
    encounterDescription: string,
    locationID: number,
    campaignID: number
}