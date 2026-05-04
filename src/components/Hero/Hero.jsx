import { Box, Typography, Button, Container, Stack } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/Rectangle 37 (8).png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "500px", md: "100vh" },
        pt: { xs: "80px", md: "0" },
        backgroundImage: `url("${heroBg}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: "700px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                fontSize: { xs: "14px", md: "18px" },
                textTransform: "uppercase",
              }}
            >
              {t('home.hero_subtitle_short', 'Строительная компания')}
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "60px", md: "120px" },
                lineHeight: 1,
                mb: 2,
                color: "#D1A36E",
              }}
            >
              WINDOM
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                mb: 6,
                maxWidth: "500px",
                lineHeight: 1.4,
                fontSize: { xs: "18px", md: "22px" },
              }}
            >
              {t('home.hero_subtitle', 'Мы строим дома, коттеджные поселки и таунхаусы в Казани')}
            </Typography>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              sx={{ alignItems: "center" }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#D1A36E",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "#b88e5d" },
                }}
              >
                {t('home.learn_more', 'Подробнее о проектах')}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.5)",
                  color: "#fff",
                  px: 4,
                  py: 1.5,
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.1)" },
                }}
              >
                {t('home.ask_question', 'Задать вопрос')}
              </Button>
            </Stack>
          </motion.div>
        </Box>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              "&:hover .play-icon": { transform: "scale(1.1)" },
            }}
          >
            <Box
              className="play-icon"
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "rgba(209, 163, 110, 0.4)",
                backdropFilter: "blur(4px)",
                transition: "transform 0.3s ease",
              }}
            >
              <PlayArrowIcon sx={{ color: "#fff", fontSize: 40 }} />
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {t('home.watch_video', 'Смотреть видео')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
