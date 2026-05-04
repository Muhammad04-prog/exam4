import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import logoImg from "../../assets/images/windom logo 4.png";

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%', bgcolor: '#fff'}}>
      <img src={logoImg} alt="Loading..." style={{ height: '60px', marginBottom: '24px', objectFit: 'contain', opacity: 0.8, transform: 'scale(1.5)'}} />
      <CircularProgress sx={{ color: '#F2A359' }} size={40} thickness={4} />
    </Box>
  );
}
