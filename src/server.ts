import express from 'express';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';


const app: express.Application = express();
const dotenvRes: dotenv.DotenvConfigOutput = dotenv.config({ path: '.env' });

// Environment variables
if(dotenvRes.error) console.log(`[ENV FILE ERROR] ${dotenvRes.error}`);

// Database connexions
mongoose.connect(`${process.env.DB_HOST}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {console.log('[DATABASE CONNEXION STATUS] SUCCESS')})
    .catch((e) => {console.log(`[DATABASE CONNEXION STATUS] ${e}`)})
mongoose.set('useCreateIndex', true);

// Middleware
app.use(helmet());
app.use(cors());

if(process.env.NODE_ENV !== 'production') app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', (req, res, next) => {
    res.status(200).end("mescouilles");
    next();
});

app.listen(`${process.env.PORT}`, () => {console.log(`Server listening on port ${process.env.PORT}`)});