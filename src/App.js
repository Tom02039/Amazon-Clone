import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  NavBar,
  ProductPage,
  SearchResults,
  CheckoutPage,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
