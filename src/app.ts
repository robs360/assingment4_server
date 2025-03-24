import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors"
import gobalErrorHandilers from './app/middlewares/globalErrorHandlers';
import router from './app/routes';
const app: Application = express()
app.use(express.json());
dotenv.config()
app.use(cors())
app.use('/api/v1',router)
app.use(gobalErrorHandilers)
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app