import { Box, Container, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export default function SalesOffice() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "28px", md: "40px" },
            textTransform: "uppercase",
            mb: 5,
          }}
        >
          ОФИС{" "}
          <Box component="span" sx={{ color: "#F2A95E", fontStyle: "italic" }}>
            ПРОДАЖ
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 0,
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #eee",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "45%" },
              p: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <HomeWorkIcon sx={{ color: "#F2A95E", fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 800 }}>
                Центральный офис
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#888", mb: 4, fontSize: "13px", lineHeight: 1.6 }}
            >
              Вы можете обратиться к нашим менеджерам по любому вопросу
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <LocationOnIcon sx={{ color: "#F2A95E", fontSize: 22 }} />
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  г. Казань, ул. Яркая 31 Б
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <AccessTimeIcon sx={{ color: "#F2A95E", fontSize: 22 }} />
                <Typography variant="body2" sx={{ fontSize: "14px" }}>
                  Пн-Сб: с 9:00 до 18:00
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <PhoneIcon sx={{ color: "#F2A95E", fontSize: 22 }} />
                <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 600 }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#F2A95E",
                color: "#fff",
                textTransform: "none",
                px: 4,
                py: 1.5,
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 600,
                boxShadow: "none",
                alignSelf: "flex-start",
                "&:hover": { bgcolor: "#e59a4d", boxShadow: "none" },
              }}
            >
              Проложить маршрут
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              minHeight: { xs: "300px", md: "400px" },
              position: "relative",
              bgcolor: "#eee",
            }}
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=49.10%2C55.78%2C49.15%2C55.80&layer=mapnik&marker=55.7879%2C49.1233"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}