'use client';
import Task from "./task";

const mockData = [new Task(
  "Finish TypeScript project",
  "Complete the initial setup of the TypeScript project for the new client.",
  new Date(2024, 4, 20), // May 20, 2024
  50,
  "Work",
  "In Progress"
), new Task(
  "Buy birthday gift",
  "Purchase a birthday gift for my best friend.",
  new Date(2024, 4, 15), // May 15, 2024
  30,
  "Friend",
  "Pending"
), new Task(
  "Family dinner planning",
  "Organize the menu and guest list for the upcoming family reunion dinner.",
  new Date(2024, 5, 5), // June 5, 2024
  -20,
  "Family",
  "Completed"
)];

const task4 = new Task(
  "Refactor backend code",
  "Improve the structure of the existing backend codebase to enhance maintainability.",
  new Date(2024, 4, 25), // May 25, 2024
  60,
  "Developer",
  "In Progress"
);

const task5 = new Task(
  "Update project documentation",
  "Update the project documentation to reflect the latest changes in the code and API endpoints.",
  new Date(2024, 4, 30), // May 30, 2024
  40,
  "Developer",
  "Pending"
);

const task6 = new Task(
  "Plan team building event",
  "Organize a team building event to improve collaboration among team members.",
  new Date(2024, 5, 20), // June 20, 2024
  -10,
  "Work",
  "Pending"
);

const task7 = new Task(
  "Prepare for product launch",
  "Coordinate all departments to ensure a smooth launch of the new product next month.",
  new Date(2024, 5, 10), // June 10, 2024
  80,
  "Work",
  "In Progress"
);

const task8 = new Task(
  "Security audit",
  "Conduct a comprehensive security audit of the entire IT infrastructure.",
  new Date(2024, 5, 15), // June 15, 2024
  70,
  "Developer",
  "Pending"
);

const task9 = new Task(
  "Review pull requests",
  "Review and merge pending pull requests from the development team.",
  new Date(2024, 4, 17), // May 17, 2024
  30,
  "Developer",
  "In Progress"
);

const task10 = new Task(
  "Quarterly budget review",
  "Review and adjust the budget allocations for the next quarter.",
  new Date(2024, 5, 25), // June 25, 2024
  -30,
  "Work",
  "Pending"
);

const task11 = new Task(
  "Learn new web development framework",
  "Start learning about the new web development framework that has been gaining popularity.",
  new Date(2024, 6, 1), // July 1, 2024
  20,
  "Developer",
  "Pending"
);

const task12 = new Task(
  "Data migration",
  "Migrate all user data to the new database system without any data loss.",
  new Date(2024, 5, 7), // June 7, 2024
  90,
  "Developer",
  "In Progress"
);

const task13 = new Task(
  "Client meeting for project updates",
  "Meet with the client to discuss the current progress and next steps for the project.",
  new Date(2024, 4, 15), // May 15, 2024
  50,
  "Work",
  "Completed"
);

mockData.push(task4, task5, task6, task7, task8, task9, task10, task11, task12, task13);

export default mockData;