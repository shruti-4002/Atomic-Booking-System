import express from "express"
import eventrouter from "./routes/events.routes.js"
import cookieParser from "cookie-parser"
import seatCategoryrouter from "./routes/seatCategory.routes.js"
import Transactionrouter from "./routes/Transaction.routes.js"
import generateSeatsrouter from "./routes/seat.routes.js"
import authrouter from "./routes/auth.routes.js"
import { authmiddleware, isAdmin } from "./middlewares/auth.middleware.js";
import AccountSuspensionrouter from "./routes/AccountSuspension.routes.js"



const app=express();
app.use(cookieParser());
app.use(express.json());



app.use("/api/auth",authrouter);


//ALL Protected Routes 
app.use("/api/events", eventrouter);
app.use("/api/seatCategory", authmiddleware, seatCategoryrouter);
app.use("/api/Transactions", authmiddleware, Transactionrouter);
app.use("/api/generateSeat", authmiddleware, generateSeatsrouter)

//admin route
app.use("/api/Account_Suspension",authmiddleware,isAdmin,AccountSuspensionrouter)

 export {app}

