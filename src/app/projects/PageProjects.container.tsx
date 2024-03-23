'use client'
import React, {useEffect, useState} from 'react'
import {Type_Project} from '../api/projects/types'
import {deleteProject, getProjects} from '../api/projects/services'
import {useSession} from 'next-auth/react'
import PageProjectsComponent from './PageProjects.component'
import {Session} from 'next-auth'
import Loading from '@/components/loading/Loading'
import {notifySuccess} from '@/utils/constants'

const PageProjectsContainer = () => {
  const {data: session} = useSession()
  const [data, setData] = useState<Type_Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true) // Ajout de l'état isLoading

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)
      if (session?.backendTokens?.accessToken) {
        const {data: projects, error} = await getProjects(
          session.backendTokens.accessToken,
        )
        if (error) {
          setError(error)
          setIsLoading(false)
        } else {
          setData(projects || [])
          setError(null)
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [session])

  const updateProjects = (project: Type_Project) => {
    const index = data.map(r => r.id).indexOf(project.id)
    const newData = [...data]
    newData[index] = project
    setData(newData)
  }
  const removeProject = async (id: number) => {
    session && (await deleteProject(id, session.backendTokens.accessToken))
    notifySuccess('Project has been deleted successfully')
    setData(data.filter((project: Type_Project): boolean => project.id != id))
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PageProjectsComponent
          setData={setData}
          projects={data}
          session={session as Session}
          updateProjects={updateProjects}
          removeProject={removeProject}
        />
      )}
    </>
  )
}

export default PageProjectsContainer
