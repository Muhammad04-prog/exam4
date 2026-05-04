import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import bgImage from '../../assets/images/izumrudny.png';

export default function CallToAction() {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        py: { xs: 8, md: 12 }, 
        my: { xs: 6, md: 10 },
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, textTransform: 'uppercase', lineHeight: 1.4 }}>
          СПЕШИТЕ ЗАБРОНИРОВАТЬ ДОМ <br />
          В КОТТЕДЖНОМ ПОСЕЛКЕ <Box component="span" sx={{ color: '#F2A359' }}>ИЗУМРУДНЫЙ VILLAGE</Box>
        </Typography>
        <Box sx={{ width: '100%', maxWidth: '600px', height: '1px', bgcolor: 'rgba(255,255,255,0.3)', mx: 'auto', mb: 3 }} />
        <Typography sx={{ fontSize: '1.1rem', mb: 5 }}>
          Количество свободных участков: <Box component="span" sx={{ color: '#F2A359', fontWeight: 'bold' }}>12</Box>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', gap: 3 }}>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#F2A359', 
              color: '#fff', 
              '&:hover': { bgcolor: '#e0964d' },
              textTransform: 'uppercase',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              boxShadow: 'none'
            }}
          >
            Связаться с менеджером
          </Button>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: 'rgba(255,255,255,0.6)', 
              color: '#000', 
              '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
              textTransform: 'uppercase',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              borderRadius: 0,
              boxShadow: 'none'
            }}
          >
            Оставить заявку
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
