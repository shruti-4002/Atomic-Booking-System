import express from "express"
import { createEvent } from "../controllers/events.controller.js"
import { getAllEvents,getEventAndSeatsCategory,searchEvents } from "../controllers/events.controller.js"
import {authmiddleware,isAdmin} from "../middlewares/auth.middleware.js"

const eventrouter=express.Router();



eventrouter.post("/create",authmiddleware,isAdmin,createEvent)
eventrouter.get("/getAllEvents",getAllEvents)
eventrouter.get("/getEventAndSeatsCategory",getEventAndSeatsCategory)
eventrouter.get("/search",searchEvents)
export default eventrouter;