import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/Notfound";
import Home from "./pages/Home";


export default function AppRouter() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
