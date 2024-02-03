import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/loader";
import Header from "./components/header";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const Shipping = lazy(() => import("./pages/shipping"));
const Login = lazy(() => import("./pages/login"));
const Orders = lazy(() => import("./pages/orders"));
const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transactions = lazy(() => import("./pages/admin/Transactions"));
const Customers = lazy(() => import("./pages/admin/Customers"));
const NewProduct = lazy(() => import("./pages/admin/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/admin/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/admin/management/TransactionManagement")
);

const App = () => {
  return (
    <Router>
      {/* {location.pathname !== "/login" ?  : null} */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          {/* Not Logged In Route */}
          <Route path="/login" element={<Login />} />

          {/*logged in user routes*/}
          <Route>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          {/* admin route  */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/customers" element={<Customers />} />
          {/*Charts  */}

          {/*  Apps*/}

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
