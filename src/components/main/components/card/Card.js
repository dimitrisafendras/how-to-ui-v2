import './Card.css'

export const Card = ({className, bigCard}) =>
  <div className={`Card ${className}`}>
      <div className='Card__h3'>
          Chicago releases video of police shooting teenager
      </div>
      {bigCard && <div className="Card__h4">;lkj</div>}
      <div className='Card__h5'>US & CANADA</div>
  </div>
