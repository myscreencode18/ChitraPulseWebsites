import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import useSmoothScroll from "./hooks/useSmoothScroll";
import ProjectProposalForm from "./sections/ProjectProposalForm";


export default function App() {
  useSmoothScroll();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/proposal" element={<ProjectProposalForm/>} />
      </Routes>
    </BrowserRouter>
  );
}
