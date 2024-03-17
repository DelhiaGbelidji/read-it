import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useBookSearch from '@/utils/hooks/useBookSearch'
import Card from '@/components/card/Card'
import Loading from '../loading/Loading'
import { Container } from '@mui/material'

const BooksCarousel = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY!
  const query = 'Octavia Butler'
  const {bookData, isLoading} = useBookSearch(apiKey, query)

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '-40px',
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '-40px',
        },
      },
      {
        breakpoint: 778,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  }

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {bookData.map((book, index) => (
            <Card
              key={`${index}-${book.id}`}
              imageUrl={book.volumeInfo.imageLinks?.thumbnail}
              title={book.volumeInfo.title}
            />
          ))}
        </Slider>
      )}
    </Container>
  )
}

export default BooksCarousel
