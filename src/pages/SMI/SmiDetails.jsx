import React from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


import imgMain1 from '../../assets/images/keys.png';
import imgMain2 from '../../assets/images/unique-arch.png';
import imgSide1 from '../../assets/images/about-house.png';
import imgSide2 from '../../assets/images/p2.png';
import imgSide3 from '../../assets/images/p1.png';
const SmiDetails = () => {
  const { id } = useParams();

  const otherNews = [
    {
      id: 2,
      image: imgSide1,
      title: 'На рынке новый тренд – свой дом в черте города',
      date: '11.06.2023',
    },
    {
      id: 3,
      image: imgSide2,
      title: 'На пути к расцвету субурбии: что ждет рынок ИЖС в 2021 году?',
      date: '11.06.2023',
    },
    {
      id: 4,
      image: imgSide3,
      title: 'Жилье для счастливой жизни: успех кроется в мелочах',
      date: '11.06.2023',
    }
  ];

  return (
    <Box sx={{ bgcolor: 'white', pb: 10 }}>
      <Container maxWidth="lg" sx={{ pt: 6, px: { xs: 2, md: 8, lg: 12 } }}>        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          <Box component="span" sx={{ color: '#F2A359' }}>СМИ</Box> О НАС
        </Typography>
        <Grid container spacing={6}>
          <Grid xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Link to="/smi" style={{ textDecoration: 'none', color: '#F2A359', display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
                <ArrowBackIosNewIcon sx={{ fontSize: '0.8rem', mr: 1 }} /> Назад в СМИ
              </Link>
            </Box>
            <Box sx={{ border: '1px solid #f0e6dd', p: { xs: 2, md: 4 }, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography sx={{ color: '#888', display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
                  <AccessTimeIcon sx={{ fontSize: '1.1rem', mr: 1, color: '#F2A359' }} /> 19.05.2021
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#333' }}>
                  БИЗНЕС<Box component="span" sx={{ color: '#F2A359' }}>ONLINE</Box>
                </Typography>
              </Box>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#333' }}>
                Где лежат ключи от «рая»?
              </Typography>
              <Typography sx={{ mb: 4, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой. Так где же находятся эти «райские» места, где комфорт и безопасность соседствуют с респектабельностью, — читайте в нашем обзоре коттеджных поселков Казани.
              </Typography>
              <Box sx={{ width: '100%', mb: 4 }}>
                <img src={imgMain1} alt="Keys" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}>
                «Изумрудный Village»: чужие здесь не ходят
              </Typography>
              <Typography sx={{ mb: 3, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                В Казани практически нет мест с красивым видом на наш тысячелетний город, поэтому каждый, кто приезжает в поселок премиум-класса «Изумрудный Village», изумляется панорамой, которая открывается перед ним. Помимо вида с возвышенности на город, вас встречает обособленная и круглосуточно охраняемая территория с видеонаблюдением на 40 частных домов в 25 минутах от центра татарстанской столицы.
              </Typography>
              <Typography sx={{ mb: 3, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Кроме абсолютной безопасности, жители поселка получают эксклюзивный комфорт: теннисный корт, многофункциональную спортивную площадку, тематические детские площадки и «тропу здоровья», где вы на утренней пробежке можно зарядиться энергией на весь день.
              </Typography>
              <Typography sx={{ mb: 4, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Расположение: в Приволжском районе Казани, по соседству с ЖК «Изумрудный» и поселком Салмачи.
              </Typography>
              <Box sx={{ width: '100%', mb: 4 }}>
                <img src={imgMain2} alt="House" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
              </Box>
              <Typography sx={{ mb: 2, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                <b>Застройщик:</b> компания WIN DOM.
              </Typography>
              <Typography sx={{ mb: 3, color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                <b>Особенности:</b> Асфальтированная дорога до поселка и внутри него, централизованное электро-, водо-, газоснабжение, переливной индивидуальный септик 2 линии по три кольца, интернет, телефония 4G. Двухэтажные дома из керамического кирпича с базальтовым утеплителем и стиле современной классики площадью от 100 «квадратов» строятся с учетом пожеланий будущих владельцев.
              </Typography>
              <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>
                <b>Чем привлекает:</b> Полная предчистовая отделка под ремонт делает процесс новоселья легким и приятным. В домах установлена система отопления с теплыми полами, радиаторами и газовым котлом, выполнена стяжка пола и штукатурка стен под обои. Останется только постелить ламинат или плитку, поклеить обои и натянуть потолок. Обитатели поселка смогут сами участвовать в благоустройстве территории и контролировать все расходы — застройщик поможет организовать собственное ТСЖ, которое займется вопросами уборки, поддержания порядка и оплаты коммунальных платежей.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={4}>
            <Box sx={{ mb: 4, mt: { xs: 0, md: '45px' } }}>
              <Typography 
                variant="h6" 
                sx={{ textTransform: 'uppercase', mb: 3, fontWeight: 'bold' }}
              >
                ДРУГИЕ <Box component="span" sx={{ color: '#F2A359' }}>НОВОСТИ</Box>
              </Typography>              
              {otherNews.map((news) => (
                <Box 
                  key={news.id} 
                  component={Link}
                  to={`/smi/${news.id}`}
                  sx={{ 
                    display: 'block',
                    border: '1px solid #f0e6dd', 
                    mb: 3,
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                    }
                  }}
                >
                  <Box sx={{ width: '100%', height: '180px' }}>
                    <img src={news.image} alt={news.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{ p: 2 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 2, fontSize: '0.95rem', color: '#333', lineHeight: 1.4 }}>
                      {news.title}
                    </Typography>
                    <Typography sx={{ color: '#888', display: 'flex', alignItems: 'center', fontSize: '0.8rem' }}>
                      <AccessTimeIcon sx={{ fontSize: '1rem', mr: 0.5, color: '#F2A359' }} /> {news.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SmiDetails;