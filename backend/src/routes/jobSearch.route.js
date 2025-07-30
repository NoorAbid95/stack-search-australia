import { jobSearch } from "../controllers/jobSearch.controller.js";
import express from 'express'

const router = express.Router()

router.get("/", jobSearch)

export default router