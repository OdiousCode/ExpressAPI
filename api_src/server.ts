import express from 'express';
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json("Hello World")
});

app.post("/api", (req, res) => {
    const data = req.body;
    res.status(204).json(data);
});


app.listen(3000, () => console.log('Server is running on: http://localhost:3000'));
