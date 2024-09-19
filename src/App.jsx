import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Blogs from "./components/Blogs";
import Layout from "./Layout";
import CartItems from "./components/CartItems";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContainer />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<MainContainer />} />
          <Route path="cartItems" element={<CartItems />} />
          <Route path="*" element={<MainContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// import Header from "./components/Header"
// import MainContainer from "./components/MainContainer"

// function App() {

//   return (
//     <>
//     <Header />
//     <MainContainer />
//     </>
//   )
// }

// export default App
