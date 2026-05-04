import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapIcon from "@mui/icons-material/Map";

import izumrudny from "../../assets/images/izumrudny.png";
import iqClub from "../../assets/images/iq-club.png";
import zimnayaGorka from "../../assets/images/zimnaya-gorka.png";
import usady from "../../assets/images/usady.png";

const filters = ["1 этажные", "2-х этажные", "Таунхаусы"];

const projects = [
  {
    title: "Изумрудный Village",
    location: "8 минут от метро Дубравная. Дома сдаются",
    img: izumrudny,
  },
  {
    title: "IQ CLUB",
    location: "Начало строительства - I квартал 2024 года",
    img: iqClub,
  },
  {
    title: "Дома в Зимней Горке",
    location: "10 минут от Казанского аэропорта. Bce дома сданы",
    img: zimnayaGorka,
  },
  {
    title: "Усады Village",
    location: "Посёлок в черте города. Bce дома сданы",
    img: usady,
  },
];

export default function ProjectsGrid() {
  return (
    <Box sx={{ px: { xs: 0, md: 6, lg: 10 }, py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="xl" disableGutters={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            sx={{ 
              fontWeight: 600, 
              mb: 6, 
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: { xs: "32px", md: "48px" }
            }}
          >
            НАШИ <Box component="span" sx={{ color: "#F2A95E", fontWeight: 400 }}>ПРОЕКТЫ</Box>
          </Typography>
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ mb: 4, flexWrap: "wrap", gap: 2, alignItems: "center" }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="text"
                sx={{
                  color: "#333",
                  textTransform: "none",
                  bgcolor: "#f8f8f8",
                  px: 4,
                  py: 1.5,
                  borderRadius: "2px",
                  fontSize: "14px",
                  "&:hover": { bgcolor: "#f0f0f0" },
                }}
              >
                {filter}
              </Button>
            ))}
            <Button
              variant="outlined"
              endIcon={<MapIcon sx={{ fontSize: 18 }} />}
              sx={{
                borderColor: "#333",
                color: "#333",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "2px",
                fontSize: "14px",
                "&:hover": { borderColor: "#000", bgcolor: "transparent" },
              }}
            >
              На карте
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#F2A95E",
                color: "#fff",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "2px",
                fontSize: "14px",
                boxShadow: "none",
                "&:hover": { bgcolor: "#e59a4d", boxShadow: "none" },
              }}
            >
              Все дома
            </Button>
          </Stack>
          <Box 
            sx={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              mb: 4,
              pb: 2,
              borderBottom: "1px solid #eee"
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#333",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Коттеджные поселки и дома в Казани
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {projects.map((project, index) => (
            <Grid xs={12} md={6} key={index}>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, fontSize: "22px" }}>
                  {project.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 3 }}>
                  <LocationOnIcon sx={{ fontSize: 18, color: "#F2A95E" }} />
                  <Typography variant="body2" sx={{ color: "#666", fontSize: "14px" }}>
                    {project.location}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "480px" },
                    borderRadius: "2px",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover img": { transform: "scale(1.03)" },
                  }}
                >
                  <Box
                    component="img"
                    src={project.img}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease-in-out",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#F2A95E",
              color: "#333",
              textTransform: "none",
              px: 8,
              py: 1.8,
              fontWeight: 500,
              borderRadius: "4px",
              fontSize: "15px",
              "&:hover": { bgcolor: "rgba(242, 169, 94, 0.05)", borderColor: "#F2A95E" },
            }}
          >
            Смотреть всё
          </Button>
        </Box>
      </Container>
    </Box>
  );
}