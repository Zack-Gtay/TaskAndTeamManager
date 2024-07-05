import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { useState } from "react";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import TasksCompleted from "./pages/TasksCompleted";
import TasksInProgress from "./pages/TasksInProgress";
import TasksTodos from "./pages/TasksTodos";
import Overview from "./pages/Dashboard";

const Layout = () => {
  const user = true;
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return user ? (
    <div className="w-full h-screen flex flex-row md:flex-row">
      <div
        className={` ${
          isSidebarOpen ? "block left-0 top-0" : "hidden"
        } md:block`}
      >
        <SideBar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      </div>
      <div className="w-full md:w-4/5 lg:w-4/5 overflow-x-auto fixed right-0 top-0">
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

function App() {
  return (
    <div className="w-full h-full bg-[#f3f4f6]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/completed" element={<TasksCompleted />} />
            <Route path="/in-progress" element={<TasksInProgress />} />
            <Route path="/todos" element={<TasksTodos />} />
            <Route path="/team" element={<Users />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Route>
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Toaster richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
