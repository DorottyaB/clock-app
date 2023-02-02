import styled from 'styled-components';
import bgDay from './assets/bg-day.jpg';
import bgNight from './assets/bg-night.jpg';

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: ${props =>
    props.timeday === 'night' || props.timeday === 'evening' ? `url(${bgNight})` : `url(${bgDay})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 100%;
  min-height: ${props => (props.isShowing ? '50vh' : '100vh')};
  background-color: rgba(0, 0, 0, 0.15);
  padding: 0 7vw;
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  @media (max-width: 700px) {
    min-height: ${props => (props.isShowing ? '75vh' : '100vh')};
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }
`;
