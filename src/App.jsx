import {
  HashRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import { CourseProvider } from "./context/CourseContext";
import { COURSE_REGISTRY } from "./courses/index";
import CoursePicker from "./pages/CoursePicker";
import CourseApp from "./pages/CourseApp";

function CourseLoader() {
  const { courseId } = useParams();
  const courseData = COURSE_REGISTRY[courseId];
  if (!courseData) return <Navigate to="/" replace />;
  return (
    <CourseProvider courseData={courseData}>
      <CourseApp />
    </CourseProvider>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CoursePicker />} />
        <Route path="/course/:courseId" element={<CourseLoader />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

// TODO:
// - fix algebra data (verify remaining unverified exams against PDFs)
// - add a dark mode
// - add readme with instructions on how to use the app and how to add new courses
// - move disclaimer to "2010–2026 · v2.0" line
