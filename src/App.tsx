import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Chrome";
import Home from "./pages/Home";
import TemplatesPage from "./pages/TemplatesPage";
import DemoPage from "./pages/DemoPage";
import Orcamento from "./pages/Orcamento";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/modelos" element={<TemplatesPage />} />
          <Route path="/modelo/:id" element={<DemoPage />} />
          <Route path="/orcamento" element={<Orcamento />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}