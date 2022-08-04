import express from "express";
import dotenv from "dotenv";

//load config
dotenv.config({ path: './config/config.env' });


//run server
const main = express();
const PORT = process.env.PORT;
main.listen(PORT, console.log(`Application running at port ${PORT} (localhost)`));

main.get('/', (req, resp) => {
    resp.send ('Hi bitches!');
});

main.get('/user', (req, resp) => {
    resp.send ('U bitch U!!');
});