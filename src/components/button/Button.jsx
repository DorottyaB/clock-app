import { ArrowContainer, MoreButton } from './button.styles';
import caretDown from '../../assets/caret-down.svg';
import caretUp from '../../assets/caret-up.svg';
import { useContext } from 'react';
import { TimeContext } from '../../contexts/TimeContext';

export const Button = () => {
  const { isShowing, setIsShowing } = useContext(TimeContext);

  const handleClick = () => {
    setIsShowing(prevValue => !prevValue);
  };

  return (
    <MoreButton onClick={handleClick}>
      {isShowing ? 'LESS' : 'MORE'}
      <ArrowContainer>
        <img width='20px' height='20px' src={isShowing ? caretUp : caretDown} alt='arrow icon' />
      </ArrowContainer>
    </MoreButton>
  );
};
