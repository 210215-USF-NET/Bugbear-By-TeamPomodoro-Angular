import { item } from "./item";
export interface character{
    CharacterID:number,
    CharacterName: string,
    Money: number,
    UserID: number,
    HP:number,
    XPLevel: number,
    Strength: number,
    Dexterity: number,
    Constitution: number,
    Intelligence: number,
    Wisdom: number,
    Charisma:number,
    ItemList: item
}