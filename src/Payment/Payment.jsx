import React,{useEffect, useState} from 'react'
import "./payment.css"
import { useStateValue } from "../HomePage/Stateprovider";
import { Link } from 'react-router-dom'
import CheckoutProdict from '../HomePage/CheckoutProdict';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';
import {db, auth} from "../Firebase"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("THE SECRET IS >>>", clientSecret);
 const handleSubmit = async (event) => {
   event.preventDefault();
   setProcessing(true);

   const payload = await stripe
     .confirmCardPayment(clientSecret, {
       payment_method: {
         card: elements.getElement(CardElement),
       },
     })
     .then(({ paymentIntent }) => {
       // paymentIntent = payment confirmation
       db.collection("users")
         .doc(user?.uid)
         .collection("orders")
         .doc(paymentIntent.id)
         .set({
           basket: basket,
           amount: paymentIntent.amount,
           created: paymentIntent.created,
         });
       setSucceeded(true);
       setError(null);
       dispatch({
         type: "EMPTY_BASKET",
       });
       navigate("/orders");
     })
     .catch((error) => {
       // Handle the error
       setError(error.message);
     })
     .finally(() => {
       setProcessing(false); // Ensure this is called in the finally block
     });
  };
  console.log("Type of db in Payment component:", typeof db);


  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket.length}</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProdict
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment