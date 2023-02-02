import axios from 'axios';
import { useEffect, useState } from 'react';
import { QuoteContainer, RefreshButton } from './quote.styles';

export const Quote = () => {
  const [quote, setQuote] = useState({
    content: '',
    author: '',
  });

  const getQuote = () => {
    axios
      .get('https://api.quotable.io/random?tags=famous-quotes&maxLength=150')
      .then(response => {
        setQuote(prevValue => {
          return {
            ...prevValue,
            content: response.data.content,
            author: response.data.author,
          };
        });
      })
      .catch(error => {
        setQuote(prevValue => {
          console.log(error);
          return {
            ...prevValue,
            content: '',
            author: '',
          };
        });
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div style={{ fontSize: '15px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.15)' }}>
      <QuoteContainer>
        {quote.content && <q>{quote.content}</q>}
        <RefreshButton aria-label='Get new quote' onClick={getQuote}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='#d1d1d1'
            viewBox='0 0 256 256'
          >
            <rect width='256' height='256' fill='none'></rect>
            <polyline
              points='176.2 99.7 224.2 99.7 224.2 51.7'
              fill='none'
              stroke='#d1d1d1'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></polyline>
            <path
              d='M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9'
              fill='none'
              stroke='#d1d1d1'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></path>
            <polyline
              points='79.8 156.3 31.8 156.3 31.8 204.3'
              fill='none'
              stroke='#d1d1d1'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></polyline>
            <path
              d='M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9'
              fill='none'
              stroke='#d1d1d1'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='24'
            ></path>
          </svg>
        </RefreshButton>
      </QuoteContainer>
      <p style={{ fontWeight: '500' }}>{quote.author}</p>
    </div>
  );
};