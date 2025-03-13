import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Type_book } from '../types';

type BookSearchResult = {
  bookData: Type_book[];
  isLoading: boolean;
  error: string | null;
};

export default function useBookSearch(
  apiKey: string,
  query: string,
): BookSearchResult {
  const [bookData, setBookData] = useState<Type_book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = useCallback(async () => {
    if (!apiKey || !query) {
      setError('API key or query is missing');
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const formattedQuery = encodeURIComponent(query);
      const response = await axios.get<{ items?: Type_book[] }>(
        `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&key=${apiKey}&maxResults=10`,
        {
          timeout: 10000, // 10 seconds timeout
          headers: {
            'Accept': 'application/json',
          },
        }
      );

      setBookData(response.data.items || []);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 403) {
          setError('Accès refusé. Vérifiez votre clé API et les autorisations.');
        } else if (status === 429) {
          setError('Trop de requêtes. Veuillez réessayer plus tard.');
        } else if (error.code === 'ECONNABORTED') {
          setError('La requête a pris trop de temps. Veuillez réessayer.');
        } else {
          setError(`Erreur lors de la requête: ${error.message}`);
        }
      } else {
        setError('Une erreur inattendue est survenue.');
      }
      setBookData([]);
    } finally {
      setIsLoading(false);
    }
  }, [apiKey, query]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return { bookData, isLoading, error };
}
