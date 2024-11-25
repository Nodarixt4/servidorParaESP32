import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/temperatura', (req, res) => {
    const temperatura = req.query.temperatura || "erro";
    res.send(`${temperatura}°C`);
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Rodando na porta ${port}`);
});
