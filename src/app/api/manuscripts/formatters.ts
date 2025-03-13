import {Type_Manuscript, Type_api_manuscript} from './types';

export const formatterIndexManuscript = (
  manuscript: Type_api_manuscript,
): Type_Manuscript => {
  return {
    id: manuscript.id,
    title: manuscript.title,
    file_url: manuscript.file_url,
    project_id: manuscript.project_id,
  };
};
