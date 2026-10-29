import { crmTasks, helpdeskTasks } from "../data/tasks.js";

export const calculatePriority = (task) => {
  if (task.status === "Completed") {
    return "Low";
  }

  const now = Date.now();
  const deadline = new Date(task.deadline).getTime();
  const hoursRemaining = (deadline - now) / (1000 * 60 * 60);

  // Overdue tasks are most urgent.
  if (hoursRemaining < 0) {
    return "Critical";
  }

  // Due within 24 hours.
  if (hoursRemaining <= 24) {
    return "High";
  }

  // Due within 72 hours.
  if (hoursRemaining <= 72) {
    return "Medium";
  }

  return "Low";
};

export const getAllTasks = () => {
  const tasks = [...crmTasks, ...helpdeskTasks].map((task) => ({
    ...task,
    priority: calculatePriority(task),
    overdue:
      task.status !== "Completed" &&
      new Date(task.deadline).getTime() < Date.now(),
  }));

  const priorityOrder = {
    Critical: 0,
    High: 1,
    Medium: 2,
    Low: 3,
  };

  // Highest priority first; earliest deadline breaks ties.
  return tasks.sort((a, b) => {
    const priorityDifference =
      priorityOrder[a.priority] - priorityOrder[b.priority];

    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    return new Date(a.deadline) - new Date(b.deadline);
  });
};

export const getTasksBySource = (source) => {
  return getAllTasks().filter((task) => task.source === source);
};

export const filterTasks = (tasks, query) => {
  const { employee, status, priority, source, search } = query;

  return tasks.filter((task) => {
    const matchesEmployee =
      !employee ||
      task.employeeId === employee ||
      task.employee.toLowerCase() === employee.toLowerCase();

    const matchesStatus =
      !status || task.status.toLowerCase() === status.toLowerCase();

    const matchesPriority =
      !priority || task.priority.toLowerCase() === priority.toLowerCase();

    const matchesSource =
      !source || task.source.toLowerCase() === source.toLowerCase();

    const matchesSearch =
      !search ||
      `${task.title} ${task.description} ${task.id}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return (
      matchesEmployee &&
      matchesStatus &&
      matchesPriority &&
      matchesSource &&
      matchesSearch
    );
  });
};

export const getDashboardStats = (tasks) => ({
  totalTasks: tasks.length,
  pendingTasks: tasks.filter((task) => task.status === "Pending").length,
  inProgressTasks: tasks.filter((task) => task.status === "In Progress").length,
  overdueTasks: tasks.filter((task) => task.overdue).length,
  completedTasks: tasks.filter((task) => task.status === "Completed").length,
});