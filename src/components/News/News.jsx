import { Box, Container, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import izumrudny from "../../assets/images/izumrudny.png";
import iqClub from "../../assets/images/iq-club.png";
import zimnayaGorka from "../../assets/images/zimnaya-gorka.png";
import usady from "../../assets/images/usady.png";
import aboutHouse from "../../assets/images/about-house.png";

const newsItems = [
  {
    title: "Интерьерные решения от наших дизайнеров",
    date: "01.04.2023",
    img: aboutHouse,
    size: "large",
  },
  {
    title: "Продолжаем строительство посёлка Изумрудный Village",
    date: "15.03.2023",
    img: izumrudny,
    size: "large",
  },
  {
    title: 'Таун 150 м² за двоих - это реально!',
    date: "10.03.2023",
    img: iqClub,
    size: "small",
  },
  {
    title: "Карта посёлка Изумрудный Village",
    date: "11.02.2023",
    img: zimnayaGorka,
    size: "small",
  },
  {
    title: "Открытие нового корта в коттеджном посёлке Изумрудный Village",
    date: "25.01.2023",
    img: usady,
    size: "small",
  },
];

export default function News() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "28px", md: "40px" },
              textTransform: "uppercase",
            }}
          >
            НОВОСТИ{" "}
            <Box component="span" sx={{ color: "#F2A95E", fontStyle: "italic" }}>
              КОМПАНИИ
            </Box>
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderColor: "#ddd",
              color: "#333",
              textTransform: "none",
              px: 3,
              borderRadius: "4px",
              fontSize: "13px",
              "&:hover": { borderColor: "#F2A95E", color: "#F2A95E" },
            }}
          >
            Все новости
          </Button>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gridTemplateRows: { md: "240px 240px" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              gridRow: { md: "1 / 3" },
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": { transform: "scale(1.05)" },
            }}
          >
            <Box
              component="img"
              src={newsItems[0].img}
              alt={newsItems[0].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 3,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 0.5 }}>
                {newsItems[0].title}
              </Typography>
              <Typography sx={{ fontSize: "11px", opacity: 0.7 }}>
                {newsItems[0].date}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              "&:hover img": { transform: "scale(1.05)" },
            }}
          >
            <Box
              component="img"
              src={newsItems[1].img}
              alt={newsItems[1].title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2.5,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "#fff",
              }}
            >
              <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 0.5 }}>
                {newsItems[1].title}
              </Typography>
              <Typography sx={{ fontSize: "11px", opacity: 0.7 }}>
                {newsItems[1].date}
              </Typography>
            </Box>
          </Box>
          {newsItems.slice(2).map((item, i) => (
            <Box
              key={i}
              sx={{
                position: "relative",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": { transform: "scale(1.05)" },
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  color: "#fff",
                }}
              >
                <Typography sx={{ fontSize: "12px", fontWeight: 600, mb: 0.3 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: "10px", opacity: 0.7 }}>
                  {item.date}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}