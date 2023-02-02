import { useContext } from 'react';
import { AppContainer, Overlay, MainContainer } from './App.styles';
import { Button } from './components/button/Button';
import { Clock } from './components/clock/Clock';
import { Details } from './components/details/Details';
import { Quote } from './components/quote/Quote';
import { TimeContext } from './contexts/TimeContext';

function App() {
  const { data, isShowing } = useContext(TimeContext);

  return (
    <AppContainer timeday={data.timeday}>
      <Overlay isShowing={isShowing}>
        {!isShowing && <Quote />}
        <MainContainer>
          <Clock />
          <Button />
        </MainContainer>
      </Overlay>
      {isShowing && <Details />}
    </AppContainer>
  );
}

export default App;
