import { useRef } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import review1 from "../../assets/images/review1.png";

const testimonials = [
  {
    name: "Максим Иванов",
    info: "Приобрел дом 150кв м",
    img: review1,
    text: "Заказывал в этой компании постройку загородного дома, но у же по готовой планировке. Могу сказать что в этой компании очень опытные инженеры и профессиональные строители. Сделали все качественно и как было задумано изначально.",
  },
  {
    name: "Семья Петровых",
    info: "Приобрели двухэтажный дом 300кв м",
    img: "https://i.pravatar.cc/150?img=12",
    text: "Мы в восторге от нашего нового дома! Мы долго выбирали квартиру в городе, но когда решили завести второго ребенка поняли, что в квартире нам всем будет тесно. Дом выбирали вместе с родителями - папа особенно оценил изоляцию стен.....",
  },
  {
    name: "Семья Муратовых",
    info: "Приобрели двухэтажный дом 240кв м",
    img: "https://i.pravatar.cc/150?img=32",
    text: "Поскольку семья у нас из 4-х человек, то дом мы себе смотрели сразу просторный и под ключ. В этом плане мне понравилось, что в данном проекте просторные комнаты и у каждого есть свое личное пространство.",
  },
  {
    name: "Алексей Смирнов",
    info: "Приобрел таунхаус 120кв м",
    img: "https://i.pravatar.cc/150?img=53",
    text: "Отличное качество строительства и внимательное отношение к деталям. Все сроки были соблюдены, никаких задержек. Рекомендую эту компанию всем, кто ищет надежного застройщика.",
  },
  {
    name: "Ирина Козлова",
    info: "Приобрела коттедж 200кв м",
    img: "https://i.pravatar.cc/150?img=44",
    text: "Очень довольна результатом! Дом получился именно таким, каким я его представляла. Профессиональная команда, которая прислушивается к пожеланиям клиентов.",
  },
  {
    name: "Семья Волковых",
    info: "Приобрели дом 180кв м",
    img: "https://i.pravatar.cc/150?img=62",
    text: "Строительство прошло гладко и без проблем. Нам особенно понравился подход к планировке — все продумано до мелочей. Дети в восторге от своих комнат!",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "28px", md: "40px" },
            textTransform: "uppercase",
            mb: 6,
          }}
        >
          <Box component="span" sx={{ color: "#F2A95E", fontStyle: "italic" }}>
            ОТЗЫВЫ
          </Box>{" "}
          КЛИЕНТОВ
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            ref={prevRef}
            sx={{
              display: { xs: "none", md: "flex" },
              border: "1px solid #ddd",
              color: "#333",
              width: 48,
              height: 48,
              flexShrink: 0,
              "&:hover": { borderColor: "#F2A95E", color: "#F2A95E" },
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
          </IconButton>

          <Box sx={{ flex: 1, overflow: "hidden" }}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                el: ".testimonial-pagination",
              }}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <Box
                    sx={{
                      border: "1px solid #eee",
                      borderTop: "3px solid #F2A95E",
                      borderRadius: "4px",
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      minHeight: "280px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 3,
                      }}
                    >
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.name}
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 700,
                            fontSize: "15px",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#F2A95E", fontSize: "12px" }}
                        >
                          {item.info}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#555",
                        fontSize: "13px",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <IconButton
            ref={nextRef}
            sx={{
              display: { xs: "none", md: "flex" },
              border: "1px solid #ddd",
              color: "#333",
              width: 48,
              height: 48,
              flexShrink: 0,
              "&:hover": { borderColor: "#F2A95E", color: "#F2A95E" },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>

        <Box
          className="testimonial-pagination"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 4,
            "& .swiper-pagination-bullet": {
              width: 10,
              height: 10,
              bgcolor: "#ddd",
              borderRadius: "50%",
              opacity: 1,
              transition: "all 0.3s ease",
              cursor: "pointer",
            },
            "& .swiper-pagination-bullet-active": {
              width: 24,
              borderRadius: "5px",
              bgcolor: "#F2A95E",
            },
          }}
        />
      </Container>
    </Box>
  );
}
