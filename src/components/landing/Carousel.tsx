import React, {useRef, useCallback, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '@/styles/carousel.css';
import useBookSearch from '@/utils/hooks/useBookSearch';
import Loading from '../loading/Loading';
import BookSlide from './BookSlide';
import {Box, Container, Typography, Alert, IconButton} from '@mui/material';
import {COLORS} from '@/utils/theme';
import {ChevronLeft, ChevronRight} from '@mui/icons-material';
import {visuallyHidden} from '@mui/utils';

const DEFAULT_QUERIES = [
  'Octavia Butler',
  'Science Fiction Classics',
  'Best Fantasy Novels',
  'Award Winning Books',
];

const BooksCarousel = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY || '';
  const query = DEFAULT_QUERIES[0];
  const {bookData, isLoading, error} = useBookSearch(apiKey, query);

  const next = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);

  const previous = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);

  const CustomPrevArrow = useCallback(
    () => (
      <IconButton
        onClick={previous}
        sx={{
          position: 'absolute',
          left: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'},
        }}
        aria-label='Livre précédent'>
        <ChevronLeft />
      </IconButton>
    ),
    [previous],
  );

  const CustomNextArrow = useCallback(
    () => (
      <IconButton
        onClick={next}
        sx={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
          '&:hover': {bgcolor: 'rgba(0, 0, 0, 0.5)'},
        }}
        aria-label='Livre suivant'>
        <ChevronRight />
      </IconButton>
    ),
    [next],
  );

  const settings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
    <Container sx={{mb: 16, px: {xs: 1, sm: 2, md: 4}}}>
      <Box sx={{position: 'relative'}}>
        <Typography component='h2' sx={visuallyHidden}>
          Carousel de livres recommandés
        </Typography>

        {isLoading ? (
          <Box sx={{display: 'flex', justifyContent: 'center', py: 4}}>
            <Loading />
          </Box>
        ) : bookData.length > 0 ? (
          <Box
            role='region'
            aria-label='Carousel de livres'
            aria-roledescription='carousel'>
            <Slider {...settings}>
              {bookData.map((book, index) => (
                <BookSlide
                  key={`${book.id || index}`}
                  book={book}
                  isActive={index === currentSlide}
                  index={index}
                />
              ))}
            </Slider>
          </Box>
        ) : (
          <Typography
            variant='h6'
            color={COLORS.neutral}
            textAlign='center'
            sx={{py: 4}}>
            Aucun livre trouvé pour le moment.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default BooksCarousel;
