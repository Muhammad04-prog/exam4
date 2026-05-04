import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const MediaItem = ({ image, title, text, linkText }) => {
  return (
    <Box 
      sx={{ 
        position: 'relative', 
        minHeight: '680px',
        display: 'flex', 
        alignItems: 'center', 
        overflow: 'hidden', 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        borderRadius: 2,
        '&:hover img': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Media Background"
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '20%' },
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
      /> 
      <Box
        sx={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',
        }}
      /> 
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          p: { xs: 4, md: 7 },
          maxWidth: '512px',
        }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          sx={{ 
            color: '#F2A359', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            mb: 5,
            fontSize: { xs: '2.25rem', md: '3rem' }
          }}
        >
          СМИ О <Box component="span" sx={{ color: '#F2A359' }}>НАС</Box>
        </Typography>
        <Typography 
          variant="h4" 
          component="h3"
          sx={{ 
            color: 'white', 
            fontWeight: 'bold', 
            mb: 3,
            lineHeight: 1.2,
            fontSize: { xs: '1.5rem', md: '1.875rem' }
          }}
        >
          {title}
        </Typography>
        <Typography 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.125rem',
            fontStyle: 'italic', 
            mb: 5,
            lineHeight: 1.625, 
            borderLeft: '2px solid #F2A359', 
            pl: 2
          }}
        >
          "{text}"
        </Typography>
        <Button 
          variant="contained"
          sx={{ 
            bgcolor: '#F2A359', 
            color: 'white', 
            px: 5,
            py: 1.5,
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            borderRadius: 0,
            boxShadow: 'none',
            transition: 'all 0.3s',
            '&:hover': { 
              bgcolor: 'white', 
              color: 'black',
              boxShadow: 'none',
            } 
          }}
        >
          {linkText}
        </Button>
      </Box>
    </Box>
  );
};

export default MediaItem;