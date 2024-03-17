import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useBookSearch from '@/utils/hooks/useBookSearch'
import Card from '@/components/card/Card'
import Loading from '../loading/Loading'
import {Box} from '@mui/material'

const BooksCarousel = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY!
  const query = 'Octavia Butler'
  const {bookData, isLoading} = useBookSearch(apiKey, query)

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 778,
        settings: {
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Box>
      {isLoading ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {bookData.map((book, index) => (
            <Box key={`${index}-${book.id}`}>
              <Card
                imageUrl={book.volumeInfo.imageLinks?.thumbnail}
                title={book.volumeInfo.title}
              />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  )
}

export default BooksCarousel
