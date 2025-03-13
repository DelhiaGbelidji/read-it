export type Type_api_manuscript = {
  id: number;
  title: string;
  file_url: string;
  project_id: number;
  user_id: number;
  created_at: string;
};

export type Type_CreateManuscript = {
  title: string;
  file_url: string;
  project_id: number;
};

export type Type_Manuscript = {
  id: number;
  title: string;
  file_url: string;
  project_id: number;
};
