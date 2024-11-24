import express from "express";
const app = express();
const port = 3000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.get('/nome', (req, res) => {
    const nome = req.query.nome || "visitante";
    res.send(`Opa, bão ${nome}?`);
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Rodando na porta ${port}`);
});
