import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import MainNav from "./Components/MainNav";
import Series from "./Components/Pages/Series/Series";
import Movies from "./Components/Pages/Movies/Movies";
import Trending from "./Components/Pages/Trending/Trending";
import Search from "./Components/Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact>
              {" "}
            </Route>
            <Route path="/movies" element={<Movies />}>
              {" "}
            </Route>
            <Route path="/series" element={<Series />}>
              {" "}
            </Route>
            <Route path="/search" element={<Search />}>
              {" "}
            </Route>
          </Routes>
        </Container>
      </div>

      <MainNav />
    </BrowserRouter>
  );
}

export default App;
