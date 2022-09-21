import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import { About } from "./Pages/About";
import { Blog } from "./Pages/Blog";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import Data from "./Components/Data/Data";
import { Login, LoginProvider } from "./Pages/Login";
import { Authorization } from "./Authorization";

function App() {
  return (
    <LoginProvider>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={
        <Authorization>
          <About/>
        </Authorization>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<Data/>}/>
    </Route>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   </LoginProvider>
  );
}

export default App;
