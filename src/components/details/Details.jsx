import { useContext } from 'react';
import { TimeContext } from '../../contexts/TimeContext';
import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import { DetailsContainer, LargerText, SmallerText, TextContainer } from './details.styles';

export const Details = () => {
  const { width } = useWindowDimensions();
  const { data, isShowing } = useContext(TimeContext);
  const getDayOfWeek = () => {
    switch (data.day) {
      case 'Monday':
        return 1;
      case 'Tuesday':
        return 2;
      case 'Wednesday':
        return 3;
      case 'Thursday':
        return 4;
      case 'Friday':
        return 5;
      case 'Saturday':
        return 6;
      case 'Sunday':
        return 7;
    }
  };

  const dayOfWeek = getDayOfWeek();
  const weekNumber = data.week.startsWith('0') ? data.week.slice(1) : data.week;

  const today = new Date();
  const yearday = Math.ceil((today - new Date(today.getFullYear(), 0, 1)) / 86400000);

  const borderStyle =
    data.timeday === 'night' || data.timeday === 'evening'
      ? '1px solid rgba(173,173,173,0.4)'
      : '1px solid rgba(0,0,0,0.3)';

  return (
    <DetailsContainer timeday={data.timeday} className={isShowing && 'fade-in'}>
      <TextContainer style={{ borderRight: width > 800 ? borderStyle : 'none' }}>
        <SmallerText>Current timezone</SmallerText>
        <LargerText>{data.timezone}</LargerText>
      </TextContainer>
      <TextContainer>
        <SmallerText>Day of the week</SmallerText>
        <LargerText>{dayOfWeek}</LargerText>
      </TextContainer>
      <TextContainer style={{ borderRight: width > 800 ? borderStyle : 'none' }}>
        <SmallerText>Day of the year</SmallerText>
        <LargerText>{yearday}</LargerText>
      </TextContainer>
      <TextContainer>
        <SmallerText>Week number</SmallerText>
        <LargerText>{weekNumber}</LargerText>
      </TextContainer>
    </DetailsContainer>
  );
};
