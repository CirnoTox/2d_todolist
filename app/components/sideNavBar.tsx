
import { FaHome } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { FaClockRotateLeft } from "react-icons/fa6";


export default function SideNavBar() {
  let iconSize = 24;
  let homeIcon = <FaHome size={iconSize} />;
  let clockIcon = <CgSandClock size={iconSize} />;
  let faClockIcon = <FaClockRotateLeft size={iconSize} />;
  return (
    <aside className="h-dvh w-10 block fixed bg-blue-300 p-0 m-0 ">
      {iconWrap(homeIcon)}
      {iconWrap(clockIcon)}
      {iconWrap(faClockIcon)}
    </aside>
  );
};

function iconWrap(icon: JSX.Element) {
  let aClassName = "block p-2 text-center hover:bg-blue-100";
  return (
    <a className={aClassName} href="#">
      {icon}
    </a>
  );
}