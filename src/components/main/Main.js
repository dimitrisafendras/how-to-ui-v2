import './Main.css';
import {Card} from './components/card';

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
