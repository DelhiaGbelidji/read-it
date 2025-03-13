import React, {useState} from 'react';

import {Box, Container, Alert} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import '@/styles/carousel.css';
import useBookSearch from '@/utils/hooks/useBookSearch';

import BookSlide from './BookSlide';

import type {Settings} from 'react-slick';

const DEFAULT_QUERIES = [
  'Octavia Butler',
  'Science Fiction Classics',
  'Best Fantasy Novels',
  'Award Winning Books',
];

const BooksCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY || '';
  const query = DEFAULT_QUERIES[0];
  const {bookData, isLoading, error} = useBookSearch(apiKey, query);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: false,
    arrows: false,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        },
      },
    ],
  };

  if (error) {
    return (
      <Container sx={{mb: 16}}>
        <Alert severity='error' sx={{mb: 2}}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        mt: {xs: 2, sm: 3, md: 4},
        mb: {xs: 6, sm: 8, md: 10},
        px: {xs: 1, sm: 2, md: 4},
        overflow: 'hidden',
      }}>
      <Box
        sx={{
          position: 'relative',
          '.slick-slider': {
            mx: {xs: -1, sm: -2},
          },
          '.slick-list': {
            px: {xs: 1, sm: 2},
          },
          '.slick-track': {
            display: 'flex',
            gap: 2,
          },
        }}>
        <Box
          role='region'
          aria-label='Carousel de livres'
          aria-roledescription='carousel'
          sx={{
            '& .slick-slide': {
              opacity: 0.5,
              transition: theme =>
                theme.transitions.create(['opacity', 'transform'], {
                  duration: theme.transitions.duration.shorter,
                }),
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            },
            '& .slick-slide.slick-active': {
              opacity: 1,
            },
          }}>
          <Slider {...settings}>
            {isLoading
              ? Array.from(new Array(4)).map((_, index) => (
                  <BookSlide
                    isLoading={true}
                    key={`skeleton-${index}`}
                    book={{
                      id: `skeleton-${index}`,
                      volumeInfo: {
                        title: '',
                        description: '',
                        imageLinks: {
                          thumbnail: '',
                          smallThumbnail: '',
                        },
                      },
                    }}
                    isActive={index === currentSlide}
                    index={index}
                  />
                ))
              : bookData.map((book, index) => (
                  <BookSlide
                    isLoading={false}
                    key={`${book.id || index}`}
                    book={book}
                    isActive={index === currentSlide}
                    index={index}
                  />
                ))}
          </Slider>
        </Box>
      </Box>
    </Container>
  );
};

export default BooksCarousel;
