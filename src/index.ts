import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

// Defina explicitamente o tipo de `valorArmazenado`
let valorArmazenado: number | null = null; // Pode armazenar um número ou `null`

// Endpoint para armazenar o valor enviado pelo ESP32
app.post('/armazenar', (req, res) => {
    const { valor } = req.body;

    if (typeof valor === 'number') {
        valorArmazenado = valor;
        console.log(`Valor armazenado: ${valorArmazenado}`);
        res.status(200).send('Valor armazenado com sucesso');
    } else {
        res.status(400).send('Formato de valor inválido');
    }
});

// Endpoint para obter o valor armazenado
app.get('/temperatura', (req, res) => {
    if (valorArmazenado !== null) {
        res.status(200).send(valorArmazenado.toString());
    } else {
        res.status(404).send('Nenhum valor armazenado');
    }
});

// Inicializa o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
