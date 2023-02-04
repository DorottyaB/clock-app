import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TOKEN = 'adwWjJmFazLIiJHXNmCH';

export const TimeContext = createContext();

const TimeContextProvider = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState({
    timezone: '',
    timezoneName: '',
    country: '',
    city: '',
    timeday: '',
    day: '',
    week: '',
  });
  const [currentTime, setCurrentTime] = useState();
  const [isShowing, setIsShowing] = useState(false);

  let interval;
  let delay;

  const fetchData = () => {
    axios
      .get(`https://timezoneapi.io/api/ip/?token=${TOKEN}`)
      .then(function (response) {
        setData(prevData => {
          return {
            ...prevData,
            timezone: response.data.data.timezone.id,
            timezoneName: response.data.data.datetime.offset_tzab,
            country: response.data.data.country,
            city: response.data.data.city,
            timeday: response.data.data.datetime.timeday_gen,
            day: response.data.data.datetime.day_full,
            week: response.data.data.datetime.week,
          };
        });
        const time = response.data.data.datetime.time;
        setCurrentTime(time[0] === '0' ? time.slice(1) : time);
        setIsFetching(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isFetching) {
      const timeOffset = 1000 - new Date(Date.now()).getMilliseconds();
      delay = setTimeout(() => {
        interval = setInterval(() => {
          const date = new Date(Date.now()).toLocaleTimeString([], {
            timeZone: data.timezone,
            // hour: '2-digit',
            // minute: '2-digit',
          });
          setCurrentTime(date);
          if (
            date === '12:00:00' ||
            date === '18:00:00' ||
            date === '0:00:00' ||
            date === '6:00:00'
          ) {
            setIsFetching(true);
            fetchData();
          }
        }, 1000);
      }, timeOffset);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(delay);
    };
  }, [isFetching]);

  return (
    <TimeContext.Provider value={{ isFetching, currentTime, data, isShowing, setIsShowing }}>
      {children}
    </TimeContext.Provider>
  );
};

export default TimeContextProvider;
