export type Type_book = {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
            thumbnail: string;
            smallThumbnail: string;
        };
        publishedDate?: string;
        authors?: string[];
        description?: string;
        pageCount?: number;
        categories?: string[];
        language?: string;
    };
}