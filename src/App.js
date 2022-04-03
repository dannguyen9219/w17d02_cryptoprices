import { Route, Routes } from "react-router-dom"; // Route is a child of Routes
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/currencies" element={<Currencies/>} />
        <Route path="/price/:symbol" element={<Price/>} />
      </Routes>
    </div>
  )
};
// Our Routes will always live in App.js. This is where you would need to import all your pages, plus the react-router-dom //
// Routes will be children of App
// Add Nav above the Routes so that the nav bar does not move when the page moves, no reason to re-render the Nav //
// Footer is the same thing, add below the Routes
// When you see colon :, that means it can change dynamically, it will show the price for that symbol