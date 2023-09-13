import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";
import MyFooter from "./components/MyFooter";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/MovieDetails/:movieId" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
