import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import { motion, AnimatePresence } from "framer-motion";

import imgTopBuilding from '../../assets/images/Rectangle 37 (4).png';
import imgBotBuilding from '../../assets/images/Rectangle 37 (2).png';
import imgIgor from '../../assets/images/Rectangle 92.png';
import imgLuiza from '../../assets/images/Rectangle 93.png';
import imgRasul from '../../assets/images/Rectangle 94.png';
import imgDmitry from '../../assets/images/Rectangle 94 (1).png';

import p1 from '../../assets/images/Rectangle 92 (1).png';
import p2 from '../../assets/images/Rectangle 92 (2).png';
import p3 from '../../assets/images/Rectangle 92 (3).png';
import p4 from '../../assets/images/Rectangle 92 (4).png';
import p5 from '../../assets/images/Rectangle 92 (5).png';
import p6 from '../../assets/images/Rectangle 92 (6).png';
import p7 from '../../assets/images/Rectangle 92 (7).png';
import p8 from '../../assets/images/Rectangle 92 (8).png';
import p9 from '../../assets/images/Rectangle 92 (9).png';

const HorizontalCard = ({ img, name, role }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <Box sx={{ display: 'flex', width: '100%', height: '140px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
      <Box sx={{ width: '45%', height: '100%' }}>
        <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ width: '55%', bgcolor: '#F2A359', p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography sx={{ color: 'white', fontWeight: 800, textTransform: 'uppercase', fontSize: '14px', mb: 1, lineHeight: 1.2 }}>
          {name.split(' ').map((word, i) => <React.Fragment key={i}>{word}<br/></React.Fragment>)}
        </Typography>
        <Typography sx={{ color: 'white', fontSize: '11px', lineHeight: 1.2, fontWeight: 500 }}>
          {role}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

const VerticalCard = ({ img, name, role, onEdit, onDelete, onInfo }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <Box sx={{ display: 'flex', marginLeft: '65px', flexDirection: 'column', height: '100%', position: 'relative' }}>
      <Box sx={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          src={img} 
          alt={name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} 
        />
        <Box sx={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 1, zIndex: 10 }}>
          <IconButton size="small" onClick={onInfo} sx={{ bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: '#fff' } }}>
            <InfoIcon fontSize="small" sx={{ color: '#1976d2' }} />
          </IconButton>
          <IconButton size="small" onClick={onEdit} sx={{ bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: '#fff' } }}>
            <EditIcon fontSize="small" sx={{ color: '#9c27b0' }} />
          </IconButton>
          <IconButton size="small" onClick={onDelete} sx={{ bgcolor: 'rgba(255,255,255,0.8)', '&:hover': { bgcolor: '#fff' } }}>
            <DeleteIcon fontSize="small" sx={{ color: '#d32f2f' }} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{bgcolor: 'white', mx: '10%', mt: -5, pt: 2, pb: 2, position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <Typography sx={{ fontWeight: 800, fontSize: '13px', mb: 0.5, color: '#111' }}>{name}</Typography>
        <Typography sx={{ color: '#666', fontSize: '11px', px: 2, lineHeight: 1.3 }}>{role}</Typography>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', mx: 'auto', gap: 1, mt: 2 }}>
        <Button 
          variant="contained" 
          disableElevation
          sx={{ flex: 1, bgcolor: '#F2A359', color: 'white', fontSize: '10px', fontWeight: 'bold', py: 1.2, borderRadius: 0, textTransform: 'none', '&:hover': { bgcolor: '#e0964d' } }}
        >
          Написать
        </Button>
        <Button 
          variant="outlined" 
          sx={{ flex: 1, borderColor: '#e0e0e0', color: '#333', fontSize: '10px', fontWeight: 'bold', py: 1.2, borderRadius: 0, textTransform: 'none', '&:hover': { borderColor: '#ccc', bgcolor: 'transparent' } }}
        >
          Оставить отзыв
        </Button>
      </Box>
    </Box>
  </motion.div>
);

const initialGridMembers = [
  { name: 'Анфиса Давыдова', role: 'Руководитель отдела продаж', img: p1 },
  { name: 'Евгений Кабаков', role: 'Руководитель отдела продаж', img: p2 },
  { name: 'Эльвира Сергеева', role: 'Руководитель отдела продаж', img: p3 },
  { name: 'Игорь Смирнов', role: 'Менеджер по продажам ИЖС', img: p4 },
  { name: 'Иван Иванов', role: 'Менеджер по продажам ИЖС', img: p5 },
  { name: 'Лариса Федотова', role: 'Менеджер по продажам ИЖС', img: p6 },
  { name: 'Алексей Кузин', role: 'Главный инженер', img: p7 },
  { name: 'Николай Елистратов', role: 'Прораб', img: p8 },
  { name: 'Фаниль Саляхиев', role: 'Прораб', img: p9 },
];

export default function Team() {
  const [members, setMembers] = useState(initialGridMembers);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMode, setDialogMode] = useState('add');
  const [currentIndex, setCurrentIndex] = useState(null);
  const [formData, setFormData] = useState({ name: '', role: '', img: p1 });

  const handleOpenAdd = () => {
    setFormData({ name: '', role: '', img: p1 });
    setDialogMode('add');
    setOpenDialog(true);
  };

  const handleOpenEdit = (index) => {
    setFormData(members[index]);
    setCurrentIndex(index);
    setDialogMode('edit');
    setOpenDialog(true);
  };

  const handleOpenInfo = (index) => {
    setFormData(members[index]);
    setDialogMode('info');
    setOpenDialog(true);
  };

  const handleDelete = (index) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  const handleSave = () => {
    if (dialogMode === 'add') {
      setMembers([formData, ...members]);
    } else if (dialogMode === 'edit') {
      const newMembers = [...members];
      newMembers[currentIndex] = formData;
      setMembers(newMembers);
    }
    setOpenDialog(false);
  };

  return (
    <Box sx={{ pt: 12, pb: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" sx={{ fontWeight: 800, textTransform: 'uppercase', mb: 3 }}>
            НАША <Box component="span" sx={{ color: '#F2A359' }}>КОМАНДА</Box>
          </Typography>
        </motion.div>
      </Container>

      <Box component={motion.div}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        sx={{ bgcolor: '#F2A359', py: 2.5, mb: 8, transformOrigin: 'left' }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '18px' }}>
            WIN DOM — это люди, разделяющие красоту и комфорт загородной жизни.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ width: { xs: '100%', md: '60%' }, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
          >
            <Typography sx={{ fontSize: '16px', color: '#444', mb: 5, lineHeight: 1.6, maxWidth: '90%' }}>
              Наши менеджеры помогут разобраться, какой дом подойдет именно вам. Подберут технологию строительства и готовый типовой проект. Или разработают индивидуальное решение по вашему запросу.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box sx={{ flex: 1 }}><HorizontalCard img={imgIgor} name="ИГОРЬ ЗАХАРОВ" role="Руководитель проекта" /></Box>
              <Box sx={{ flex: 1 }}><HorizontalCard img={imgLuiza} name="ЛУИЗА НАЗИПОВА" role="Главный архитектор" /></Box>
            </Box>
          </Box>
          <Box component={motion.div}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            sx={{ width: { xs: '100%', md: '40%' } }}
          >
            <img src={imgTopBuilding} alt="Building" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
          </Box>
        </Box>
      </Container>

      <Box sx={{ bgcolor: '#F2A359', py: 0, mb: 10 }}>
        <Container maxWidth="lg" sx={{ bgcolor: 'white', py: 8, px: { xs: 2, md: 6 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <Button 
              variant="outlined" 
              startIcon={<AddIcon />}
              onClick={handleOpenAdd}
              sx={{ borderColor: '#F2A359', color: '#F2A359', fontWeight: 'bold', '&:hover': { bgcolor: 'rgba(242,163,89,0.1)', borderColor: '#F2A359' } }}
            >
              Добавить сотрудника
            </Button>
          </Box>
          <AnimatePresence mode='wait'>
            <Grid container spacing={4} rowSpacing={6} key="team-grid">
              {members.map((m, index) => (
                <Grid xs={12} sm={6} md={4} key={m.name + index}>
                  <VerticalCard 
                    img={m.img} 
                    name={m.name} 
                    role={m.role} 
                    onEdit={() => handleOpenEdit(index)}
                    onDelete={() => handleDelete(index)}
                    onInfo={() => handleOpenInfo(index)}
                  />
                </Grid>
              ))}
            </Grid>
          </AnimatePresence>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 6 }}>
          <Box component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ width: { xs: '100%', md: '40%' } }}
          >
            <img src={imgBotBuilding} alt="Building" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
          </Box>
          <Box component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{ width: { xs: '100%', md: '60%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <Typography sx={{ fontSize: '16px', color: '#444', mb: 5, lineHeight: 1.6, maxWidth: '90%' }}>
              Обращаясь в строительную компанию WIN DOM, вы можете быть уверены в том, что все ваши пожелания будут учтены и реализованы точно в срок, на самых комфортных условиях.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
              <Box sx={{ flex: 1 }}><HorizontalCard img={imgRasul} name="РАСУЛ МУХАРЯМОВ" role="Заместитель руководителя проекта" /></Box>
              <Box sx={{ flex: 1 }}><HorizontalCard img={imgDmitry} name="ДМИТРИЙ ВАГАНОВ" role="Заместитель руководителя проекта" /></Box>
            </Box>
          </Box>
        </Box>
        <Link to="/" style={{ textDecoration: 'none', color: '#F2A359', display: 'inline-flex', alignItems: 'center', fontSize: '15px', fontWeight: 'bold' }}>
          <ArrowBackIosNewIcon sx={{ fontSize: '12px', mr: 0.5 }} /> На главную
        </Link>
      </Container>

      {/* CRUD Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 'bold' }}>
          {dialogMode === 'add' ? 'Добавить сотрудника' : dialogMode === 'edit' ? 'Редактировать сотрудника' : 'Информация о сотруднике'}
        </DialogTitle>
        <DialogContent dividers>
          {dialogMode === 'info' ? (
            <Box sx={{ textAlign: 'center' }}>
              <img src={formData.img} alt={formData.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', marginBottom: '16px' }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{formData.name}</Typography>
              <Typography variant="body1" color="text.secondary">{formData.role}</Typography>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
              <TextField 
                label="Имя и Фамилия" 
                fullWidth 
                value={formData.name} 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              />
              <TextField 
                label="Должность" 
                fullWidth 
                value={formData.role} 
                onChange={(e) => setFormData({ ...formData, role: e.target.value })} 
              />
              <Typography variant="caption" color="text.secondary">
                Изображение по умолчанию: {formData.img.split('/').pop()}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} sx={{ color: '#666' }}>Закрыть</Button>
          {dialogMode !== 'info' && (
            <Button onClick={handleSave} variant="contained" sx={{ bgcolor: '#F2A359', '&:hover': { bgcolor: '#e0964d' } }}>
              Сохранить
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
}