import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Context } from "./context/Context"
import { Cart } from "./pages/cart/CartPage";
import Home from './pages/HomePage';
import Checkout from './components/Checkout';

function App() {

  return (
    <div className="App">
      <Context>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </Context>
    </div>
  )
}

export default App
