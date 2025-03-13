import React from 'react';

import {Box, useTheme} from '@mui/material';

import Card from '@/components/card/Card';
import {COLORS} from '@/utils/theme';
import {Type_book} from '@/utils/types';

interface BookSlideProps {
  book: Type_book;
  isActive: boolean;
  index: number;
  isLoading: boolean;
}

const BookSlide = ({book, isActive, isLoading}: BookSlideProps) => {
  const theme = useTheme();

  return (
    <>
      <div
        aria-hidden={!isActive}
        style={{pointerEvents: isActive ? 'auto' : 'none'}}>
        <Box
          role='group'
          aria-label={`Livre : ${book.volumeInfo.title}`}
          tabIndex={isActive ? 0 : -1}
          sx={{
            px: 1,
            opacity: isActive ? 1 : 0.7,
            transform: `scale(${isActive ? 1 : 0.95})`,
            transition: theme.transitions.create(['opacity', 'transform'], {
              duration: theme.transitions.duration.shorter,
              easing: theme.transitions.easing.easeInOut,
            }),
          }}>
          <Card
            isLoading={isLoading}
            imageUrl={
              book.volumeInfo.imageLinks?.thumbnail ||
              '/assets/placeholder-book.jpg'
            }
            title={book.volumeInfo.title}
            sx={{
              width: '100%',
              maxWidth: 220,
              mx: 'auto',
              height: '100%',
              backgroundColor: theme.palette.background.paper,
              boxShadow: isActive
                ? `0 8px 16px ${COLORS.grey500}`
                : theme.shadows[1],
              transition: theme.transitions.create(
                ['box-shadow', 'transform'],
                {
                  duration: theme.transitions.duration.shortest,
                },
              ),
              '&:hover': isActive
                ? {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 12px 24px ${COLORS.grey500}`,
                  }
                : {},
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default BookSlide;
