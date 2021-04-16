import { Footer, Header, Main, PageLayout } from './components';

const App = () => (
  <PageLayout
    HeaderComponent={Header}
    MainComponent={Main}
    FooterComponent={Footer}
  />
);

export default App;
