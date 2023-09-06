import "./App.css";
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { useAuthContext } from "./hooks/useAuthContext";


import Login from './pages/Login'
import Signup from "./pages/Signup";


// function App() {
//   const { user } = useAuthContext()
//   return (
//     <div className="App">
//       <ShopContextProvider>
//         <Router>
//           <Navbar />
//           <div className="pages">
//           </div>
//           <Routes>
//             <Route path="/" element={<Shop />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// }


function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div className="pages">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
          </Routes>
        </div>
        </Router>
      </ShopContextProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;



// app shows


// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar";
// import { Shop } from "./pages/shop/shop";

// import { Cart } from "./pages/cart/cart";
// import { ShopContextProvider } from "./context/shop-context";

// function App() {
//   return (
//     <div className="App">
//       <ShopContextProvider>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Shop />} />
          
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </Router>
//       </ShopContextProvider>
//     </div>
//   );
// }

// export default App;