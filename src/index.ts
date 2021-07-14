import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from 'express';


const PORT = 3333;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(PORT, () =>{
    console.log(`Api started at PORT ${PORT}`)
});



