import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

// environment configuration
dotenv.config();
const port = process.env.PORT || 5000;

// initializing the express app
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'This application works.'
    });
});

app.listen(port, (): void => {
    console.log(`Listening on port ${port}`);
});
