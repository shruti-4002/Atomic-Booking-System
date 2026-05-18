import express from "express"
import { createSeatCategory } from "../controllers/seatCategory.controller.js"
import {isAdmin} from "../middlewares/auth.middleware.js"

const seatCategoryrouter = express.Router()

seatCategoryrouter.post("/",isAdmin, createSeatCategory)

export default seatCategoryrouter