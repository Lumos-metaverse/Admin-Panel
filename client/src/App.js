import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "pages/layout";
import Lectures from "pages/lectures";
import Courses from "pages/courses";
import Users from "pages/users";
import CourseDetails from "pages/coursedetails";
import Assignments from "pages/assignments";
import AddAssignment from "pages/addAssignment";
import Enrollments from "pages/enrollments";
import Login from "pages/login";
import RequireAuth from "./components/RequireAuth";
import AddCourse from "pages/addCourse";
import AddUser from "pages/addUser";
import MiniLec from "pages/mini/lecture";
import MiniLecDetails from "pages/mini/coursedetails";
import AddMiniAssign from "pages/mini/addAssignment";

function App() {
  const theme = useMemo(() => createTheme(themeSettings("dark")), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<RequireAuth />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/courses" replace />} />
                <Route path="/lectures" element={<Lectures />} />
                <Route path="/lecture" element={<Lectures />} />{" "}
                {/* route for lecture details */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/minilec" element={<MiniLec />} />
                <Route path="/addminiAssign" element={<AddMiniAssign />} />
                <Route path="/courses/add" element={<AddCourse />} />
                <Route path="/enrollments" element={<Enrollments />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/coursedetails" element={<CourseDetails />} />
                <Route path="/minilecdetails" element={<MiniLecDetails />} />
                <Route path="/assignments" element={<Assignments />} />
                <Route path="/assignments/add" element={<AddAssignment />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
