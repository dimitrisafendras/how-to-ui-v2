import './Main.css';
import {Card} from '../card';

export const Main = ({ className }) =>
	<div className={`Main ${className}`}>
		Main
		<div className="Main__layout">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
