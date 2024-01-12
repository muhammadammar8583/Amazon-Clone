import "../App.css";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { BsSearch, BsList } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      {/* Main Navbar */}
      <div className="main-navbar">
        <a className="nav-logo border" href="#">
          <div className="logo"></div>
        </a>
        {/* Nav Location */}
        <div className="nav-location border">
          <a href="#">
            <span className="deliver">Deliver to</span>
            <div className="location-icon">
              <FaLocationDot />
              <div className="location">Pakistan</div>
            </div>
          </a>
        </div>
        {/* Nav Search */}
        <div className="nav-search">
          <select className="search-select">
            <option value="All">All</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon"
            className="search-input"
          />
          <div className="search-icon">
            <BsSearch />
          </div>
        </div>
        {/* Signin */}
        <div className="nav-signin border">
          <p>
            <span className="signin-first">Hello, signin</span>
          </p>
          <p className="signin-second">Accounts & Lists</p>
        </div>
        {/* Return */}
        <div className="nav-return border">
          <p>
            <span className="signin-first">Returns</span>
          </p>
          <p className="signin-second">& Orders</p>
        </div>
        {/* Cart */}
        <div className="nav-cart border">
          <span className="cart-icon">
            <FaCartShopping />
          </span>
          <span className="signin-second">Cart</span>
        </div>
      </div>
      {/* Panel */}
      <div className="nav-panel">
        <div className="list border">
          <span className="list-icon">
            <BsList />
          </span>
          <span className="list-select">All</span>
        </div>
        <div className="panel-options">
          <span className="border">Today's Deals</span>
          <span className="border">Registry</span>
          <span className="border">Customer Service</span>
          <span className="border">Gift Cards</span>
          <span className="border">Sell</span>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
