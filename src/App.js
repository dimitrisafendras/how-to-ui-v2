import { Footer, Header, Main, PageLayout, Sidebar } from './components';

const App = () => (
  <PageLayout
    HeaderComponent={Header}
    MainComponent={Main}
    SidebarComponent={Sidebar}
    FooterComponent={Footer}
  />
);

export default App;
