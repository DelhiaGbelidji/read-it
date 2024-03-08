import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import useBookSearch from '@/utils/hooks/useBookSearch'
import Card from '@/components/card/Card'

const BooksCarousel = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY!
  const query = 'Octavia Butler'
  const {bookData, isLoading} = useBookSearch(apiKey, query)

  if (isLoading) {
    return <div>Loading...</div>
  }

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {bookData.map((book, index) => (
        <Card
          key={`${index}-${book.id}`}
          imageUrl={book.volumeInfo.imageLinks?.thumbnail}
          title={book.volumeInfo.title}
        />
      ))}
    </Slider>
  )
}

export default BooksCarousel
