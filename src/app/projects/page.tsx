'use client'
import React, {useEffect, useState} from 'react'
import {Type_Project} from '../api/projects/types'
import {getProjects} from '../api/projects/route'
import {useSession} from 'next-auth/react'
import PageProjectComponent from './PageProjects.component'

const ProjectsPage = () => {
  const {data: session} = useSession()
  const [data, setData] = useState<Type_Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [openFormDialog, setOpenFormDialog] = useState(false)

  const handleOpenFormDialog = () => {
    setOpenFormDialog(true)
  }

  const handleCloseFormDialog = () => {
    setOpenFormDialog(false)
  }
 useEffect(() => {
    const fetchProjects = async () => {
      if (session?.backendTokens?.accessToken) {
        const {data: projects, error} = await getProjects(
          session.backendTokens.accessToken,
        )
        if (error) {
          setError(error)
        } else if (projects) {
          setData(projects)
          setError(null)
        }
      }
    }

    fetchProjects()
  }, [session])
    
  return  (<><PageProjectComponent projects={data} error={error} />      <Modal open={openFormDialog} handleClose={handleCloseFormDialog}>
        <CreateProjectForm />
      </Modal></>
  )
 

}

export default ProjectsPage
