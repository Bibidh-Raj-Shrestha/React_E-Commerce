import {Routes,Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App(){
  return(<>
        <Routes>
          <Route path="/" element={<Dashboard/>}>
            <Route index element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductsDetails/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/cart" element={<ProtectedRoute>
                                            <Cart/>
                                          </ProtectedRoute>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
        </Routes>
    </>);
}