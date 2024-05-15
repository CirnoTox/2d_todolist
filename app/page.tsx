'use client';
import SideNavBar from "./components/sideNavBar";
import TaskTable from "./components/taskTable";
import Axis from "./components/axis";
import { useEffect, useState } from "react";
import DynamicHeightDivs from "./components/dynamicHeightDivs";
import mockData from "./lib/mockData";
import TaskList from "./lib/taskList";

export default function app() {
  const [tl, setTL] = useState(undefined as TaskList | undefined);
  useEffect(() => {
    setTL(new TaskList(mockData));
  }, []);
  return (
    <main className=" h-dvh">
      <SideNavBar />
      <DynamicHeightDivs
        topDiv={
          tl === undefined ? <></> : <TaskTable tl={tl} setTL={setTL}/>
        }
        bottomDiv={<Axis/>}
      />
    </main>
  );
}