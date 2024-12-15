import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const AppLayout = () => {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar />
      <div className="p-8 flex-1">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
