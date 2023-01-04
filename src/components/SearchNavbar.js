import React, { useState } from "react";
import logo from "./img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faUser,
  faCartShopping,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import "./scss/SearchNavbar.scss"

const SearchNavbar = () => {
  const [userName, setUserName] = useState("Hello, Sign in");
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="SearchOutterBody">
        <div className="SearchInnerBody">
          <div className="firstLine">
            <div className="logoBody">
              <img src={logo} alt="logoImg" />
            </div>
            <div className="searchBarBody">
              <span>
                <input
                  type="text"
                  placeholder="Search for products"
                  name="search"
                />
                <button>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </span>
            </div>
            <div className="accountBarBody">
              <div className="wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="account">
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div>
                  <p>{userName}</p>
                  <h1>My Account</h1>
                </div>
              </div>
              <div className="cart">
                <span>
                  <FontAwesomeIcon icon={faCartShopping} /> <p>1</p>
                </span>
                <div>
                  <p>My Cart</p>
                  <h1>
                    ${amount}
                    <FontAwesomeIcon icon={faAngleDown} />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="secondLine">
            <ul>
              <li>Departments</li>
              <li>line</li>
              <li>Home</li>
              <li>Shop</li>
              <li>Account</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Docs/Components</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchNavbar;
