import { useContext } from 'react';
import { TimeContext } from '../../contexts/TimeContext';
import useWindowDimensions from '../../custom-hooks/useWindowDimensions';
import sunIcon from '../../assets/sun-icon.svg';
import moonIcon from '../../assets/moon-icon.svg';
import { ClockContainer, FlexContainer, Time, Timezone, Location } from './clock.styles';

export const Clock = () => {
  const { isFetching, currentTime, data } = useContext(TimeContext);
  const { width } = useWindowDimensions();

  return (
    <>
      {!isFetching && (
        <ClockContainer>
          <FlexContainer>
            <img
              width='20px'
              height='20px'
              src={data.timeday === 'night' || data.timeday === 'evening' ? moonIcon : sunIcon}
              alt='sun or moon icon'
            />
            <p>
              Good {data.timeday}
              {width > 700 && ", it's currently"}
            </p>
          </FlexContainer>
          <Time>{currentTime.slice(0, -3)}</Time>
          <Timezone>{data.timezoneName}</Timezone>
          <Location>
            In {data.city}, {data.country}
          </Location>
        </ClockContainer>
      )}
    </>
  );
};
