import React, { useState } from 'react';
import { Dialog, Box, Typography, IconButton, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export default function CallbackModal({ open, onClose }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          p: { xs: 1, md: 1 },
          borderRadius: 0,
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
        }
      }}
    >
      <IconButton 
        onClick={handleClose} 
        sx={{ position: 'absolute', right: 8, top: 8, color: '#333' }}
      >
        <CloseIcon />
      </IconButton>

      {!isSuccess ? (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 500, textAlign: 'center', lineHeight: 1.4, px: 2, color: '#111' }}>
            Оставьте свои данные и наш менеджер перезвонит вам в течении 30 минут
          </Typography>
          
          <Box>
            <Typography sx={{ fontSize: '0.85rem', mb: 0.5, fontWeight: 600, color: '#333' }}>Имя *</Typography>
            <TextField 
              fullWidth 
              size="small" 
              required 
              variant="outlined" 
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.85rem', mb: 0.5, fontWeight: 600, color: '#333' }}>Телефон *</Typography>
            <TextField 
              fullWidth 
              size="small" 
              required 
              variant="outlined" 
              sx={{ '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
            />
          </Box>
          <Button type="submit" variant="outlined" fullWidth sx={{ py: 1.5, borderColor: '#F2A359', color: '#333', textTransform: 'none', fontWeight: 500,borderRadius: 0,'&:hover': { borderColor: '#F2A359', bgcolor: 'rgba(242, 163, 89, 0.05)' } }}>
            Заказать звонок
          </Button>
          <FormControlLabel 
            control={<Checkbox required defaultChecked size="small" sx={{ color: '#ccc', '&.Mui-checked': { color: '#888' } }} />} 
            label={
              <Typography sx={{ fontSize: '0.75rem', color: '#666', lineHeight: 1.2 }}>
                Я согласен с политикой обработки<br/>персональных данных
              </Typography>
            } 
            sx={{ m: 0, alignItems: 'flex-start', '& .MuiCheckbox-root': { pt: 0, pl: 0, pr: 1 } }}
          />
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 5 }}>
          <Box sx={{ width: 70, height: 70, borderRadius: '50%', border: '3px solid #F2A359', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
            <CheckIcon sx={{ fontSize: 40, color: '#F2A359' }} />
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, textAlign: 'center', color: '#111' }}>
            ВАШ ЗАПРОС ПРИНЯТ
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: '#555', textAlign: 'center', maxWidth: '80%', lineHeight: 1.5 }}>
            Наш менеджер свяжется с вами в ближайшее время
          </Typography>
        </Box>
      )}
    </Dialog>
  );
}