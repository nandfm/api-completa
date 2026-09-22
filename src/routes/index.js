import { Router } from "express";

const router = Router();

const status = {
    status: "ok",
    api: "API is running",
    timestamp: new Date().toISOString()
}

//GET
router.get("/", (req, res) => {
    res.json(status);
});

//GET/api/status
router.get("/api/status", (req, res) => {
    res.json(status);
});

export default router;