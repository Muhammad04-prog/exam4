import React from 'react';
import { Box, Container, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import layout1 from '../../assets/images/Rectangle 195.png';
import layout2 from '../../assets/images/Rectangle 196.png';

export default function TownhouseLayouts() {
  const features = [
    'Гостиная',
    '2 спальных комнаты',
    '3 ванные комнаты',
    '1 комната свободной планировки',
    'Детская комната'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 6 }}>
        ПЛАНИРОВКИ <Box component="span" sx={{ color: '#F2A359' }}>ТАУНХАУСОВ</Box>
      </Typography>
      <Grid container spacing={6} sx={{ alignItems: "flex-start" }}>
        <Grid xs={12} md={5}>
          <Typography sx={{ mb: 3, fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.5, color: '#111' }}>
            Таунхаусы в коттеджном поселке<br/>
            Изумрудный Village представлены<br/>
            в двух вариантах планировки.
          </Typography>
          <Typography sx={{ mb: 5, fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.5, color: '#111' }}>
            В настоящий момент для продажи доступны<br/>
            площадью в 150 м2
          </Typography>
          
          <Typography sx={{ fontWeight: 700, mb: 3, fontSize: '0.85rem', textTransform: 'uppercase', color: '#000' }}>
            КАЖДЫЙ ТАУНХАУС ВКЛЮЧАЕТ В СЕБЯ:
          </Typography>

          <List sx={{ mb: 6 }}>
            {features.map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                <ListItemIcon sx={{ minWidth: '36px' }}>
                  <CheckIcon sx={{ color: '#F2A359', fontSize: 20, strokeWidth: 1, stroke: '#F2A359' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ fontSize: '1.05rem', fontWeight: 400, color: '#111' }} 
                />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="outlined" 
              sx={{ 
                flex: 1, 
                py: 2, 
                color: '#000', 
                borderColor: 'rgba(242, 163, 89, 0.5)',
                borderWidth: '1px',
                borderRadius: 0,
                textTransform: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.4,
                '&:hover': { borderColor: '#F2A359', bgcolor: 'transparent', borderWidth: '1px' }
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#000' }}>Первый этаж</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#555' }}>75 м2</Typography>
            </Button>
            <Button 
              variant="contained" 
              sx={{ 
                flex: 1, 
                py: 2, 
                bgcolor: '#F2A359', 
                color: '#fff', 
                borderRadius: 0,
                '&:hover': { bgcolor: '#e0964d' },
                textTransform: 'none',
                display: 'flex',
                flexDirection: 'column',
                lineHeight: 1.4,
                boxShadow: 'none'
              }}
            >
              <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Второй этаж</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: '#fff' }}>75 м2</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Box component="img" src={layout1} alt="Layout 1" sx={{ width: '48%', height: 'auto', objectFit: 'contain' }} />
            <Box component="img" src={layout2} alt="Layout 2" sx={{ width: '48%', height: 'auto', objectFit: 'contain', opacity: 0.5 }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}