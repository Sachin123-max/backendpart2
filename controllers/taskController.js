import {
  filterTasks,
  getAllTasks,
  getDashboardStats,
  getTasksBySource,
} from "../services/taskService.js";

export const getCrmTasks = (req, res) => {
  res.status(200).json({
    success: true,
    source: "CRM",
    count: getTasksBySource("CRM").length,
    data: getTasksBySource("CRM"),
  });
};

export const getHelpdeskTasks = (req, res) => {
  res.status(200).json({
    success: true,
    source: "Helpdesk",
    count: getTasksBySource("Helpdesk").length,
    data: getTasksBySource("Helpdesk"),
  });
};

export const getTasks = (req, res) => {
  const allTasks = getAllTasks();
  const filteredTasks = filterTasks(allTasks, req.query);

  res.status(200).json({
    success: true,
    count: filteredTasks.length,
    total: allTasks.length,
    data: filteredTasks,
  });
};

export const getDashboard = (req, res) => {
  const allTasks = getAllTasks();
  const filteredTasks = filterTasks(allTasks, req.query);

  res.status(200).json({
    success: true,
    stats: getDashboardStats(filteredTasks),
    data: filteredTasks,
  });
};

export const getEmployees = (req, res) => {
  const tasks = getAllTasks();

  const employees = [
    ...new Map(
      tasks.map((task) => [
        task.employeeId,
        {
          id: task.employeeId,
          name: task.employee,
        },
      ])
    ).values(),
  ];

  res.status(200).json({
    success: true,
    count: employees.length,
    data: employees,
  });
};