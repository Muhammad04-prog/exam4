import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SmiCard = ({ id, image, title, text }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' },border: '1px solid #f8d5b8', mb: 4,bgcolor: 'white',overflow: 'hidden',transition: 'box-shadow 0.3s ease', '&:hover': {boxShadow: '0 10px 30px rgba(0,0,0,0.08)'} }}>
      <Box sx={{ width: { xs: '100%', md: '45%' },height: { xs: '250px', md: 'auto' },minHeight: { md: '300px' },}}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ width: { xs: '100%', md: '55%' },p: { xs: 3, md: 5 },display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'flex-start'}}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2,color: '#333'}}>{title}</Typography>
        <Typography sx={{ color: '#666',mb: 4,lineHeight: 1.6,fontSize: '0.95rem'}}>{text}</Typography>
        <Button variant="outlined" onClick={() => navigate(`/smi/${id}`)} sx={{ color: '#333',borderColor: '#f0e6dd',px: 4,py: 1,textTransform: 'none',fontSize: '0.9rem',borderRadius: 0, '&:hover': {borderColor: '#F2A359',bgcolor: 'rgba(242, 163, 89, 0.04)',color: '#F2A359'}}}>Читать статью</Button>
      </Box>
    </Box>
  );
};

export default SmiCard;