'use client'
import React from 'react'
import { useState } from 'react';
import { Container, Typography, useMediaQuery} from '@mui/material'
import { FaPlusCircle } from "react-icons/fa";
import SearchBar from '@/components/searchbar/SearchBar'
import Card from '@/components/card/Card'



export default function MyProjects() {
const isMobile = useMediaQuery('(max-width:600px)')
const spacing = isMobile ? 2 : 4
const [searchTerm, setSearchTerm] = useState('');
const [projects, setProjects] = useState([
    { imageUrl: '', title: 'Livre 1' },
    { imageUrl: '', title: 'Bouquin 2' },
    { imageUrl: '', title: 'Papier 3' }]);

    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };
    
    
    return (
        <div>
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
                    fontSize: isMobile ? 16 : 20, 
                    textAlign: isMobile ? 'center' : 'left'}}
                >
                    My Projects
                </Typography>
                <SearchBar onSearchChange={handleSearchChange} />
                <FaPlusCircle style={{cursor:'pointer'}} onClick={() => {}} />  
            </Container>
            <Container sx={{ display: 'flex',gap: spacing }}>
            {filteredProjects.map((project, index) => (
            <Card
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
            />
            ))}
            </Container>
        </div>
    )
}
