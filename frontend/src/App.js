import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import ProtectedRoute from './components/protectedRoute';
import OrderScreen from './screens/OrderScreen/OrderScreen';
import axios from 'axios';
import PaymentScreen from './screens/PaymentScreen/PaymentScreen';
import AdminHomeScreen from './screens/AdminScreens/AdminHome/AdminHomeScreen';
import AdminProductScreen from './screens/AdminScreens/AdminProductScreen/AdminProductScreen';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import AdminNav from './components/admin/AdminNav';
import AdminPanel from './components/admin/AdminPanel';
import Sidebar from './components/sidebar/Sidebar';
import AdminLayout from './screens/AdminScreens/AdminLayout';
import { ProSidebarProvider } from 'react-pro-sidebar';
import AllProductsScreen from './screens/AdminScreens/AdminProductScreen/AllProductsScreen';
import ProfileInfo from './components/ProfileInfo';
import OrderInfo from './screens/AdminScreens/OrderInfo';

function App() {
  return (
    <BrowserRouter>
      <ProSidebarProvider>
        <ThemeProvider theme={theme}>
          {/* <Navbar /> */}
          {/* {false && <Navbar />} */}
          {/* Admin Routes */}
          <Routes>
            <Route path="/dashboard" element={<AdminLayout />}>
              <Route path="home" element={<AdminPanel />} />
              <Route path="addproduct" element={<AdminProductScreen />} />
              <Route path="allproducts" element={<AllProductsScreen />} />
              <Route path="profile" element={<ProfileInfo />} />
              <Route path="orders" element={<OrderInfo />} />
              <Route path="users" element={<ProfileInfo />} />
              {/* <Route path="re" element={<ProfileInfo />} /> */}
            </Route>
          </Routes>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/checks" element={<CheckoutScreen />} />
            <Route
              path="/checkout"
              element={
                // <ProtectedRoute>
                <ShippingScreen />
                //</ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                // <ProtectedRoute>
                <PaymentScreen />
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
          {/* <Footer /> */}
        </ThemeProvider>
      </ProSidebarProvider>
    </BrowserRouter>
  );
}

export default App;
