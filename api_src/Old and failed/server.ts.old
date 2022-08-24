import express from 'express';
import { getGames, getById, add, removeById, update } from '../games/fileInterface';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get("/api", async (req, res) => {
    res.json("Hello World");
    const gamesList = await getGames()
    console.log(gamesList);
});
app.get("/api/:id", async (req, res) => {
    res.json("Hello ${req}")
    const game = await getById(1);
    console.log(game);
});
app.post("/api", async (req, res) => {
    await add({title: "Solitaire", price: 1, genre: "Cardgame", id: 4})
    res.status(204).json();
});
app.post("/api/:id", async (req, res) => {
    await removeById(4);
    res.status(204).json();
})
app.post("/api/update", async (req,res) => {
    await update({title: "Starcraft is hard", id: 1})
    res.status(204).json();
})
app.listen(3000, () => console.log('Server is running on: http://localhost:3000'));
