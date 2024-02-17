import axios from 'axios'
import {useEffect, useState} from 'react'
import {Type_book} from '../types'

type BookSearchResult = {
  bookData: Type_book[]
  isLoading: boolean
}

export default function useBookSearch(
  apiKey: string,
  formattedQuery: string,
): BookSearchResult {
  const [bookData, setBookData] = useState<Type_book[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        if (!apiKey) {
          throw new Error('API key is not set')
        }

        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${formattedQuery}&key=${apiKey}`,
        )
        setBookData(response.data.items || [])
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      // Code de nettoyage si nécessaire
    }
  }, [apiKey, formattedQuery])

  return {bookData, isLoading}
}
