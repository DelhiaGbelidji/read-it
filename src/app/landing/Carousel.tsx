import React from 'react';
import MyCard from '../../components/card/MyCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import useBookSearch from '../../utils/hooks/useBookSearch';

interface CarouselBookCardProps {
    apiKey: string;
    query: string;
}

const CarouselBookCard: React.FC<CarouselBookCardProps> = ({ apiKey, query }) => {
    const { bookData, isLoading } = useBookSearch(apiKey, query);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "-60px", // Adjust centerPadding as needed
    };

return (
    <Slider {...settings}>
        {bookData.map((book) => (
            <MyCard
            key={book.id}
            imageUrl={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo.title}
            description={`Published: ${book.volumeInfo.publishedDate}`}
        />        
    ))}
    </Slider>
    );
};

export default CarouselBookCard;