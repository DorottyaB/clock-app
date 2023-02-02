import styled from 'styled-components';

export const ClockContainer = styled.div`
  text-transform: uppercase;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const Time = styled.h1`
  font-size: 160px;
  font-weight: 500;
  line-height: 100%;
  display: inline;

  @media (max-width: 700px) {
    font-size: 88px;
  }
`;

export const Timezone = styled.span`
  font-size: 34px;
  font-weight: 400;
  margin-left: 15px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Location = styled.p`
  letter-spacing: 2.6px;
  font-weight: 600;
  font-size: 20px;
  margin-top: 20px;

  @media (max-width: 700px) {
    letter-spacing: 1.6px;
    font-size: 13px;
    margin-top: 8px;
  }
`;
