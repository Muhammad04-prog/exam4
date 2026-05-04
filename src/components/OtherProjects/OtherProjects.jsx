import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import imgIQ from '../../assets/images/iq-club.png';
import imgZimnaya from '../../assets/images/zimnaya-gorka.png';

export default function OtherProjects({ customProjects }) {
  const defaultProjects = [
    { 
      id: 1, 
      img: imgIQ, 
      title: 'IQ CLUB', 
      locationPrefix: 'Начало строительства - ',
      locationHighlight: 'I квартал 2024 года'
    },
    { 
      id: 2, 
      img: imgZimnaya, 
      title: 'ДОМА В ЗИМНЕЙ ГОРКЕ', 
      locationPrefix: '10 минут от Казанского аэропорта. ',
      locationHighlight: 'Все дома сданы'
    },
  ];

  const projects = customProjects || defaultProjects;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 6 }}>
        ДРУГИЕ <Box component="span" sx={{ color: '#F2A359' }}>ПРОЕКТЫ</Box>
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid xs={12} md={6} key={project.id}>
            <Box>
              <Box component="img" src={project.img} alt={project.title} sx={{ width: '100%', height: {xs: '250px', md: '350px'}, objectFit: 'cover', mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, textTransform: 'uppercase' }}>
                {project.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PlaceOutlinedIcon sx={{ color: '#F2A359', fontSize: 18, mr: 0.5, mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  {project.locationPrefix}
                  {project.locationHighlight && (
                    <Box component="span" sx={{ color: '#F2A359' }}>{project.locationHighlight}</Box>
                  )}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
