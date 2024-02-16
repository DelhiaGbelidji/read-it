export interface Book {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
        thumbnail?: string;
    };
        publishedDate?: string;
    };
}

export interface BooksApiResponse {
    items: Book[];
}