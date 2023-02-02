import styled from 'styled-components';

export const ArrowContainer = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = styled.button`
  border: none;
  width: max-content;
  height: max-content;
  padding: 7px 7px 7px 17px;
  border-radius: 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  color: #5d5d5d;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.25);
    filter: brightness(110%);
  }
`;
