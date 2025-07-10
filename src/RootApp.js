// RootApp.jsx
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRestaurants } from "../Stored/restaurantSlice";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import store from "../Stored/stores";

export default function RootApp() {
  const dispatch = useDispatch();

  useEffect(() => {
  if (store.getState().restaurants.list.length === 0) {
    dispatch(fetchRestaurants());
  }
}, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Footer />}>
          <Route path="/" element={<Home />} />
          <Route element={<SecondaryHome />}>
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/city/delhi/:id" element={<RestaurantMenu />} />
          </Route>
        </Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}
