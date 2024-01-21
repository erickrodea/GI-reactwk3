import logo from "./logo.svg";
import "./App.css";
import Counter from "./easy/Counter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieSearch from "./medium";
import Hard from "./hard";
import Harder from "./hardDetails";
import Navbar from "./navbar/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          = <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Counter />}></Route>
            <Route path="/medium" element={<MovieSearch />}></Route>
            <Route path="/hard" element={<Hard />}></Route>
            <Route path="/harder" element={<Harder />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
