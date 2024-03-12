'use client'
import React, {useEffect, useState} from 'react'
import {Type_Project} from '../api/projects/types'
import {getProjects} from '../api/projects/route'
import {useSession} from 'next-auth/react'
import PageProjectsComponent from './PageProjects.component'
import {Session} from 'next-auth'
import {Alert, CircularProgress, Stack, Typography} from '@mui/material'
import {COLORS} from '@/utils/theme'
import Loading from '@/components/loading/Loading'

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PageProjectsComponent
          setData={setData}
          projects={data}
          session={session as Session}
        />
      )}
    </>
  )
}

export default PageProjectsContainer
