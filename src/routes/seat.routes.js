import express from "express"
import {generateSeats } from "../controllers/seat.controller.js"
import {isAdmin} from "../middlewares/auth.middleware.js"

const generateSeatsrouter = express.Router()

generateSeatsrouter.post("/",isAdmin, generateSeats)

export default generateSeatsrouter