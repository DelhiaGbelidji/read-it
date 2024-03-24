import {GetServerSideProps} from 'next';
import {getProjectById} from '@/app/api/projects/route';
import {Type_Project} from '@/app/api/projects/types';
import Manuscript from './components/Manuscript';

type Type_Props_DashboardPage = {
  project: Type_Project;
};
const DashboardPage = ({project}: Type_Props_DashboardPage) => {
  return (
    <>
      <div>
        <Manuscript project={project} />
      </div>
    </>
  );
};

type Type_Params = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({params}: Type_Params) => {
  const id = params?.id;
  const project = await getProjectById(Number(id));

  return {props: {project}};
};

export default DashboardPage;
