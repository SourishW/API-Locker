import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div
      style={{
        // padding: "50px 50px 0px 370px",
        padding: "0px 0px 0px 0px",
      }}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
