import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Box, Container, Typography, Grid, Button, Stack, 
  Breadcrumbs, Link as MuiLink, Divider
} from "@mui/material";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import mapImg from "../../assets/images/Снимок экрана 2024-02-07 в 12.42 1.png";

const DetailItem = ({ title, items, icon }) => (
  <Box component={motion.div}
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    sx={{ mb: 6 }}
  >
    <Stack direction="row" spacing={2} alignItems="center" mb={3}>
      {icon}
      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '18px', textTransform: 'uppercase' }}>
        {title}
      </Typography>
    </Stack>
    <Stack spacing={1.5}>
      {items.map((text, i) => (
        <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
          <CheckCircleIcon sx={{ color: '#F2A359', fontSize: 18, mt: 0.3 }} />
          <Typography variant="body2" sx={{ color: '#333', fontSize: '14px', lineHeight: 1.6 }}>
            {text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </Box>
);

import Loading from '../../components/Loader/Loader';

export default function InfoHouse() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/db.json');
        const all = [
          ...(data.oneStoryHouses || []).map(h => ({ ...h, id: `one-${h.id}` })),
          ...(data.twoStoryHouses || []).map(h => ({ ...h, id: `two-${h.id}` })),
          ...(data.townhouses || []).map(h => ({ ...h, id: `town-${h.id}` }))
        ];
        
        const match = all.find(h => h.id === id);
        setHouse(match || null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <Loading />;
  if (!house) return <Box sx={{ py: 20, textAlign: 'center' }}>Дом не найден</Box>;

  return (
    <Box sx={{ bgcolor: '#fafafa', pb: 10 }}>
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #eee', py: 2, mb: 6 }}>
        <Container maxWidth="lg">
          <Breadcrumbs sx={{ fontSize: '13px' }}>
            <MuiLink component={Link} to="/" underline="hover" color="inherit">Главная</MuiLink>
            <MuiLink component={Link} to="/houses" underline="hover" color="inherit">Дома</MuiLink>
            <Typography color="text.primary" sx={{ fontSize: '13px', fontWeight: 600 }}>{house.name}</Typography>
          </Breadcrumbs>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6} mb={8}>
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
              <Box className="house-gallery">
                <Swiper
                  spaceBetween={10}
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs]}
                  style={{ height: '400px', width: '100%', borderRadius: 4 }}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <SwiperSlide key={n}>
                      <img src={house.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  watchSlidesProgress
                  modules={[Navigation, Thumbs]}
                  style={{ marginTop: '10px', height: '80px' }}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <SwiperSlide key={n} style={{ cursor: 'pointer' }}>
                      <img src={house.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, borderRadius: 2 }} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, fontSize: '32px' }}>{house.name}</Typography>
              <Typography variant="h4" sx={{ color: '#F2A359', fontWeight: 900, mb: 4 }}>{house.price.toLocaleString()} Р</Typography>
              
              <Divider sx={{ mb: 4 }} />
              
              <Stack spacing={3} mb={5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <HomeOutlinedIcon sx={{ color: '#F2A359', fontSize: 28 }} />
                  <Typography sx={{ fontWeight: 600 }}>Площадь дома: {house.area}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <GridOnOutlinedIcon sx={{ color: '#F2A359', fontSize: 28 }} />
                  <Typography sx={{ fontWeight: 600 }}>Площадь участка: {house.land}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AssignmentOutlinedIcon sx={{ color: '#F2A359', fontSize: 28 }} />
                  <Typography sx={{ fontWeight: 600 }}>Тип участка: {house.tech}</Typography>
                </Box>
              </Stack>

              <Button 
                fullWidth 
                variant="contained" 
                sx={{ 
                  bgcolor: '#F2A359', 
                  py: 2, 
                  fontWeight: 700, 
                  borderRadius: 0,
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#d88f4a' }
                }}
              >
                ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        <Grid container spacing={8}>
          <Grid item xs={12} md={8}>
            <DetailItem 
              title="ТЕХНОЛОГИИ И МАТЕРИАЛЫ" 
              icon={<BusinessOutlinedIcon sx={{ color: '#F2A359' }} />}
              items={[
                "Фундамент — монолитный ростверк на буронабивных сваях",
                "Стены — керамический блок 2.1 НФ + облицовочный кирпич",
                "Кровля — металлочерепица с утеплением 200 мм",
                "Окна — 5-камерный профиль, 3-й стеклопакет"
              ]}
            />
            <DetailItem 
              title="ИНЖЕНЕРНЫЕ КОММУНИКАЦИИ" 
              icon={<DoorBackOutlinedIcon sx={{ color: '#F2A359' }} />}
              items={[
                "Газ — заведен в дом, установлен котел",
                "Электричество — разводка по дому выполнена",
                "Водоснабжение — централизованное или скважина",
                "Канализация — септик 3 кольца"
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ p: 4, bgcolor: 'white', border: '1px solid #eee', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>РАСПОЛОЖЕНИЕ</Typography>
              <Box 
                component="img" 
                src={mapImg} 
                sx={{ width: '100%', height: 'auto', display: 'block', mb: 2 }} 
              />
              <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                Дом расположен в экологически чистом районе с развитой инфраструктурой. 
                Удобные подъездные пути и близость к природе.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}