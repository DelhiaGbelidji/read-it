import {backendUrl} from '@/utils/constants'
import {Type_CreateManuscript} from './types'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export const createManuscript = async (
  data: Type_CreateManuscript,
) => {
    const session = await getServerSession(authOptions);
  try {
    const res = await fetch(backendUrl + '/manuscripts/create', {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        file_url: data.file_url,
        project_id: data.project_id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.backendTokens.accessToken}`,
      },
    })

    if (!res.ok) {
      return {error: res.statusText}
    }

    const response = await res.json()
    return {response}
  } catch (error) {
    return {error: 'An error occurred.'}
  }
}
