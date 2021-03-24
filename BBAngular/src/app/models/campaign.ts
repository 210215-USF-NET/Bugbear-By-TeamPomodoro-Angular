import { user } from "./user";
export interface campaign{
    CampaignID:number,
    CampaignName:string,
    Description:string,
    GameMasterID:number,
    CampaignUsers:user
}