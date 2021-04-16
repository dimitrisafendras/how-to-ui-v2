import './Main.css';
import { Card } from './components';

export const Main = ({ className }) => (
  <div className={`Main ${className}`}>
    <div className="Main__layout">
      {/*Discuss if instead spancol/row 2*/}
      <Card className="Main__bigCard" bigCard />
      <Card className="Main__smallCard1" />
      <Card className="Main__smallCard2" />
      <Card className="Main__smallCard3" />
      <Card className="Main__smallCard4" />
    </div>
  </div>
);
