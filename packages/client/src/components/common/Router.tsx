import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { HomePage } from "../../pages/HomePage";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      {/* <Route path="orders">
        <Route index element={<OrdersPage />} />
        <Route path=":tab/:action/:id?" element={<OrdersPage />} />
        <Route path=":tab" element={<OrdersPage />} />
      </Route>
      <Route path="order">
        <Route path=":action/:id?" element={<OrderPage />} />
      </Route> */}

      <Route path="*" element={<h3>Default Route Contents / 404</h3>} />
    </Route>
  </Routes>
);
