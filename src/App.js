import "./App.css";
import MainNav from "./components/navbar/MainNav";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./pages/trending/Trending";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";
import Series from "./pages/series/Series";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <MainNav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/movies" element={<Movies />} />
            <Route path="/search" element={<Search />} />
            <Route path="/series" element={<Series />} />
          </Routes>
          <div className="footer">
            <span className="copyright">&copy; Akshansh Garg</span>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
