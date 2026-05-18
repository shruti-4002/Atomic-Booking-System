import express from "express"
import { AccountSuspension } from "../controllers/AccountSuspension.controller.js"


const AccountSuspensionrouter = express.Router()

AccountSuspensionrouter.post("/",AccountSuspensionrouter)

export default AccountSuspensionrouter