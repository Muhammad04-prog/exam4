import { Box, Typography, Container } from "@mui/material";
import uniqueArch from "../../assets/images/ночь.png";

export default function Architecture() {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 6, textTransform: "uppercase" }}
        >
          УНИКАЛЬНАЯ <Box component="span" sx={{ color: "#D1A36E" }}>АРХИТЕКТУРА</Box>
        </Typography>
        
        <Box sx={{ position: "relative", mb: 4, mx: "auto", maxWidth: "1000px" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: -15,
              left: -15,
              width: "200px",
              height: "200px",
              borderLeft: "2px solid #D1A36E",
              borderBottom: "2px solid #D1A36E",
              zIndex: 0,
            }}
          />
           <Box
            sx={{
              position: "absolute",
              top: -15,
              right: -15,
              width: "200px",
              height: "200px",
              borderRight: "2px solid #D1A36E",
              borderTop: "2px solid #D1A36E",
              zIndex: 0,
            }}
          />
          
          <Box
            component="img"
            src={uniqueArch}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 6 }}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              color: "#555",
              lineHeight: 1.8,
              textAlign: "right",
              fontSize: { xs: "16px", md: "18px" }
            }}
          >
            Мы не строим однотипных коробочных решений: дома из желтого или красного кирпича. Мы создаём <Box component="span" sx={{ color: "#D1A36E", fontWeight: 600 }}>уникальные</Box>, ни на что не похожие, <Box component="span" sx={{ color: "#D1A36E", fontWeight: 600 }}>запоминающиеся проекты</Box>.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
