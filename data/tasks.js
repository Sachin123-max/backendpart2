
const today = new Date();

const getDate = (daysFromToday) => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysFromToday);
  return date.toISOString();
};

export const crmTasks = [
  {
    id: "CRM-101",
    title: "Follow up with new customer",
    description:
      "Contact the customer regarding the sales proposal.",
    employee: "Sachin Kumar",
    employeeId: "EMP-101",
    status: "Pending",
    deadline: getDate(0),
    createdAt: getDate(-2),
    source: "CRM",
    sourceUrl: "http://localhost:5173/crm/leads/CRM-101",
  },
  {
    id: "CRM-102",
    title: "Update customer records",
    description:
      "Verify and update customer contact details.",
    employee: "Rahul Sharma",
    employeeId: "EMP-102",
    status: "In Progress",
    deadline: getDate(2),
    createdAt: getDate(-1),
    source: "CRM",
    sourceUrl: "http://localhost:5173/crm/customers/CRM-102",
  },
  {
    id: "CRM-103",
    title: "Prepare monthly sales report",
    description:
      "Prepare the sales summary for the manager.",
    employee: "Sachin Kumar",
    employeeId: "EMP-101",
    status: "Completed",
    deadline: getDate(-1),
    createdAt: getDate(-5),
    source: "CRM",
    sourceUrl: "http://localhost:5173/crm/reports/CRM-103",
  },
  {
    id: "CRM-104",
    title: "Resolve customer onboarding issue",
    description:
      "Check the onboarding process and update the customer.",
    employee: "Priya Singh",
    employeeId: "EMP-103",
    status: "Pending",
    deadline: getDate(-2),
    createdAt: getDate(-4),
    source: "CRM",
    sourceUrl: "http://localhost:5173/crm/leads/CRM-104",
  },
];

export const helpdeskTasks = [
  {
    id: "HD-201",
    title: "Fix login issue",
    description:
      "Investigate an employee login problem.",
    employee: "Sachin Kumar",
    employeeId: "EMP-101",
    status: "In Progress",
    deadline: getDate(0),
    createdAt: getDate(-1),
    source: "Helpdesk",
    sourceUrl: "http://localhost:5173/helpdesk/tickets/HD-201",
  },
  {
    id: "HD-202",
    title: "Resolve payment error",
    description:
      "Investigate the payment failure reported by a user.",
    employee: "Rahul Sharma",
    employeeId: "EMP-102",
    status: "Pending",
    deadline: getDate(-3),
    createdAt: getDate(-5),
    source: "Helpdesk",
    sourceUrl: "http://localhost:5173/helpdesk/tickets/HD-202",
  },
  {
    id: "HD-203",
    title: "Update support documentation",
    description:
      "Update the internal troubleshooting guide.",
    employee: "Priya Singh",
    employeeId: "EMP-103",
    status: "Completed",
    deadline: getDate(1),
    createdAt: getDate(-2),
    source: "Helpdesk",
    sourceUrl: "http://localhost:5173/helpdesk/tickets/HD-203",
  },
  {
    id: "HD-204",
    title: "Check server response time",
    description:
      "Investigate slow responses from the support API.",
    employee: "Sachin Kumar",
    employeeId: "EMP-101",
    status: "Pending",
    deadline: getDate(1),
    createdAt: getDate(0),
    source: "Helpdesk",
    sourceUrl: "http://localhost:5173/helpdesk/tickets/HD-204",
  },
];
