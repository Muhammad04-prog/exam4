import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Breadcrumbs, 
  Link, 
  Stack, 
  Divider,
  Paper
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useNavigate } from "react-router-dom";

const VKIcon = () => (
  <Box component="span" sx={{ fontWeight: 800, fontSize: "14px", border: "2px solid currentColor", px: 0.5, borderRadius: "4px" }}>VK</Box>
);
const OKIcon = () => (
  <Box component="span" sx={{ fontWeight: 800, fontSize: "14px", border: "2px solid currentColor", px: 0.5, borderRadius: "4px" }}>OK</Box>
);

export default function NewsDetail() {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textTransform: "uppercase" }}>Новости</Typography>
          <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />} 
            sx={{ color: "#E9A05B", fontSize: "14px" }}
          >
            <Link 
              component="button"
              onClick={() => navigate("/about/news")}
              underline="hover" 
              color="inherit" 
              sx={{ border: "none", bgcolor: "transparent", p: 0, cursor: "pointer", fontSize: "inherit", fontWeight: "inherit", color: "inherit" }}
            >
              Назад к новостям
            </Link>
          </Breadcrumbs>
        </Box>
        <Grid container spacing={6}>
          <Grid xs={12} lg={8.5}>
            <Box>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#E9A05B", mb: 2 }}>
                <AccessTimeIcon sx={{ fontSize: 18 }} />
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>22.06.2023</Typography>
              </Stack>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, fontSize: { xs: "24px", md: "38px" }, lineHeight: 1.2 }}>
                10 причин, почему вам нужно поменять квартиру на таунхаус
              </Typography>
              <Typography sx={{ color: "#555", lineHeight: 1.7, mb: 4 }}>
                По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом. Около 80% российских семей считают жилье в частном доме наиболее комфортной.
              </Typography>
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop"
                sx={{ 
                  width: "100%", 
                  height: { xs: "250px", md: "450px" }, 
                  objectFit: "cover", 
                  borderRadius: "2px",
                  mb: 5
                }}
              />
              <Typography sx={{ color: "#333", lineHeight: 1.8, mb: 3 }}>
                Таунхаусы становятся все более популярными во многих странах, особенно в густонаселенных городских районах, где цены на жилье достаточно высоки.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}>
                {[
                  { t: "Больше пространства", d: "Таунхаусы имеют большую площадь, чем квартиры, что позволяет жить комфортно и иметь больше места для хранения вещей. Больше мест — больше комнат. Своего рода дачный домик можно расположить в два." },
                  { t: "Собственный двор/территория", d: "Таунхаусы подразумевают свой участок земли, что позволяет иметь собственный двор, где можно проводить время на свежем воздухе, заниматься садоводством, готовить барбекю и отдыхать в компании." },
                  { t: "Больше приватности", d: "Таунхаусы имеют свои территории, поэтому вы имеете больше приватности, чем в многоквартирном доме. У вас не будет общих стен — только свои!" },
                  { t: "Более выгодная стоимость", d: "Таунхаусы могут быть более выгодными по стоимости, чем квартиры, особенно если рассматривать их с точки зрения квадратного метра." },
                  { t: "Простор для интерьерного дизайна", d: "Таунхаусы имеют более открытую планировку и больше пространства для дизайна, что позволяет создать более уникальный и персональный интерьер." }
                ].map((item, i) => (
                  <Box key={i}>
                    <Typography sx={{ fontWeight: 800, fontSize: "18px", mb: 1 }}>{i + 1}. {item.t}</Typography>
                    <Typography sx={{ color: "#555", lineHeight: 1.7 }}>{item.d}</Typography>
                  </Box>
                ))}
              </Box>
              <Divider sx={{ mb: 4 }} />
              <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                <Typography sx={{ fontWeight: 800, textTransform: "uppercase", fontSize: "14px" }}>Поделиться</Typography>
                <Stack direction="row" spacing={2} sx={{ color: "#E9A05B" }}>
                  <Link href="#" color="inherit"><VKIcon /></Link>
                  <Link href="#" color="inherit"><OKIcon /></Link>
                  <Link href="#" color="inherit"><TelegramIcon /></Link>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid xs={12} lg={3.5}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textTransform: "uppercase" }}>
              Другие <Box component="span" sx={{ color: "#E9A05B" }}>новости</Box>
            </Typography>
            <Stack spacing={4}>
              <NewsCard 
                image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"
                title="Интерьерные решения от наших дизайнеров"
                date="01.06.2023"
              />
              <NewsCard 
                image="https://images.unsplash.com/photo-1595435064212-c441721aaac1?q=80&w=1000&auto=format&fit=crop"
                title="Открытие теннисного корта в коттеджном поселке Изумрудный Village"
                date="12.06.2023"
              />
              <NewsCard 
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
                title="Последние акционные предложения в коттеджном поселке Изумрудный Village"
                date="19.06.2023"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function NewsCard({ image, title, date }) {
  return (
    <Box sx={{ cursor: "pointer", "&:hover img": { transform: "scale(1.05)" } }}>
      <Box sx={{ overflow: "hidden", borderRadius: "2px", mb: 2 }}>
        <Box 
          component="img"
          src={image}
          sx={{ 
            width: "100%", 
            height: "180px", 
            objectFit: "cover", 
            transition: "transform 0.3s ease" 
          }}
        />
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "16px", mb: 1, lineHeight: 1.4 }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#E9A05B" }}>
        <AccessTimeIcon sx={{ fontSize: 14 }} />
        <Typography sx={{ fontSize: "12px", fontWeight: 600 }}>{date}</Typography>
      </Stack>
    </Box>
  );
}
