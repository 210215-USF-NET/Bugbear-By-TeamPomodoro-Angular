import { character } from "./character";
import { encounter } from "./encounter";
import { user } from "./user";
import { location } from "./location";
import { story } from "./story";
import { NPC } from "./NPC";
import { map } from "./map";

export interface campaign{
    campaignID: number,
    campaignName: string,
    description: string,
    gameMasterID: number,
    campaignCharacters: character[],
    campaignEncounters: encounter[],
    campaignLocations: location[],
    campaignMaps: map[],
    campaignNPCs: NPC[],
    campaignStories: story[]
}