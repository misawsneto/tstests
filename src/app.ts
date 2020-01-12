import express, {Application, Request, Response, NextFunction} from 'express';

const app: Application = express();

const add = (a: number, b:number): number => a+b;

function sub(a: number, b:number){
    return a-b;
}

app.get('/', (req: Request, res: Response) => {
    console.log(add(1,1));
    // console.log(add(1,'asd'));
    console.log(sub(2,1));
    res.send('Hello 3');
});

app.listen(5000, () => console.log('Running'));