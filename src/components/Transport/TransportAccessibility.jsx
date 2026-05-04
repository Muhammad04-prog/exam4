import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';

export default function TransportAccessibility({
  projectName,
  description1,
  description2,
  stats = [],
  distances = [],
  mapImage,
  mapAlt
}) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 5 }}>
        <Box component="span" sx={{ color: '#333' }}>ТРАНСПОРТНАЯ </Box>
        <Box component="span" sx={{ color: '#F2A359', fontWeight: 400 }}>ДОСТУПНОСТЬ</Box>
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid xs={12} md={6}>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            <Box component="span" sx={{ color: '#F2A359', fontWeight: 'bold' }}>{projectName} </Box>
            {description1}
          </Typography>
        </Grid>
        <Grid xs={12} md={6}>
          <Typography sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#333' }}>
            {description2}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mb: 6, justifyContent: "center" }}>
        {stats.map((stat, index) => (
          <Grid xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: 'center', px: 2 }}>
              <Typography sx={{ color: '#F2A359', fontSize: { xs: '3rem', md: '4rem' }, fontWeight: 400, lineHeight: 1, borderBottom: '2px solid #eee', pb: 2, mb: 2}}>
                {stat.time}
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: '#333', fontWeight: 500 }}>
                {stat.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} sx={{ mb: 8, justifyContent: "center" }}>
        {distances.map((dist, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee', borderRadius: '2px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', bgcolor: '#fff'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#F2A359', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 'bold'}}>{index + 1}</Box>
                <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#333' }}>{dist.name}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pl: '32px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#ccc"/>
                </svg>
                <Typography sx={{ fontSize: '0.85rem', color: '#555', fontWeight: 500 }}>{dist.time}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ position: 'relative', width: '100%', borderRadius: '4px', overflow: 'hidden' }}>
        {mapImage ? (
          <img src={mapImage} alt="Карта" style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
        ) : (
          <Box sx={{ width: '100%', height: '400px', bgcolor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#888' }}>Карта не загружена</Typography>
          </Box>
        )}
        <Box sx={{ position: 'absolute', bottom: { xs: 20, md: 40 }, left: '50%', transform: 'translateX(-50%)' }}>
          <Button variant="contained" sx={{ bgcolor: 'white', color: '#333', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, '&:hover': { bgcolor: '#f9f9f9' }}}>
            Построить маршрут
          </Button>
        </Box>
      </Box>
    </Container>
  );
}