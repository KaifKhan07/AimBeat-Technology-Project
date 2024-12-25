import React, { useState } from "react";
import facebook from "../../assets/Images/png/facebook.png";
import telephoneNumber from "../../assets/Images/png/phone.png";
import downArrow from "../../assets/Images/png/down-arrow.png";
import logo from "../../assets/Images/jpeg/Shopify-Logo.jpeg";
import searchIcon from "../../assets/Images/png/search.png";
import arrowUpDownIcon from "../../assets/Images/png/up-down.png";
import heartIcon from "../../assets/Images/png/heart.png";
import addToCartIcon from "../../assets/Images/png/add-to-cart.png";
import hamburger from "../../assets/Images/png/menu.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Categories");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="Header pt-4 px-6 sm:px-12 lg:px-20">
      <div className="Header-section-1 flex justify-between border-b-2 pb-4">
        <div className="contact-us flex space-x-0 sm:space-x-2">
          <div className="facebook flex items-center space-x-0 pr-2 sm:space-x-2 border-r-2 sm:pr-4">
            <div className="facebook-icon h-5 w-5">
              <img src={facebook} alt="Facebook Icon" className="h-full w-full" />
            </div>
            <div className="text-[10px] sm:text-[13px] sm:text-base">7500k Followers</div>
          </div>
          <div className="telephone-number flex items-center space-x-0 sm:space-x-2 pl-4">
            <div className="tele-no-icon h-5 w-5">
              <img src={telephoneNumber} alt="Phone Icon" className="h-full w-full" />
            </div>
            <div className="text-[10px] sm:text-[13px] sm:text-base">+[402] 763 283 46</div>
          </div>
        </div>

        <div className="user-setting-options hidden md:flex space-x-5">
          {["English", "$USD", "Setting"].map((item) => (
            <div key={item} className="flex items-center space-x-2 border-r-2 pr-4">
              <p className="text-sm">{item}</p>
              <div className="down-arrow h-3 w-3">
                <img src={downArrow} alt="Dropdown Arrow" className="h-full w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="relative block md:hidden">
          <div className="hamburger h-6 w-6" onClick={toggleMenu}>
            <img src={hamburger} alt="Hamburger Menu" className="h-full w-full" />
          </div>
          <div
            className={`responsive-sidebar fixed top-0 right-0 h-full bg-white z-30 w-full sm:w-1/2 md:hidden transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="close-button flex justify-end p-4">
              <button onClick={toggleMenu} className="text-black text-lg">
                Close
              </button>
            </div>
            <div className="sidebar-content p-4">
              <ul>
                {["Home", "Shop", "Products", "Categories", "Pages", "Contact"].map((link) => (
                  <li
                    key={link}
                    className={`py-2 pl-6 border ${activeLink === link ? "bg-blue-500 text-white" : ""}`}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="Header-section-2 flex justify-between items-center py-5 border-b-2">
        <div className="shofy-logo flex items-center space-x-2">
          <div className="logo-img h-8 w-8">
            <img src={logo} alt="Shopify Logo" className="h-full w-full" />
          </div>
          <div className="text-2xl sm:text-3xl font-bold">Shofy.</div>
        </div>

        <div className="pages">
          <ul className="page-links flex space-x-5">
            {["Home", "Shop", "Products", "Categories", "Pages", "Contact"].map((link) => (
              <li
                key={link}
                className={`cursor-pointer text-sm md:text-base ${
                  activeLink === link ? "text-blue-500" : "text-black hover:text-gray-500"
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="products-section flex items-center space-x-3 sm:space-x-5">
          <div className="search-Input-feature h-6 w-6 sm:h-7 sm:w-7">
            <img src={searchIcon} alt="Search Icon" className="h-full w-full" />
          </div>
          <div className="arrow-updown-feature h-5 w-5 sm:h-6 sm:w-6">
            <img src={arrowUpDownIcon} alt="Arrow Up/Down" className="h-full w-full" />
          </div>
          <div className="heart-feature user-added-items h-5 w-5 sm:h-6 sm:w-6">
            <img src={heartIcon} alt="Heart Icon" className="h-full w-full" />
          </div>
          <div className="cart-feature user-added-items h-5 w-5 sm:h-6 sm:w-6">
            <img src={addToCartIcon} alt="Add to Cart Icon" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
