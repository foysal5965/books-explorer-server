import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './router/routes';
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)
app.get('/', async (req: Request, res: Response) => {
    res.send('Working Successfully');
  });

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: '.',
          message: 'API Not Found',
        },
      ],
    });
    next();
  });

  export default app