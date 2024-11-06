import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Admin/AdminLayout";
import Category from "./components/Admin/Category";
import Color from "./components/Admin/Color";
import Dashboard from "./components/Admin/Dashboard";
import Discount from "./components/Admin/Discount";
import Order from "./components/Admin/Order";
import Permission from "./components/Admin/Permission";
import Product from "./components/Admin/Product";
import Promotion from "./components/Admin/Promotion";
import Role from "./components/Admin/Role";
import Size from "./components/Admin/Size";
import Testimonial from "./components/Admin/Testimonial";
import User from "./components/Admin/User";
import Layout from "./components/Layout";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Setting from "./components/Pages/Setting";
import WhiteLIst from "./components/Pages/WhiteLIst";
import Apperance from "./components/Setting/Apperance";
import Profile from "./components/Setting/Profile";
import SingleProduct from "./components/SingleProduct";
import "./index.css";

const App = () => {

	return (
		<>
				<BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} >
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:productName" element={<SingleProduct />}/>
              <Route path="cart" element={<Cart />}/>
              <Route path="whitelist" element={<WhiteLIst />}/>
              <Route path="checkout" element={<Checkout />}/>
              <Route path="setting" element={<Setting />}>
                <Route index element={<Profile />}/>
                <Route path="profile" element={<Profile />}/>
                <Route path="apperance" element={<Apperance />}/>
              </Route>
            </Route>
            
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<User />} />
              <Route path="roles" element={<Role />} />
              <Route path="permissions" element={<Permission />} />
              <Route path="categories" element={<Category />} />
              <Route path="products" element={<Product />} />
              <Route path="colors" element={<Color />} />
              <Route path="sizes" element={<Size />} />
              <Route path="setting" element={<Setting />} />
              <Route path="testimonials" element={<Testimonial />} />
              <Route path="orders" element={<Order />} />
              <Route path="promotions" element={<Promotion />} />
              <Route path="discount" element={<Discount />} />
            </Route>
          </Routes>
        </BrowserRouter>
		</>
	);
};

export default App;
