import express from 'express';
import { routes } from './routes';

const app = express();
const APP_PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);

// Model - Estrutura de Dados
// Repositories - Comunicação com o banco
// Service - Regra de negócios

app.listen(APP_PORT, ()=>{
    console.log(`Server is running on port ${APP_PORT}`);
})