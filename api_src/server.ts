import express from 'express';
import { getAllGames } from './fileInterface';

// const run = async () => {
//     const gamesList = await getAllGames();
//     console.log(gamesList);
// }

// run();
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get("/api", async (req, res) => {
    res.json("Hello World");
    const gamesList = await getAllGames()
    console.log(gamesList);
});

app.post("/api", (req, res) => {
    const data = req.body;
    res.status(204).json(data);
});


app.listen(3000, () => console.log('Server is running on: http://localhost:3000'));
