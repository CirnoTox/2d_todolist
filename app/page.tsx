'use client';
import SideNavBar from "./components/sideNavBar";
import TaskTable from "./components/taskTable";
import Axis from "./components/axis";
import { useEffect, useState } from "react";
import DynamicHeightDivs from "./components/DynamicHeightDivs";
import mockData from "./lib/mockData";

export default function app() {
  const [hTaskTable, setHTaskTable] = useState(300); // Default height
  const [hAxis, setHAxis] = useState(400); // Default height
  useEffect(() => {
    let alculatedHTaskTable = Math.floor(0.4 * window.innerHeight);
    setHTaskTable(alculatedHTaskTable);
    setHAxis(window.innerHeight - alculatedHTaskTable - 4);
  }, []);
  return (
    <main className=" h-dvh">
      <SideNavBar />
      <DynamicHeightDivs
        topDiv={<TaskTable tasks={mockData} hTaskTable={hTaskTable} />}
        bottomDiv={<Axis hAxis={hAxis} />}
      />
    </main>
  );
}