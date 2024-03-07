'use client'
import React, { Fragment } from 'react'
import { useState } from 'react';
import { Container, Typography, useMediaQuery} from '@mui/material'
import SearchBar from '@/components/searchbar/SearchBar'
import Card from '@/components/card/Card'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {Styled_IconButton} from '@/components/buttons/IconButton.style';

const Projects = () => {
const isMobile = useMediaQuery('(max-width:600px)')
const spacing = isMobile ? 2 : 4
const [searchTerm, setSearchTerm] = useState('');
const [projects, setProjects] = useState([
    { title: 'Livre 1' },
    { title: 'Bouquin 2' },
    { title: 'Papier 3' }]);

    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };
    
    
    return (
        <Fragment>
            <Container
            sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: isMobile ? 16 : 20,
                textAlign: isMobile ? 'center' : 'left',
            }}
            >
                <Typography
                sx={{
                    mt: spacing, 
                    mb: spacing,
                    fontSize: isMobile ? 16 : 25,
                    fontWeight: 'bold',
                    textAlign: isMobile ? 'center' : 'left'}}
                >
                    My Projects
                </Typography>
                <SearchBar onSearchChange={handleSearchChange} />
                <Styled_IconButton
                    size='large'
                    aria-haspopup='true'
                    onClick={() => {}}
                    color='inherit'>
                    <AddCircleIcon />
                </Styled_IconButton>
            </Container>
            <Container sx={{ display: 'flex',gap: spacing, mt:'50px' }}>
            {filteredProjects.map((project, index) => (
            <Card
                key={index}
                title={project.title}
            />
            ))}
            </Container>
        </Fragment>
    )
}

export default Projects