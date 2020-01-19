import * as dotenv from "dotenv";
import express, {Application, Request, Response, NextFunction} from 'express';
// import { timingSafeEqual } from "crypto";


const app: Application = express();

dotenv.config();

class App {
    public express: express.Application;

    public constructor(){
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
    }

    private middlewares(): void {
    }

    private database(): void {
    }

    private routes(): void {}
}

export default new App().express;

// app.get('/', (req: Request, res: Response) => {
//     console.log(add(1,1));
//     // console.log(add(1,'asd'));
//     console.log(sub(2,1));
//     res.send('Hello 3' + ` Test var ${process.env.TEST_VAR}`);
// });

// app.listen(5000, () => console.log('Running'));