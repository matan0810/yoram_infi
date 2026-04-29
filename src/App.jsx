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
// - Add a 404 page for invalid routes
// - Add question order by moed and number
// - fix test template to be accureate
// - fix algebra data (clause on it)
// - add a way to mark questions as done and show progress (by localStorage?)
// - add a way to reset progress
// - add a way to show only answerded/unanswered questions
// - improve UI to be accurate and clean
// - (maybe add a dark mode?)
// - add readme with instructions on how to use the app and how to add new courses
// - improve readability of code (maybe split into multiple files?) and avoid repetition
// - add search results to be with routes
// - add search results by question text and answer text
// - fix layout of question cards to be more responsive and clean
// - fix of entier app to be more responsive and work well on mobile devices
// - add disclaimer that this app is for personal use only and check potential copyright issues
