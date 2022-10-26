import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import Gallery from "./pages/Gallery";
import Board from "./pages/Board";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Gallary" element={<Gallery />} />
          <Route path="/Board" element={<Board />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
