'use client';
import { useState } from "react";

// Show/Hide column
function ShowHideCheckBoxList(){
  
}

// Show/Hide/Sort/Move column 
function MenuDropDown(menuState:boolean) {
  return (
    <div>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  );
}

function MenuButton(menuState:boolean) {
  return (
    <button onClick={()=>{}}>
      Dropdown
    </button>
  );
}

export default function Menu() {
  console.log("Menu");
  const [menuState, setMenuState] = useState(false);

  return (
    <div>
      <MenuButton />
      <MenuDropDown />
    </div>);
}