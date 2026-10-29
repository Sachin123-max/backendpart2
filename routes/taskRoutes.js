import express from "express";

import {
  getCrmTasks,
  getHelpdeskTasks,
  getTasks,
  getDashboard,
  getEmployees,
} from "../controllers/taskController.js";

const router = express.Router();

// Mock source APIs
router.get("/crm/tasks", getCrmTasks);
router.get("/helpdesk/tasks", getHelpdeskTasks);

// Combined dashboard APIs
router.get("/tasks", getTasks);
router.get("/dashboard", getDashboard);
router.get("/employees", getEmployees);

export default router;