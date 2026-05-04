import React from 'react';
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {
  return (
    <Box sx={{ minHeight: "100vh",  display: "flex",  alignItems: "center",  justifyContent: "center", bgcolor: "#f9f9f9", textAlign: "center", p: 3}}>
      <Container maxWidth="sm">
        <Typography variant="h1" sx={{fontSize: { xs: "120px", md: "180px" },  fontWeight: 900,  color: "#F2A359", lineHeight: 1, mb: 2,textShadow: "4px 4px 0px rgba(0,0,0,0.05)"}}>
          404
        </Typography>
        <Typography variant="h4" sx={{fontWeight: 800, mb: 2, color: "#323232",textTransform: "uppercase" }}>
          Страница не найдена
        </Typography>
        <Typography variant="body1" sx={{color: "#666",mb: 5,fontSize: "18px",lineHeight: 1.6}}>
          Извините, но мы не смогли найти страницу по этому адресу. Возможно, она была перемещена или удалена.
        </Typography>
        <Button component={Link} to="/" variant="contained" size="large" startIcon={<ArrowBackIcon />} sx={{
            bgcolor: "#F2A359",
            color: "white",
            px: 5,
            py: 1.8,
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "0",
            boxShadow: "none",
            "&:hover": {
              bgcolor: "#e0964d",
              boxShadow: "0 8px 25px rgba(242,163,89,0.3)"
            }
          }}
        >
          Вернуться на главную
        </Button>
      </Container>
    </Box>
  );
}
