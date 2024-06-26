import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import Trash from "./pages/Trash";
import TaskDetails from "./pages/TaskDetails";
import Login from "./pages/Login";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const Layout = () => {
  const user = "";
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row ">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block ">
        {/* <Sidebar/> */}
      </div>
      {/* <MobileSideBar/> */}

      <div className="flex-1 overflow-y-auto">
        {/* <Navbar/> */}
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
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/completed/:status" element={<Tasks />} />
            <Route path="/in-progress/:status" element={<Tasks />} />
            <Route path="/todos/:status" element={<Tasks />} />
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
