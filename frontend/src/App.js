import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Gracias from "./views/Gracias/Gracias";
import NewsDetail from "./views/NewsDetail/NewsDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="/novedades/:slug" element={<NewsDetail />} />
      </Routes>
    </div>
  );
}

export default App;
