import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Blogs from "./Pages/Blogs";
import AddBlog from "./Pages/AddBlog";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blog/create" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
