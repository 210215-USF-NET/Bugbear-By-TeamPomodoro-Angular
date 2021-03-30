import { character } from "./character";

export interface user{
    userID: number
    email: string
    characters: character[]
}