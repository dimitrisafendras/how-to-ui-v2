import './Main.css';
import { Card } from './components';

export const Main = ({ className }) =>
	<div className={`Main ${className}`}>
		Main
		<div className="Main__layout">
			{/*Discuss if instead spancol/row 2*/}
			<Card className='Main-layout__bigCard'/>
			<Card className='Main-layout__smallCard1'/>
			<Card className='Main-layout__smallCard2'/>
			<Card className='Main-layout__smallCard3'/>
			<Card className='Main-layout__smallCard4'/>
		</div>
	</div>
