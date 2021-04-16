import { Footer, Header, Main, PageLayout } from './components';

const App = () => {
	return (
		<PageLayout
			HeaderComponent={Header}
			MainComponent={Main}
			FooterComponent={Footer}
		/>
	);
}

export default App;
