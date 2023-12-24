import React from "react";
import "./product.css";
import {useStateValue} from "./Stateprovider"

function Products({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
     dispatch ({
       type: "ADD_TO_BASKET",
       item: {
         id: id,
         title: title,
         image: image,
         price: price,
         rating: rating,
       },
     })
  };
  return (
    <div>
      <div className="product">
        <div className="product___info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
