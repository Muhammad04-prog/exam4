import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from "framer-motion";
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';
import p3 from '../../assets/images/p3.png';

export default function PopularProjects() {
  const projects = [
    { id: 1, img: p1, title: 'Таунхаус 130 кв.м.', type: 'Визуализация' },
    { id: 2, img: p2, title: 'Проект WIN10', type: 'Визуализация' },
    { id: 3, img: p3, title: 'Проект WIN16', type: 'Визуализация' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
            <Box component="span" sx={{ color: '#F2A359' }}>ПОПУЛЯРНЫЕ </Box>
            <Box component="span" sx={{ color: '#000' }}>ПРОЕКТЫ</Box>
          </Typography>
        </motion.div>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton sx={{ border: '1px solid #ccc', borderRadius: '50%', "&:hover": { bgcolor: "#F2A359", color: "white", borderColor: "#F2A359" } }}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton sx={{ border: '1px solid #ccc', borderRadius: '50%', "&:hover": { bgcolor: "#F2A359", color: "white", borderColor: "#F2A359" } }}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid xs={12} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Box sx={{ overflow: 'hidden' }}>
                <Box 
                  component={motion.img} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.img} 
                  alt={project.title} 
                  sx={{ width: '100%', height: {xs: '250px', md: '350px'}, objectFit: 'cover', mb: 2, cursor: 'pointer' }} 
                />
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                {project.type}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
