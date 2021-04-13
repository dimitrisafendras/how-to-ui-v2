import {Footer, Header, Main, PageLayout} from './components';

function App() {
	return (
		<PageLayout
			HeaderComponent={Header}
			MainComponent={Main}
			FooterComponent={Footer}
		/>
	);
}

export default App;
