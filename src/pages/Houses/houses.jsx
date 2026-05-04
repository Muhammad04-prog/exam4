import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box, Container, Typography, Grid, Button, Stack, 
  Breadcrumbs, Link as MuiLink, Divider, Pagination 
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import heroBg from "../../assets/images/Rectangle 214.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import SalesOffice from '../../components/SalesOffice/SalesOffice';
import CallToAction from '../../components/CallToAction/CallToAction';

const FilterTab = ({ label, active, onClick }) => (
  <Button
    variant={active ? "contained" : "outlined"}
    onClick={onClick}
    sx={{
      borderRadius: 0,
      px: 4, py: 1,
      textTransform: "none",
      fontWeight: 700,
      fontSize: "14px",
      border: "1px solid #F2A359",
      bgcolor: active ? "#F2A359" : "transparent",
      color: active ? "white" : "#333",
      "&:hover": {
        bgcolor: active ? "#d88f4a" : "rgba(242, 163, 89, 0.1)",
        borderColor: "#F2A359",
      }
    }}
  >
    {label}
  </Button>
);

const HouseCard = ({ house }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4 }}
  >
    <Box sx={{ 
      bgcolor: 'white', 
      border: '1px solid #F2A35922', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      '&:hover img': { transform: 'scale(1.08)' }
    }}>
      <Box sx={{ position: 'relative', pt: '65%', overflow: 'hidden' }}>
        <Box 
          component="img"
          src={house.image} 
          alt={house.name} 
          sx={{ 
            position: 'absolute', top: 0, left: 0, 
            width: '100%', height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }} 
        />
      </Box>
      <Box sx={{ p: 4, flex: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '18px' }}>{house.name}</Typography>
          <Typography variant="subtitle1" sx={{ color: '#F2A359', fontWeight: 800 }}>{house.price.toLocaleString()} Р</Typography>
        </Stack>
        
        <Stack spacing={2} mb={4}>
          {[
            { icon: <HomeOutlinedIcon />, text: `Площадь дома - ${house.area}` },
            { icon: <GridOnOutlinedIcon />, text: `Площадь участка - ${house.land}` },
            { icon: <AssignmentOutlinedIcon />, text: `Тип участка - ${house.tech}` }
          ].map((item, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {React.cloneElement(item.icon, { sx: { color: '#F2A359', fontSize: 24 } })}
              <Typography variant="body2" sx={{ color: '#333', fontSize: '13px', fontWeight: 500 }}>{item.text}</Typography>
            </Box>
          ))}
        </Stack>

        <Button
          fullWidth
          component={Link}
          to={`/info/${house.id}`}
          variant="contained"
          sx={{
            bgcolor: "#F2A359",
            color: "white",
            borderRadius: 0,
            py: 1.5,
            fontWeight: 700,
            boxShadow: "none",
            "&:hover": { bgcolor: "#d88f4a", boxShadow: "none" }
          }}
        >
          Подробнее о доме
        </Button>
      </Box>
    </Box>
  </motion.div>
);

import Loading from '../../components/Loader/Loader';

export default function Houses() {
  const [houses, setHouses] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const perPage = 6;

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get('/db.json');
        const all = [
          ...(data.oneStoryHouses || []).map(h => ({ ...h, id: `one-${h.id}`, type: 'one' })),
          ...(data.twoStoryHouses || []).map(h => ({ ...h, id: `two-${h.id}`, type: 'two' })),
          ...(data.townhouses || []).map(h => ({ ...h, id: `town-${h.id}`, type: 'town' }))
        ];
        setHouses(all);
        setFiltered(all);
      } catch (e) {
        console.error("Failed to load houses:", e);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let list = houses;
    if (activeTab !== 'all') {
       list = houses.filter(h => h.type === activeTab);
    }
    setFiltered(list);
    setPage(1);
  }, [activeTab, houses]);

  const onPageChange = (e, val) => {
    setPage(val);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  if (loading) return <Loading />;

  return (
    <Box sx={{ bgcolor: '#fafafa', pb: 10 }}>
      <Box sx={{
          height: '400px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: '32px', md: '56px' }, fontWeight: 900, mb: 2 }}>
              КАТАЛОГ ДОМОВ
            </Typography>
            <Breadcrumbs sx={{ color: 'white' }}>
              <MuiLink component={Link} to="/" underline="hover" color="inherit">Главная</MuiLink>
              <Typography color="inherit" sx={{ fontWeight: 700 }}>Все дома</Typography>
            </Breadcrumbs>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          mb={6} 
          sx={{ border: '1px solid #F2A359', display: 'inline-flex' }}
        >
          {[
            { id: 'all', label: 'Все дома' },
            { id: 'one', label: 'Одноэтажные' },
            { id: 'two', label: 'Двухэтажные' },
            { id: 'town', label: 'Таунхаусы' }
          ].map(tab => (
            <FilterTab 
              key={tab.id}
              label={tab.label} 
              active={activeTab === tab.id} 
              onClick={() => setActiveTab(tab.id)} 
            />
          ))}
        </Stack>

        <AnimatePresence mode='wait'>
          <Grid container spacing={4} sx={{ mb: 6 }} key={activeTab + page}>
            {paginated.map((house) => (
              <Grid xs={12} sm={6} md={4} key={house.id}>
                <HouseCard house={house} />
              </Grid>
            ))}
          </Grid>
        </AnimatePresence>

        {filtered.length > perPage && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination 
              count={Math.ceil(filtered.length / perPage)} 
              page={page} 
              onChange={onPageChange}
              sx={{
                '& .MuiPaginationItem-root': {
                  borderRadius: 0,
                  '&.Mui-selected': {
                    bgcolor: '#F2A359',
                    color: 'white',
                    '&:hover': { bgcolor: '#d88f4a' }
                  }
                }
              }}
            />
          </Box>
        )}
      </Container>
      
      <CallToAction />
      <SalesOffice />
    </Box>
  );
}