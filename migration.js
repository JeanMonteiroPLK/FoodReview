import conn from "./config/db.js";
import Restaurant from "./models/Restaurant.js";
import Review from './models/Review.js';
import User from './models/User.js';

const migrate = async () => {
    try{
        const result = await conn.sync();
        console.log(result)
    } catch (error){    
        console.log(error)
    }
}

migrate();