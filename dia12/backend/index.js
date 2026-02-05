const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get('api/mensaje', (req, res) => {
    res.json({mensaje: "Buenas tardes, soy un mensaje desde Express!"});
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

// npm run dev en terminal -> se levanta vite