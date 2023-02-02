import styled from 'styled-components';
import { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${slideUp} 1.2s ease-out forwards;

  &:nth-of-type(even) {
    padding-left: 80px;

    @media (max-width: 800px) {
      padding-left: 0;
    }
  }
  &:nth-of-type(odd) {
    padding-right: 80px;

    @media (max-width: 700px) {
      padding-right: 0;
    }
  }

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SmallerText = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #e0e0e0;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

export const LargerText = styled.p`
  font-size: 34px;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const DetailsContainer = styled.div`
  background-color: ${props =>
    props.timeday === 'night' || props.timeday === 'evening'
      ? 'rgba(0, 0, 0, 0.4)'
      : 'rgba(173, 173, 173, 0.4)'};
  color: ${props =>
    props.timeday === 'night' || props.timeday === 'evening' ? '#fff' : '#1c1c1c'};
  backdrop-filter: blur(10px);
  height: 50vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100px);
  align-items: center;
  align-content: center;

  padding: 7vmin 7vw;
  animation: ${fadeIn} 1.2s ease-out forwards;

  & ${SmallerText} {
    color: ${props =>
      props.timeday === 'night' || props.timeday === 'evening' ? '#e0e0e0' : '#262626'};
  }

  @media (max-width: 700px) {
    height: 35vh;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 40px);
  }
`;
