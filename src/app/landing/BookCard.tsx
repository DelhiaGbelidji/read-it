'use client'
import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import useBookSearch from '@/utils/hooks/useBookSearch'

const BookCard = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY!
  const authorQuery = 'Octavia Butler'
  const formattedQuery = encodeURIComponent(`inauthor:${authorQuery}`)

  const {bookData, isLoading} = useBookSearch(apiKey, formattedQuery)

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Grid container spacing={4}>
        {bookData.map((book, index) => {
          const {title, imageLinks, publishedDate} = book.volumeInfo
          return (
            <Grid item key={index} xs={3}>
              <Card>
                {imageLinks?.thumbnail && (
                  <CardMedia
                    component='img'
                    image={imageLinks.thumbnail}
                    alt={`Cover of the book ${title}`}
                  />
                )}
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {title}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Publication Year: {publishedDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default BookCard
