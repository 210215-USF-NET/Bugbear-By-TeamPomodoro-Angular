import { item } from "./item";

export interface character {
    characterName: string,
    itemList: Array<item>,
    money: number,
    userID: number,
    hp: number,
    xpLevel: number,
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}