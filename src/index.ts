import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import connectDb from './database/index.js';
import modules from './modules';

const app: Express = express();
connectDb();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

modules(app);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Talk about our agents, branches, ATM spots, they are around the corner' });
});

app.get('*', (req: Request, res: Response) => {
    res.status(404).json({ message: 'Nothing here' });
})

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => console.log(`Stanbic IBTC Locator is live on ${PORT}`));
