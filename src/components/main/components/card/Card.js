import './Card.css';

export const Card = ({ className, bigCard }) => (
  <div className={`Card ${className}`}>
    <div className="Card__h3">
      Titanic: Searching for the 'missing' Chinese survivors
    </div>

    {bigCard && (
      <div className="Card__h4">By Zhaoyin Feng and Yitsing Wang</div>
    )}

    <div className="Card__h5">US &amp; CANADA</div>
  </div>
);
