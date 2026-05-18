import express from "express"
import {login,logout,register} from "../controllers/auth.controller.js"
import { authmiddleware } from "../middlewares/auth.middleware.js";


const authrouter = express.Router()

authrouter.post("/register",register )
authrouter.post("/login",login )
authrouter.post("/logout",authmiddleware, logout)

export default authrouter