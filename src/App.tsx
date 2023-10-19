import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Products = lazy(() => import("./pages/Products"));



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/dashboard" element={ <Dashboard /> }/>
        <Route path="/admin/product" element={ <Products />}/>
        <Route path="/admin/customers" element={ <Customers />}/>
        <Route path="/admin/transaction" element={ <Transaction/>}/>

      </Routes>
    </Router>
  )
}

export default App;