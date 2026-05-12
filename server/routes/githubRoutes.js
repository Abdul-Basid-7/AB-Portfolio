import express from "express";

import { syncGithubProjects }
from "../controllers/githubController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/sync", protect, syncGithubProjects);

export default router;