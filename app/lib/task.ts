import { v4 as uuidv4 } from 'uuid';

enum TaskStatus {
  Pending,
  In_Progress,
  Completed
}

class Task {
  id: string;
  title: string;
  description: string;
  role: string;
  priority: number;
  dueDate: Date;
  importancy: number;
  status: TaskStatus;

  constructor(
    title: string = "",
    description: string = "",
    dueDate: Date = new Date(),
    importancy: number = 0,
    role: string = "",
    status: TaskStatus = TaskStatus.Pending
  ) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.priority = this.calculatePriority(dueDate, importancy);
    this.dueDate = dueDate;
    this.importancy = importancy;
    this.role = role;
    this.status = status;
  }

  // JSON.stringify calls this method
  toJSON(): string {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      description: this.description,
      role: this.role,
      priority: this.priority,
      dueDate: this.dueDate.toISOString(),
      importancy: this.importancy,
      status: this.status,
    });
  }
  static fromJSON(json: string):Task{
    return Task.parse(json)
  }

  // Parse JSON string to Task instance
  static parse(text: string): Task {
    const data = JSON.parse(text);
    const task = new Task(
      data.title,
      data.description,
      new Date(data.dueDate),
      data.importancy,
      data.role,
      data.status
    );
    task.id = data.id;
    task.priority = data.priority;
    return task;
  }

  static getOwnPropertyNames(): string[] {
    const tempTask=new this()
    return Object.getOwnPropertyNames(tempTask)
  }
  getFilteredTask(visibleColumns:string[]):any{
    const filteredTask: any = {};
    visibleColumns.forEach(column => {
      if (column in this) {
        filteredTask[column] = (this as any)[column];
      }
    });
    return filteredTask;
  }
  calculatePriority(dueDate: Date, importancy: number): number {
    const now = new Date();
    const timeDiff = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24); // days until due
    return Math.round(1 / timeDiff * 1000 + importancy); // Simplified priority calculation
  }

  // Getters
  get Id() {
    return this.id;
  }
  get Title() {
    return this.title;
  }
  get Description() {
    return this.description;
  }
  get DueDate() {
    return this.dueDate;
  }
  get Importancy() {
    return this.importancy;
  }
  get Priority() {
    return this.priority;
  }
  get Role() {
    return this.role;
  }
  get Status() {
    return this.status;
  }

  // Setters
  set Title(title: string) {
    this.title = title;
  }
  set Description(description: string) {
    this.description = description;
  }
  set DueDate(dueDate: Date) {
    this.dueDate = dueDate;
  }
  set Importancy(importancy: number) {
    this.importancy = importancy;
  }
  set Role(role: string) {
    this.role = role;
  }
  set Status(status: TaskStatus) {
    this.status = status;
  }
}

// Export the Task class and Status enum
export { Task, TaskStatus};
