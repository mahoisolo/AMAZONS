import React from 'react'
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from 'react-router-dom';
import { useStateValue } from "../HomePage/Stateprovider";
import { auth } from "../Firebase";
function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div>
        <div className="deliver">
          <PlaceIcon className="deliver__icon" />

          <div className="header__option">
            <span className="header__optionLineOne ">Deliver to</span>
            <span className="header__optionLineTwo">Ethiopia</span>
          </div>
        </div>
      </div>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search Amazon"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to= "/login" className="header__clearLink">
          <div className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__clearLink">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearLink">
          <div className="header__optionBasket">
            <AddShoppingCartIcon />
            <span className="header__optionLineTwo  header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header