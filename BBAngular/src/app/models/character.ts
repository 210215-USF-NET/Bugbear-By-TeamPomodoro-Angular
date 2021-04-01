import { campaign } from "./campaign";
import { item } from "./item";
export interface character{
    characterID: number,
    characterName: string,
    money: number,
    hp: number,
    userID: number,
    xpLevel: number,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    items: item[],
    campaignID: number
}