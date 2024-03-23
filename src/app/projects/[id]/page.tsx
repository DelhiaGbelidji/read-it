import {getProjectById} from '@/app/api/projects/services'
import {Type_Project} from '@/app/api/projects/types'
import Manuscript from './components/Manuscript'

export type Type_Props_DashboardPage = {
  project: Type_Project
}

export default async function Page({
  params,
  searchParams,
}: {
  params: {slug: string}
  searchParams: {[key: string]: string | string[] | undefined}
}) {
  const id = params?.slug
  const {data, error} = await getProjectById(Number(id))

  error && <p>ERROR</p>
  return <Manuscript project={data} />
}
