import {readFile, writeFile} from 'fs/promises'

interface Game {
    name: string;
    price: number;
    genre: string;
    id: number;
}

export const getAllGames = async(): Promise<Game[]> => {
    const buffer = await readFile('./gamelist.json', {
        encoding: 'utf-8'
    })

    return JSON.parse(buffer)
}