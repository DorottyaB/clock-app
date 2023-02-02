import styled from 'styled-components';

export const QuoteContainer = styled.div`
  display: flex;
  gap: 15px;
  max-width: 480px;
  margin-bottom: 12px;
`;

export const RefreshButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  height: max-content;
  cursor: pointer;
  margin-top: 5px;
  transition: all 0.2s;

  &:hover,
  &:active {
    filter: brightness(120%);
  }
`;
