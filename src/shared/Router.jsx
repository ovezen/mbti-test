import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProtectedRoute from "../components/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<TestResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
