import './Header.css';
import { Logo, BurgerMenu } from './images';

export const Header = ({ className }) => (
  <div className={`Header ${className}`}>
    <div className="leftSection">
      <a href="#">Toys</a>
      <a href="#">Our story</a>
    </div>

    <div>
      <img src={Logo} alt="logo" className="logo" />
      <img src={BurgerMenu} alt="menu" className="burgerMenu" />
    </div>

    <div className="rightSection">
      <a href="#">Shop</a>
      <a href="#">Contact</a>
    </div>
  </div>
);
