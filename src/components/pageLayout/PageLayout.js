import './PageLayout.css';

export const PageLayout = ({
  HeaderComponent,
  MainComponent,
  FooterComponent,
}) => (
  <div className="PageLayout">
    <HeaderComponent className={'PageLayout__header'} />
    <MainComponent className={'PageLayout__main'} />
    <FooterComponent className={'PageLayout__footer'} />
  </div>
);
