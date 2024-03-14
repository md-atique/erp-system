import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Components/shared/Layout";
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Orders from './Components/Orders';
import OrderCalendar from './Components/OrderCalendar';

const App = () => {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orderCalendar" element={<OrderCalendar />} />
      </Route>
    </Routes>
  </HashRouter>
  );
};

export default App;