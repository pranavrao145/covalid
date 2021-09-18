import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/users'
import administratorRoutes from './routes/administrators'
import groupRoutes from './routes/groups'
import managerRoutes from './routes/managers'
import memberRoutes from './routes/members'
import organizationRoutes from './routes/organizations'
import questionnaireRoutes from './routes/questionnaires'
import visitorRoutes from './routes/visitors'

// environment configuration
dotenv.config();

const PORT = process.env.PORT || 5000;

// initializing the express app
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/administrators', administratorRoutes);
app.use('/groups', groupRoutes);
app.use('/managers', managerRoutes);
app.use('/members', memberRoutes);
app.use('/organizations', organizationRoutes);
app.use('/questionnaires', questionnaireRoutes);
app.use('/visitors', visitorRoutes);

app.get('/', async (_req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'This application works.'
    });
});

app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}!`);
});
