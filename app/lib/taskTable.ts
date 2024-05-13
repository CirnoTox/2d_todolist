import Task from '@/app/lib/task';

// Data structure for the Task Table Component
class TaskTable {
  tasks: Task[];
  constructor(tasks: Task[]) {
    this.tasks = tasks;
    
  }

}
export default TaskTable;