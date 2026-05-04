import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function ProjectPlan({ titlePrefix = "ПЛАН", titleHighlight = "ПОСЁЛКА", image }) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 5, gap: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          <Box component="span" sx={{ color: '#333' }}>{titlePrefix} </Box>
          <Box component="span" sx={{ color: '#F2A359', fontWeight: 400 }}>{titleHighlight}</Box>
        </Typography>
        <Box sx={{ flexGrow: 1, height: '1px', bgcolor: '#F2A359', opacity: 0.5 }} />
      </Box>
      <Box sx={{ width: '100%', position: 'relative' }}>
        {image ? (
          <Box 
            component="img" 
            src={image} 
            alt={`${titlePrefix} ${titleHighlight}`} 
            sx={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
          />
        ) : (
          <Box sx={{ width: '100%', height: '500px', bgcolor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc' }}>
            <Typography sx={{ color: '#888' }}>Изображение плана не загружено</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
