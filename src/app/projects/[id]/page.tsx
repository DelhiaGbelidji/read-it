'use server'
import {authOptions} from '@/app/api/auth/[...nextauth]/route'
import {Type_api_project} from '@/app/api/projects/types'
import {BACKEND_URL} from '@/utils/constants'
import {getServerSession} from 'next-auth/next'

export type Type_params = {
  params: {id: string}
}

export async function generateStaticParams() {
  const session = await getServerSession(authOptions)
  const projects = await fetch(`${BACKEND_URL}/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  }).then(res => res.json())
  return projects.map((project: Type_api_project) => ({
    id: project.id,
  }))
}

async function getProject({params}: Type_params) {
  const session = await getServerSession(authOptions)
  const res = await fetch(`${BACKEND_URL}/projects/${params.id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.backendTokens.accessToken}`,
    },
  })
  const project = await res.json()

  return project
}

export default async function Project({params}: Type_params) {
  const project = await getProject({params})
  return <>{project.id}</>
}
