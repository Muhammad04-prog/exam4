import React from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import imgIzumrud from '../../assets/images/Rectangle 200.png';
import imgIQ from '../../assets/images/Rectangle 37 (3).png';
import imgZim from '../../assets/images/Rectangle 37 (7).png';
import imgUsadi from '../../assets/images/Rectangle 37 (4).png';
import imgKonstant from '../../assets/images/Rectangle 37 (5).png';

import CallToAction from '../../components/CallToAction/CallToAction';
import SalesOffice from '../../components/SalesOffice/SalesOffice';

const BigProjectCard = ({ image, title, locationPrefix, locationHighlight, description, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box sx={{ position: 'relative', width: '100%', mb: 6, cursor: 'pointer', '&:hover img': { transform: 'scale(1.02)' } }} onClick={onClick}>
        <Box sx={{ width: '100%', height: { xs: '300px', md: '500px' }, overflow: 'hidden' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        </Box>
        <Box 
          sx={{ 
            position: { xs: 'relative', md: 'absolute' }, 
            bottom: 0, 
            left: 0,
            width: { xs: '100%', md: '85%' }, 
            bgcolor: 'white', 
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center' },
            boxShadow: { md: '5px -5px 20px rgba(0,0,0,0.05)' }
          }}
        >
          <Box sx={{ width: { xs: '100%', md: '45%' }, pr: { md: 4 }, borderRight: { md: '1px solid #eee' }, mb: { xs: 2, md: 0 } }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, textTransform: 'uppercase' }}>
              {title.includes(' ') ? (
                <>
                  <Box component="span" sx={{ color: '#F2A359' }}>{title.split(' ')[0]} </Box>
                  {title.split(' ').slice(1).join(' ')}
                </>
              ) : title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOnOutlinedIcon sx={{ color: '#ccc', fontSize: '1.1rem' }} />
              <Typography sx={{ fontSize: '0.85rem', color: '#666' }}>
                {locationPrefix} <Box component="span" sx={{ color: '#F2A359', fontWeight: 600 }}>{locationHighlight}</Box>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '55%' }, pl: { md: 4 } }}>
            <Typography sx={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const SmallProjectCard = ({ image, title, locationPrefix, locationHighlight, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box sx={{ width: '100%', cursor: 'pointer', mb: { xs: 4, md: 0 }, '&:hover img': { transform: 'scale(1.05)' } }} onClick={onClick}>
        <Box sx={{ width: '100%', height: '220px', overflow: 'hidden' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
        </Box>
        <Box sx={{ bgcolor: 'white', p: 2.5, border: '1px solid #eee', borderTop: 'none' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
            <Typography sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.95rem' }}>
               {title}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: '#F2A359', fontWeight: 'bold', textAlign: 'right', pl: 1 }}>
              {locationHighlight}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnOutlinedIcon sx={{ color: '#ccc', fontSize: '1rem' }} />
            <Typography sx={{ fontSize: '0.8rem', color: '#888' }}>
              {locationPrefix}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', pt: 12 }}>
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, textTransform: 'uppercase' }}>
            НАШИ <Box component="span" sx={{ color: '#F2A359' }}>ПРОЕКТЫ</Box>
          </Typography>
          
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 6, fontSize: '0.85rem' }}>
            <Link underline="hover" color="inherit" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
              Главная
            </Link>
            <Typography color="text.primary" sx={{ fontWeight: '600' }}>Все проекты</Typography>
          </Breadcrumbs>
        </motion.div>

        <BigProjectCard image={imgIzumrud} title="ИЗУМРУДНЫЙ VILLAGE" locationPrefix="В 30 минутах от центра Казани." locationHighlight="Дома сданы" description="Коттеджный поселок категории Бизнес. Обособленная охраняемая территория на 40 частных домовладений и 25 таунхаусов в 30 минутах от центра Казани." onClick={() => navigate('/izum')}/>
        <BigProjectCard image={imgIQ} title="IQ CLUB" locationPrefix="Начало строительства -" locationHighlight="I квартал 2024 года" description="Таунхаус-клуб IQ CLUB - это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы." onClick={() => navigate('/iqclub')}/>
        
        <Grid container spacing={4}>
          <Grid xs={12} md={4}>
            <SmallProjectCard index={0} image={imgZim} title="ЗИМНЯЯ ГОРКА" locationPrefix="10 минут от Казанского аэропорта" locationHighlight="Все дома сданы" onClick={() => navigate('/zim')}/>
          </Grid>
          <Grid xs={12} md={4}>
            <SmallProjectCard index={1} image={imgUsadi} title="УСАДЫ VILLAGE" locationPrefix="Премиум класс от партнера" locationHighlight="Дома сданы" onClick={() => navigate('/usadi')}/>
          </Grid>
          <Grid xs={12} md={4}>
            <SmallProjectCard index={2} image={imgKonstant} title="КОНСТАНТИНОВКА" locationPrefix="Вокзал в центре города" locationHighlight="Все дома сданы" onClick={() => navigate('/konstant')}/>
          </Grid>
        </Grid>
      </Container>
      <CallToAction />
      <SalesOffice />
    </Box>
  );
}