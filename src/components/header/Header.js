import './Header.css';
import { Logo, BurgerMenu } from './images';

export const Header = ({ className }) => (
  <div className={`Header ${className}`}>
    <div className="Header__leftSection">
      <a href="#">Toys</a>
      <a href="#">Our story</a>
    </div>

    <img src={Logo} alt="logo" className="Header__logo" />

    {/* <img src={BurgerMenu} alt="menu" className="burgerMenu" /> */}

    <div className="Header__rightSection">
      <a href="#">Shop</a>
      <a href="#">Contact</a>
    </div>
  </div>
);
