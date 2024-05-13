'use client';
import React from 'react';
import Task from '@/app/lib/task';

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
];

export default function TaskTable({ tasks,hTaskTable }: { tasks: Task[],hTaskTable:number }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ backgroundColor: 'lightblue' }}>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Importancy</th>
          <th>Priority</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task:Task) => (
        <tr key={task.id} style={{ borderBottom: '1px solid #ddd' }}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{formatDate(task.dueDate)}</td>
          <td>{task.importancy}</td>
          <td>{task.priority}</td>
          <td>{task.role}</td>
          <td>{task.status}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
};

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
}