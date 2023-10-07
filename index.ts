const express = require('express');
const dotenv = require('dotenv');
import { Request, Response, Express } from 'express';

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send("Let's get muuving!")
})

app.listen(port, () => {
  console.log(process.env.TEST);  
  console.log(`Example app listening on port ${port}`)
})