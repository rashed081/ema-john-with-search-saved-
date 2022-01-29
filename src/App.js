import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/Order Review/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";
import PlaceOrder from "./components/placeorder/PlaceOrder";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="order-review" element={<OrderReview />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="place-order" element={<PlaceOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
