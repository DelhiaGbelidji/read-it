import axios from 'axios';
import {useEffect, useState} from 'react';
import {Type_book} from '../types';

type BookSearchResult = {
  bookData: Type_book[];
  isLoading: boolean;
};

export default function useBookSearch(
  apiKey: string,
  formattedQuery: string,
): BookSearchResult {
  const [bookData, setBookData] = useState<Type_book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!apiKey) {
          throw new Error('API key is not set');
        }

        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&key=${apiKey}`,
        );
        setBookData(response.data.items || []);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;
          if (status === 403) {
            console.error(
              'Accès refusé. Vérifiez votre clé API et les autorisations.',
            );
          } else {
            console.error('Erreur lors de la requête: ', error.message);
          }
        } else {
          console.error('Erreur non Axios: ', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiKey, formattedQuery]);
  return {bookData, isLoading};
}
