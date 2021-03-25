import { item } from "./item";
export interface character{
    characterID: number,
    characterName: string,
    money: number,
    userID: number,
    hp: number,
    xpLevel: number,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number,
    itemList: item[]
}