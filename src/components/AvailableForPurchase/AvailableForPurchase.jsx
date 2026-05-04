import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import p1 from '../../assets/images/p1.png';
import p2 from '../../assets/images/p2.png';

export default function AvailableForPurchase() {
  const items = [
    { 
      id: 1, 
      img: p1, 
      title: 'ЧАСТНЫЙ ДОМ НА УЧАСТКЕ', 
      price: '15 500 000 ₽', 
      buttonText: 'Продажи прекращены',
      buttonBg: '#8A6D56',
      buttonColor: '#fff',
    },
    { 
      id: 2, 
      img: p2, 
      title: 'ТАУНХАУС ВТОРОЙ ОЧЕРЕДИ', 
      price: '12 500 000 ₽', 
      buttonText: 'Узнать подробнее',
      buttonBg: '#F2A359',
      buttonColor: '#fff',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 6 }}>
        В НАСТОЯЩЕЕ ВРЕМЯ <Box component="span" sx={{ color: '#F2A359' }}>ДЛЯ ПОКУПКИ</Box> ДОСТУПНЫ:
      </Typography>

      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid xs={12} md={6} key={item.id}>
            <Box>
              <Box component="img" src={item.img} alt={item.title} sx={{ width: '100%', height: {xs: '300px', md: '400px'}, objectFit: 'cover', mb: 3 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 0.5, textTransform: 'uppercase' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Цена от <Box component="span" sx={{ color: '#000', fontWeight: 'bold', fontSize: '1rem' }}>{item.price}</Box>
                  </Typography>
                </Box>
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: item.buttonBg, 
                    color: item.buttonColor, 
                    '&:hover': { bgcolor: item.buttonBg, opacity: 0.9 },
                    textTransform: 'none',
                    fontWeight: 'bold',
                    px: 3,
                    py: 1,
                    borderRadius: 0,
                    boxShadow: 'none'
                  }}
                >
                  {item.buttonText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
