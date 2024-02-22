'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import {Card, CardMedia, CardContent, Container, Grid, Typography} from "@mui/material";
import {Book_format, Books_Api_Response} from '../../utils/types/googleBooks.type'



const BookCard = () => {

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;
const authorQuery = "Octavia Butler"; 
// Change en fonction des envie de recommandation j'ai pas encore trouvée de moyen d'avoir des recommandations accordé avec notre ligne editorial.
const formattedQuery = encodeURIComponent(`inauthor:${authorQuery}`);
const [bookData, setBookData] = useState<Book_format[]>([]);
// Initialise un tableau vide qui est spécifiquement destiné à contenir des objets du type Book.

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
                        xs={3} 
                        >
                        <Card>
                            {imageLinks?.thumbnail && (
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
                                    Author : {authorQuery}
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

