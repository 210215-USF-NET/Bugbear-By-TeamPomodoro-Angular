import { user } from "./user";
export interface campaign{
    campaignID:number,
    campaignName:string,
    description:string,
    gameMasterID:number,
    campaignUsers:user[]
}