import * as dotenv from "dotenv";
import express, {Application, Request, Response, NextFunction} from 'express';
import morgan from "morgan";
import cors from 'cors';
// import { timingSafeEqual } from "crypto";

// dotenv.config();
import routes from './routes';

export class App {
  private expressApp: Application;

  public constructor(private port?: number | string) {
    this.expressApp = express();
    this.settings();
  }

  private settings() {
    this.expressApp.set("port", this.port || process.env.PORT || 3000);
    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(cors());
    this.expressApp.use(morgan('dev')); 
  }

  private database(): void {}

  private routes(): void {
    this.expressApp.use(routes);
  }

  /**
   * startServer
   */
  async startServer(): Promise<void> {
    await this.expressApp.listen(this.expressApp.get("port"));
    console.log("Server on port ", this.expressApp.get("port"));
  }
}