import express from "express";

const app = express();
const port = 3000;

let temperaturaAtual = "erro";

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Endpoint para o ESP enviar a temperatura
app.get('/setTemperatura', (req, res) => {
    const temperatura = String(req.query.temperatura || "erro");  // Garantir que seja uma string
    temperaturaAtual = temperatura;  // Armazena a temperatura recebida
    res.send(`Temperatura atualizada para: ${temperaturaAtual}°C`);
});

// Endpoint para o front-end obter a temperatura
app.get('/temperatura', (req, res) => {
    res.send(`${temperaturaAtual}°C`);  // Retorna a temperatura atual
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Rodando na porta ${port}`);
});
