import {readFile, writeFile} from 'fs/promises'
import { Game } from './game.model'

export const getGames = async(): Promise<Game[]> => {
    const buffer = await readFile('./api_src/games/gamelist.json', {
        encoding: 'utf-8'
    })

    return JSON.parse(buffer)
}

export const getById = async(id:string):Promise<Game> => {
    const gamesList = await getGames();
    const game = gamesList.find(game => game.id ===id);
    if(game){
        return game
    } else {
        throw new Error('There is no game with id: ${id}')
    }
}

export const add = async(game: Game) => {
    const gamesList = await getGames();

    await writeFile('./api_src/games/gamelist.json', JSON.stringify([...gamesList, game]))
}

export const removeById = async(id:string) => {
    const gamesList = await getGames();
    const games = gamesList.filter(game => game.id !== id);
    await writeFile('./api_src/games/gamelist.json', JSON.stringify(games))
}

export const update = async(game: Partial<Game>) => {
    if(!game.id) {
        throw new Error('You need to pass an ID')
    }
    const gameToUpdate = await getById(game.id);
    const updatedGame = {...gameToUpdate, ...game}
    await removeById(game.id);
    await add(updatedGame);
}