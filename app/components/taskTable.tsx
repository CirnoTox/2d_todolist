'use client';
import React from 'react';
import TaskList from '@/app/lib/taskList';
import { TaskStatus } from '@/app/lib/task';
import { MdOutlineSort } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

export default function TaskTable({ tl, setTL }:
  { tl: TaskList, setTL: React.Dispatch<React.SetStateAction<TaskList | undefined>>; }) {

  const createNewTaskManager = (updateFn: (tl: TaskList) => void) => {
    const newTM = new TaskList([...tl.tasks], [...tl.priorityVisibility]);
    updateFn(newTM);
    setTL(newTM);
  };

  const sortTasksByDueDate = () => {
    createNewTaskManager((tl: TaskList) => tl.sortByDueDate());
  };

  const sortTasksByPriority = () => {
    createNewTaskManager((tl: TaskList) => tl.sortByPriority());
  };

  const toggleColumnVisibility = (columnName: string) => {
    createNewTaskManager((tl: TaskList) => tl.toggleColumnVisibility(columnName));
  };

  const ColumnVisibilityCheckboxes = () => (
    tl.priorityVisibility.map((column) => (
      <label key={column.name}>
        <input type="checkbox" checked={column.visible}
          onChange={() => toggleColumnVisibility(column.name)} />
        {column.name}
      </label>
    ))
  );


  const TableHeader = () => {
    const renderedData = tl.getRenderData();
    console.log(renderedData.priorityVisibility);
    return (
      <thead style={{ backgroundColor: 'lightblue' }}>
        <tr>
          <th>
            <IoMenu />
            <ColumnVisibilityCheckboxes />
          </th>
          {renderedData.priorityVisibility.map((column) => (
            column.Visible?
            <th key={column.name} style={{ borderBottom: '1px solid #ddd' }}>
              {column.name}
              {column.name === 'dueDate' && <button onClick={sortTasksByDueDate}><MdOutlineSort /></button>}
              {column.name === 'priority' && <button onClick={sortTasksByPriority}><MdOutlineSort /></button>}
            </th>
            :
            <th key={column.name} style={{ borderBottom: '1px solid #ddd' }}>
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const TableBody = () => {
    const renderedData = tl.getRenderData();

    return (
      <tbody>
        {renderedData.tasks.filter(task => task.status !== TaskStatus.Completed)
          .map((task) => {
            let taskData = JSON.parse(task);
            return (
              <tr key={"tr" + taskData.id}>
                <td key={"head" + taskData.id}>
                  <div> HEAD </div>
                </td>
                {renderedData.priorityVisibility.map((column) => (
                  <td key={column.name + taskData.id} style={{ borderBottom: '1px solid #ddd' }}>
                    {column.visible ? (taskData as any)[column.name] : ''}
                  </td>
                ))}
              </tr>
            );

          }
          )
        }
      </tbody>
    );
  };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableHeader />
      <TableBody />
    </table>
  );
}
