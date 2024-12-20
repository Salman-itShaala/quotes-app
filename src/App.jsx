import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import QuoteWithId from "./pages/QuoteWithId";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote-id" element={<QuoteWithId />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
