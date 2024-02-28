import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '300px',
        height: '420px',
        marginBottom: '20px',
    },
    media: {
        height: '350px',
        width: '100%',
        objectFit: 'fill',
    },
    title: {
        fontSize: '1rem',
    },
    description: {
        fontSize: '0.875rem'
    },
});

interface MyCardProps {
    imageUrl?: string;
    title: string;
    description?: string;
    onClick?: () => void;
}

const MyCard: React.FC<MyCardProps> = ({ imageUrl, title, description, onClick }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea onClick={onClick}>
                {imageUrl && (
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt={title}
                        className={classes.media}
                    />
                )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                    {title}
                </Typography>
                    {description && (
                        <Typography variant="body2" color="text.secondary" className={classes.description}>
                            {description}
                        </Typography>
                    )}
            </CardContent>
        </CardActionArea>
        {}
    </Card>
    );
};

export default MyCard;
