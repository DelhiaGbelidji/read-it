export interface Book_format {
    id: string;
    volumeInfo: {
        title: string;
        imageLinks?: {
        thumbnail?: string;
    };
        publishedDate?: string;
    };
}

export interface Books_Api_Response {
    items: Book_format[];
}