import express from "express";

import {
  getProjects,
  getAllProjects,
  createProject,
  deleteProject,
  updateProject,
  toggleFeaturedProject,
} from "../controllers/projectController.js";

import protect from "../middleware/authMiddleware.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// PUBLIC PROJECTS
router.get("/", getProjects);

// ADMIN ALL PROJECTS
router.get(
  "/admin/all",
  protect,
  getAllProjects
);

// CREATE PROJECT
router.post(
  "/",
  protect,
  upload.single("image"),
  createProject
);

// DELETE PROJECT
router.delete(
  "/:id",
  protect,
  deleteProject
);

// UPDATE PROJECT
router.put(
  "/:id",
  protect,
  updateProject
);

// TOGGLE FEATURED
router.put(
  "/featured/:id",
  protect,
  toggleFeaturedProject
);

export default router;