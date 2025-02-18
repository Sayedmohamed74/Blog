import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import PagePost from "./pages/public/PagePost";
import PagePostsByCategory from "./pages/public/PagePostsByCategory";
import PageHome from "./pages/public/PageHome";
import PageSignUp from "./pages/public/PageSignUp";
import PageSignIn from "./pages/public/PageSignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/sign-up" element={<PageSignUp/>} />
          <Route path="/sign-in" element={<PageSignIn/>} />
          <Route path="/post" element={<PagePost />} />
          <Route path="/category/" element={<PagePostsByCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// <div className=" grid grid-cols-3 gap-2.5  ">
