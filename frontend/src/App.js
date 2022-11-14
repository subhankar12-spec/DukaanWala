import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import ProtectedRoute from './components/protectedRoute';
import OrderScreen from './screens/OrderScreen/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route
          path="/checkout"
          element={
            // <ProtectedRoute>
            <ShippingScreen />
            //</ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            // <ProtectedRoute>
            <OrderScreen />
            //</ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
