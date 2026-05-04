import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Grid, Button, Stack, Breadcrumbs, Link as MuiLink, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import heroBg from "../../assets/images/Rectangle 37 (4).png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import SalesOffice from '../../components/SalesOffice/SalesOffice';
import CallToAction from '../../components/CallToAction/CallToAction';

const FilterTab = ({ label, active }) => (
  <Button
    variant={active ? "contained" : "outlined"}
    sx={{
      borderRadius: "0",
      borderColor: active ? "#F2A359" : "#eee",
      bgcolor: active ? "#F2A359" : "white",
      color: active ? "white" : "#999",
      px: 3,
      py: 1,
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "none",
      "&:hover": {
        bgcolor: active ? "#e0964d" : "#fafafa",
        borderColor: "#F2A359",
      }
    }}
  >
    {label}
  </Button>
);

const HouseCard = ({ house }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <Box sx={{ bgcolor: 'white', border: '1px solid #F2A35922', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
      <Box sx={{ position: 'relative', pt: '65%', overflow: 'hidden' }}>
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={house.image} 
          alt={house.name} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </Box>
      <Box sx={{ p: 4, flex: 1 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '18px' }}>{house.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: '#F2A359', fontWeight: 800, fontSize: '16px' }}>{house.price.toLocaleString()} Р</Typography>
        </Stack>
        <Stack spacing={2} mb={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <HomeOutlinedIcon sx={{ color: '#F2A359', fontSize: 24 }} />
            <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>Площадь дома - {house.area}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <GridOnOutlinedIcon sx={{ color: '#F2A359', fontSize: 24 }} />
            <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>Площадь участка - {house.land}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AssignmentOutlinedIcon sx={{ color: '#F2A359', fontSize: 24 }} />
            <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>Тип участка - {house.tech}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <BusinessOutlinedIcon sx={{ color: '#F2A359', fontSize: 24 }} />
            <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>Количество этажей - {house.floors}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DoorBackOutlinedIcon sx={{ color: '#F2A359', fontSize: 24 }} />
            <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>Количество комнат - {house.rooms}</Typography>
          </Box>
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            component={Link}
            to={`/info/${house.id}`}
            variant="outlined" 
            sx={{px: 5, borderRadius: 0,  borderColor: '#F2A35944',  color: '#111',  fontWeight: 800,  fontSize: '11px', py: 1.2, textTransform: 'none', "&:hover": { borderColor: '#F2A359', bgcolor: 'transparent' }}}
          >
            Детали проекта
          </Button>
        </Box>
      </Box>
    </Box>
  </motion.div>
);

import Loading from '../../components/Loader/Loader';

export default function One() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const { data } = await axios.get('/db.json');
        setHouses((data.oneStoryHouses || []).map(h => ({ ...h, id: `one-${h.id}` })));
      } catch (err) {
        console.error("Error fetching houses:", err);
      } finally {
        setLoading(false);
      }
    };
    getHouses();
  }, []);

  if (loading) return <Loading />;

  return (
    <Box sx={{ bgcolor: 'white' }}>
      <Box sx={{ position: 'relative', height: '500px', width: '100%', overflow: 'hidden' }}>
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src={heroBg} 
          alt="Hero" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center' }}>
          <Container maxWidth="lg">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
               <Typography variant="h3" sx={{ fontWeight: 800, textTransform: "uppercase", color: 'white' }}>
                 ОДНОЭТАЖНЫЕ <Box component="span" sx={{ color: '#F2A359' }}>ДОМА</Box>
               </Typography>
             </motion.div>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 6, mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stack direction="row" spacing={2} mb={4} sx={{ flexWrap: 'wrap', gap: 1 }}>
            <FilterTab label="1 этажные" active />
            <FilterTab label="2 этажные" />
            <FilterTab label="Таунхаусы" />
            <FilterTab label="Bce дома" />
            <FilterTab label="Заявка" />
          </Stack>

          <Breadcrumbs sx={{ mb: 4, fontSize: '14px', color: '#999' }}>
            <MuiLink component={Link} to="/" underline="hover" color="inherit">Главная</MuiLink>
            <MuiLink underline="hover" color="inherit">Дома</MuiLink>
            <Typography color="text.primary" sx={{ fontSize: '14px' }}>Одноэтажные дома</Typography>
          </Breadcrumbs>
          <Divider sx={{ mb: 6 }} />
        </motion.div>

        <AnimatePresence mode='wait'>
          <Grid container spacing={4} sx={{ mb: 6 }} key="one-story-grid">
            {houses.map((house) => (
              <Grid xs={12} sm={6} md={4} key={house.id}>
                <HouseCard house={house} />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>
      </Container>
      <CallToAction/>
      <SalesOffice/>
    </Box>
  );
}