import express from "express"
import { createBooking } from "../controllers/Transaction.controller.js"
import { rateLimiterMiddleware } from '../middlewares/rateLimiter.middleware.js';

const Transactionrouter = express.Router()

Transactionrouter.post("/createBooking",rateLimiterMiddleware,createBooking )

export default Transactionrouter