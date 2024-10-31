import "./hamburger.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('öppnar menyn');
    
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <RxHamburgerMenu className="menu-button" onClick={handleMenuClick} />
      {isMenuOpen && (
        <div className="overlay">
          <div className="menu">
            <button className="close-button" onClick={handleCloseMenu}>X</button>
            <ul className="ul-list">
              <li className="overlay-list" onClick={handleCloseMenu}>Projects</li>
              <li className="overlay-list"  onClick={handleCloseMenu}>About me</li>
              <li className="overlay-list"  onClick={handleCloseMenu}>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
