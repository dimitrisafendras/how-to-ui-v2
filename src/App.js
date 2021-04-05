import { PageLayout } from './pageLayout'


const Main = ({ className, children }) => <div className={`Main ${className}`}>Main{children}</div>

const MainLayout = ({ children }) => <div className='MainLayout'>{children}</div>
const Card = () => <div className='Card' />

const Footer = ({ className }) => <div className={`Footer ${className}`}>Footer</div>


const Header = ({ className }) =>
  <div className={`Header ${className}`}>
    Header
  </div>


function App() {
  return (
    <PageLayout
      HeaderComponent={Header}
      MainComponent={({ className }) =>
        <Main className={className}>
          <MainLayout>
            <Card />
            <Card />
            <Card />
          </MainLayout>
        </Main>
      }
      FooterComponent={Footer}
    />

  );
}

export default App;
