export type Type_book ={
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
        thumbnail?: string;
    };
        publishedDate?: string;
    };
}