import { v4 as uuidv4 } from 'uuid';

class Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  // From -100 ~ 100
  // The smaller it is, the lower importancy. 
  importancy: number;
  // The smaller it is, the higher priority. 
  // Calculate from dueDate and importancy
  priority: number;
  // Like Family, Friend, Work, Developer etc.
  role: string;
  status: Status;
  constructor(title: string, description: string, dueDate: Date, importancy: number, role: string, status: Status) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.importancy = importancy;
    this.role = role;
    this.status = status;
    this.priority = this.calculatePriority(dueDate, importancy);
  }
  // Getter
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
  // Setter
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
  set Priority(priority: number) {
    this.priority = priority;
  }
  set Role(role: string) {
    this.role = role;
  }
  set Status(status: Status) {
    this.status = status;
  }
  toString(): string {
    return `Task: ${this.title}, ${this.description}, ${this.dueDate}, ${this.importancy}, ${this.role}, ${this.status}`;
  }
  toJSON(): string {
    return JSON.stringify(this);
  }

  calculatePriority(dueDate: Date, importancy: number): number {
    const now = new Date();
    const timeDiff = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24); // days until due
    return Math.round(1/timeDiff*1000 + importancy); // Simplified priority calculation
  };
};
type Status = 'Pending' | 'In Progress' | 'Completed';

export default Task;