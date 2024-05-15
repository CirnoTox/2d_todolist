import { Task, TaskStatus } from '@/app/lib/task';

// Data structure for the Task Table Component
class TaskList{
  tasks: Task[];
  priorityVisibility: PriorityVisibility[];
  constructor(tasks: Task[],
    priorityVisibility: PriorityVisibility[] = Task.getOwnPropertyNames().map((arg: string) => new PriorityVisibility(arg, true))
  ) {
    this.tasks = tasks;
    this.priorityVisibility = priorityVisibility;
  }
  // Return data that should be rendered in JSON format
  // unvisible priorityVisibility are not rendered
  // if filtered is true, only visible priority in tasks are rendered
  getRenderData(filtered: boolean = false) {
    const visibleColumns = this.priorityVisibility.filter(column => column.visible).map(column => column.name);

    const filteredTasks = filtered
      ? this.tasks.map(task => task.getFilteredTask(visibleColumns))
      : this.tasks;

    return {
      tasks: filteredTasks.map(v => v.toJSON()),
      priorityVisibility: this.priorityVisibility,
    };
  }
  toJSON(): string {
    return JSON.stringify(this);
  }
  static fromJSON(text: string): TaskList {
    return TaskList.parse(text);
  }
  static parse(text: string): TaskList {
    const data = JSON.parse(text);
    return new TaskList(data.tasks.map((task: any) => Task.fromJSON(task)), data.priorityVisibility);
  }
  sortByDueDate() {
    this.tasks.sort((a, b) => {
      return a.dueDate.getTime() - b.dueDate.getTime();
    });
  }
  sortByPriority() {
    this.tasks.sort((a, b) => {
      return b.priority - a.priority;
    });
  }
  // Toggle visibility of a column
  toggleColumnVisibility(columnName: string) {
    const column = this.priorityVisibility.find((column) => column.name === columnName);
    if (column) {
      column.Visible = !column.Visible;
      console.log("after set", column.Visible);
    }
  }
  // Set a task as complete
  setComplete(taskId: string) {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.status = TaskStatus.Completed;
    }
  }
}
class PriorityVisibility {
  name: string;
  visible: boolean;
  constructor(name: string, visible: boolean) {
    this.name = name;
    this.visible = visible;
  }
  // get/set visible
  get Visible() {
    return this.visible;
  }
  set Visible(visible: boolean) {
    this.visible = visible;
  }

}
export default TaskList;