import {readFile, writeFile} from 'fs/promises'

interface Game {
    title: string;
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

export const getById = async(id:number):Promise<Game> => {
    const gamesList = await getAllGames();
    const game = gamesList.find(game => game.id ===id);
    if(game){
        return game
    } else {
        throw new Error('There is no game with id: ${id}')
    }
}

export const add = async(game: Game) => {
    const gamesList = await getAllGames();

    await writeFile('./gamelist.json', JSON.stringify([...gamesList, game]))
}

export const removeById = async(id:number) => {
    const gamesList = await getAllGames();
    const games = gamesList.filter(game => game.id !== id);
    await writeFile('./gamelist.json', JSON.stringify(games))
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