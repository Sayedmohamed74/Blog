import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import PagePost from "./pages/public/PagePost";
import PagePostsByCategory from "./pages/public/PagePostsByCategory";
import PageHome from "./pages/public/PageHome";
import PageSignUp from "./pages/public/PageSignUp";
import PageSignIn from "./pages/public/PageSignIn";
import Dashboard from "./pages/dashboard/Dashboard";
import Posts from "./pages/dashboard/Posts";
import Categories from "./pages/dashboard/Categories";
import Users from "./pages/dashboard/Users";
import UserProvider from "./context/UserProvider";
import ProtectPageAuth from "./components/ProtectPageAuth";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route element={<ProtectPageAuth />}>
              <Route path="/sign-up" element={<PageSignUp />} />
              <Route path="/sign-in" element={<PageSignIn />} />
            </Route>
            <Route path="/post/:id" element={<PagePost />} />
            <Route path="/category/" element={<PagePostsByCategory />} />
            <Route path="/dashboard/" element={<Dashboard />}>
              <Route path="posts" element={<Posts />} />
              <Route path="categories" element={<Categories />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
// <div className=" grid grid-cols-3 gap-2.5  ">
