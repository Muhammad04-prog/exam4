import React from 'react';
import { Box, Container } from '@mui/material';
import imgMain from '../../assets/images/image 3 (2).png';
import MediaItem from './MediaItem';

const mediaData = {
  image: imgMain,
  title: 'Деловая электронная газета «Бизнес Online»',
  text: 'По-прежнему актуально предложение застройщиков \'дом по цене казанской квартиры\' в 20-30 км от границ Казани. Стоимость дома в границах нашего города, конечно будет дороже, но все же имеется возможность значительно улучшить жилищные условия, обменяв квартиру на дом',
  linkText: 'Читать статью'
};

const MediaSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        bgcolor: 'white', 
        py: { xs: 8, md: 8, lg: 8 },
        px: { xs: 3, md: 8, lg: 12 }
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <MediaItem {...mediaData} />
      </Container>
    </Box>
  );
};

export default MediaSection;