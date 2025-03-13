import {BACKEND_URL} from '@/utils/constants';

import {Type_CreateManuscript} from './types';

export const createManuscript = async (
  data: Type_CreateManuscript,
  token: string,
) => {
  try {
    const res = await fetch(BACKEND_URL + '/manuscripts/create', {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        file_url: data.file_url,
        project_id: data.project_id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {error: res.statusText};
    }

    const response = await res.json();
    return {response};
  } catch (error) {
    return {error: 'An error occurred.'};
  }
};
