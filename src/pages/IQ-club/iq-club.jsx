import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { motion } from "framer-motion";

import imgMain from '../../assets/images/Rectangle 37 (3).png'; 
import imgOverlap1 from '../../assets/images/Rectangle 189 (1).png';
import imgOverlap2 from '../../assets/images/Rectangle 190 (1).png';

const IQHero = () => {
  return (
    <Box sx={{ position: 'relative', height: { xs: '400px', md: '600px' }, width: '100%', bgcolor: '#f5f5f5', overflow: 'hidden' }}>
      <motion.img 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src={imgMain} 
        alt="IQ Club" 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <Box sx={{position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%',background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',p: { xs: 3, md: 6, lg: 10 }}}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography sx={{ color: 'white',fontSize: { xs: '1rem', md: '1.25rem' },mb: 1 }}>Современный таунхаус-клуб в Казани</Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' },lineHeight: 1,textTransform: 'uppercase'}}>
            <Box component="span" sx={{ color: '#F2A359' }}>IQ </Box>
            <Box component="span" sx={{ color: 'white' }}>CLUB</Box>
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

const IQAbout = () => {
  const features = [
    { icon: <DomainOutlinedIcon sx={{ fontSize: 32, color: '#555' }} />, text: 'Комфорт закрытого клуба внутри города' },
    { icon: <GroupsOutlinedIcon sx={{ fontSize: 32, color: '#555' }} />, text: 'Просторная квадратура для жизни большой семьи' },
    { icon: <StorefrontOutlinedIcon sx={{ fontSize: 32, color: '#555' }} />, text: 'Развитая инфраструктура вокруг' },
    { icon: <SecurityOutlinedIcon sx={{ fontSize: 32, color: '#555' }} />, text: 'Закрытая территория с пропускной системой безопасности' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', marginBottom: '48px' }}
      >
        <RadioButtonUncheckedIcon sx={{ color: '#F2A359', mr: 2, fontSize: '1.8rem' }} />
        <Typography variant="h4" component="h2" sx={{ color: '#F2A359', fontWeight: 'bold', textTransform: 'uppercase' }}>
          О ПРОЕКТЕ
        </Typography>
      </motion.div>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box sx={{ position: 'relative', width: '100%', maxWidth: '450px', height: '500px', mx: 'auto'}}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ position: 'absolute',top: '5%',left: '15%',width: '70%',height: '80%',border: '1px solid #F2A359',zIndex: 0}}/>
            </motion.div>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ position: 'absolute',top: '25%',left: 0, width: '55%', height: '75%', zIndex: 1,boxShadow: '0 10px 30px rgba(0,0,0,0.1)',bgcolor: '#eee'}}
            >
              <img src={imgOverlap1} alt="House 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box 
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{ position: 'absolute',top: '15%',right: 0, width: '55%', height: '85%', zIndex: 2,boxShadow: '-10px 10px 30px rgba(0,0,0,0.15)',bgcolor: '#ddd',border: '8px solid white'}}
            >
              <img src={imgOverlap2} alt="House 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography sx={{ mb: 5, fontSize: '1.05rem', lineHeight: 1.6, color: '#333' }}>
              Таунхаус-клуб IQ CLUB - это инновационный жилой комплекс, где все жилые здания представляют собой комфортные таунхаусы. IQClub предлагает жителям уникальную комбинацию преимуществ жилья в частном секторе и удобств общего пользования, таких как парк, детские площадки, зона для барбекю и спортивные площадки.
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {features.map((item, index) => (
                <ListItem 
                  key={index} 
                  component={motion.li}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  sx={{ px: 0, py: 1, alignItems: 'flex-start' }}
                >
                  <ListItemIcon sx={{ minWidth: '60px', mt: 0.5 }}>{item.icon}</ListItemIcon>
                  <ListItemText disableTypography primary={<Typography sx={{ color: '#333', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.4 }}>{item.text}</Typography>} />
                </ListItem>
              ))}
            </List>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};


import PopularProjects from '../../components/PopularProjects/PopularProjects';
import AvailableForPurchase from '../../components/AvailableForPurchase/AvailableForPurchase';
import TownhouseLayouts from '../../components/TownhouseLayouts/TownhouseLayouts';
import CallToAction from '../../components/CallToAction/CallToAction';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import SalesOffice from '../../components/SalesOffice/SalesOffice';
import ProjectPlan from '../../components/ProjectPlan/ProjectPlan';
import TransportAccessibility from '../../components/Transport/TransportAccessibility';
import imgPlaceholder from '../../assets/images/image 6.png';
import img12 from '../../assets/images/Снимок экрана 2024-02-07 в 12.42 1.png';
import ProjectsSlider from '../../components/ProjectsSlider/ProjectsSlider';

export default function IQClub() {
  const transportStats = [
    { time: '15 мин', text: 'до центра города' },
    { time: '5 мин', text: 'до ближайшего парка' },
    { time: '20 мин', text: 'до аэропорта' }
  ];
  const transportDistances = [
    { name: 'Остановка', time: '3 мин' },
    { name: 'Школа', time: '10 мин' },
    { name: 'Торговый центр', time: '12 мин' },
    { name: 'Спортивный комплекс', time: '8 мин' },
  ];

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh' }}>
      <IQHero />
      <IQAbout />
      <ProjectPlan titlePrefix="ПЛАН" titleHighlight="ПОСЁЛКА" image={imgPlaceholder} />
      <TransportAccessibility 
        projectName="IQ CLUB"
        description1="находится в удобном районе с развитой инфраструктурой. Это позволяет сочетать загородное спокойствие с городским комфортом."
        description2="Всё необходимое для жизни большой семьи находится в шаговой доступности или в нескольких минутах езды на автомобиле."
        stats={transportStats}
        distances={transportDistances}
        mapImage={img12} 
      />
      <ProjectsSlider />
      <PopularProjects />
      <AvailableForPurchase />
      <TownhouseLayouts />
      <CallToAction />
      <OtherProjects />
      <SalesOffice />
    </Box>
  );
}