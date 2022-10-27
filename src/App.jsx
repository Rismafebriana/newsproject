import Navbar from "./components/organisms/navbar/Navbar";
import Indonesia from "./components/pages/indonesia/HomePage";
import Programming from "./components/pages/programming/ProgrammingPage";
import Covid from "./components/pages/covid/CovidPage";
import { Route, Routes } from "react-router-dom";
import Search from "./components/pages/search/SearchPage";
import Saved from "./components/pages/saved/SavedPage";

function App() {
  return (
    <>
      <main className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Indonesia/>} />
          <Route path="/programming" element={<Programming/>} />
          <Route path="/covid" element={<Covid/>} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;