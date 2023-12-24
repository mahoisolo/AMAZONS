import "./App.css";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Home from "./HomePage/Home";
import Checkout from "./HomePage/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Loginpage/Login";
import { useStateValue } from "./HomePage/Stateprovider";
import { auth } from "./Firebase";
import Payment from "./Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51OPhdcLiCZpPONtsnPCwpmr9D3KSzYasKUWLT7JFpqmcYVnsfPp81D7wME65F0UIK2U4QrpPTFSBrOKgULEmEToo00GMFyTolI"
)

function App() {
  const [{basket, user}, dispatch] = useStateValue();
 useEffect(() => {
   const checkUser = async () => {
     await auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         dispatch({
           type: "SET_USER",
           user: authUser,
         });
       } else {
         dispatch({
           type: "SET_USER",
           user: null,
         });
       }
     });
   };

   checkUser();
 }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/orders"
            element={
              <>
                <Header/>
                <Orders/>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
