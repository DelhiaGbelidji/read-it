import {getProjectById} from '@/app/api/projects/route'
import {Type_Project} from '@/app/api/projects/types'
type Props = {
  params: {id: string}
  project: Type_Project
}

export async function generateMetadata({params}: Props) {
  const id = params.id

  const project = await getProjectById(Number(id))

  console.log(project)
  return project
}

export default function ProjectPage({params, project}: Props) {
  return (
    <>
      <div>Id project: {params.id} </div>
      {/* <div>Id project: {project.name} </div> */}
    </>
  )
}
