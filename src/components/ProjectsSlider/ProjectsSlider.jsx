import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css/bundle";

import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";

const projects = [
  { id: 1, img: p1, title: "Современная Вилла", location: "Казань, пос. Петровский" },
  { id: 2, img: p2, title: "Загородный Дом", location: "Лаишево, Берег Камы" },
  { id: 3, img: p3, title: "Таунхаус Премиум", location: "Казань, ул. Федосеевская" },
  { id: 4, img: p1, title: "Усадьба в Боровом", location: "Боровое Матюшино" },
  { id: 5, img: p2, title: "Лесной Коттедж", location: "Зеленодольский район" },
];

export default function ProjectsSlider({ titlePrefix = "НАШИ", titleHighlight = "ПРОЕКТЫ" }) {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 6, textTransform: "uppercase" }}
        >
          {titlePrefix} <Box component="span" sx={{ color: "#D1A36E" }}>{titleHighlight}</Box>
        </Typography>
      </Container>
      
      <Container maxWidth="xl" disableGutters>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="
                width: 40px; 
                height: 4px; 
                border-radius: 0; 
                background: #ccc; 
                opacity: 1;
                display: inline-block;
                margin: 0 5px !important;
                transition: all 0.3s ease;
              "></span>`;
            },
          }}
          style={{
            paddingBottom: "60px",
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              {({ isActive }) => (
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "350px", md: "650px" },
                    transition: "all 0.5s ease",
                    transform: isActive ? "scale(1)" : "scale(0.9)",
                    opacity: isActive ? 1 : 0.5,
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "none",
                    position: "relative",
                  }}
                >
                  <Box
                    component="img"
                    src={project.img}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                      p: 4,
                      color: "#fff",
                      transform: isActive ? "translateY(0)" : "translateY(100%)",
                      transition: "transform 0.5s ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8, color: "#D1A36E", fontWeight: 600 }}>
                      {project.location}
                    </Typography>
                  </Box>
                </Box>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <style>{`
        .swiper-pagination-bullet-active {
          background: #D1A36E !important;
          width: 50px !important;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </Box>
  );
}