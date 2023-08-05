import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Page404 from "./Page404";
import Dashboard from "./Dashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import LoginAndSignUp from "./LogInAndSignUp"
import ManageHabits from "./ManageHabits"
import Affirmations from "./Affirmations"


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/LogInAndSignUp" element={<LoginAndSignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ManageHabits" element={<ManageHabits />} />
      <Route path="/Affirmations" element={<Affirmations />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
