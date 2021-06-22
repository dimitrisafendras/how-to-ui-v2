import './Header.css';
import { Logo, BurgerMenu } from './images';

export const Header = ({ className }) => (
  <div className={`Header ${className}`}>
    <a href="#">Toys</a>
    <a href="#">Our story</a>

    <img src={Logo} alt="logo" />
    <img src={BurgerMenu} alt="menu" className="Header__burger" />

    <a href="#">Shop</a>
    <a href="#">Contact</a>
  </div>
);
