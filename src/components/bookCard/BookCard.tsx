'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Card, CardMedia, CardContent, Container, Grid, Typography} from "@mui/material";
import {Book, BooksApiResponse} from '../../utils/types/dataBook'



const BookCard = () => {

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
const authorQuery = "Octavia Butler"; 
// Change en fonction des envie de recommandation j'ai pas encore trouvée de moyen d'avoir des recommandations accordé avec notre ligne editorial.
const formattedQuery = encodeURIComponent(`inauthor:${authorQuery}`);
const [bookData, setBookData] = useState<Book[]>([]);

useEffect(() => {const fetchData = async () => {
    try 
    {const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&key=${apiKey}`);
    setBookData(response.data.items || []);
    } 
    catch (error) 
    {console.error('Error fetching books: ', error);
    }
};
    if(apiKey) {
        fetchData();
    } else {
        console.log('API key is not set');
    }
}, [apiKey]);
if (!bookData) return <Typography>Loading...</Typography>;


    return (
        <Container>
            <Grid container spacing={4}>
                {bookData.map((book, index) => {
                const { title, imageLinks, publishedDate } = book.volumeInfo;
                return (
                    <Grid 
                        item 
                        key={index} 
                        xs={12} 
                        sm={6} 
                        md={4}>
                        <Card>
                            {imageLinks && imageLinks.thumbnail && (
                            <CardMedia
                            component="img"
                            image={imageLinks.thumbnail}
                            alt={`Cover of the book ${title}`}
                            />)}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Publication Year: {publishedDate}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    </Container>
    )
}


export default BookCard
