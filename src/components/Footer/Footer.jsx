import { Box, Container, Typography, Link, Stack, Divider } from "@mui/material";
import { motion } from "framer-motion";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import EmailIcon from "@mui/icons-material/Email";
import logoImg from "../../assets/images/windom logo 3.png";

const linkStyle = {
  color: "#888",
  textDecoration: "none",
  fontSize: "13px",
  transition: "all 0.2s ease",
  "&:hover": { color: "#F2A95E", transform: "translateX(5px)" },
};

export default function Footer() {
  return (
    <Box 
      component={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      sx={{ bgcolor: "#323232", pt: 8, pb: 4, color: "white" }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 4, md: 0 },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ minWidth: { xs: "45%", md: "auto" } }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 800, mb: 2.5, textTransform: "uppercase", fontSize: "13px" }}
            >
              О КОМПАНИИ
            </Typography>
            <Stack spacing={1.5}>
              <Link sx={linkStyle}>Главная</Link>
              <Link sx={linkStyle}>Наша команда</Link>
              <Link sx={linkStyle}>СМИ о нас</Link>
              <Link sx={linkStyle}>Отзывы</Link>
              <Link sx={linkStyle}>Новости</Link>
              <Link sx={linkStyle}>Контакты</Link>
            </Stack>
          </Box>
          <Box sx={{ minWidth: { xs: "45%", md: "auto" } }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 800, mb: 2.5, textTransform: "uppercase", fontSize: "13px" }}
            >
              ПРОЕКТЫ
            </Typography>
            <Stack spacing={1.5}>
              <Link sx={linkStyle}>Изумрудный Village</Link>
              <Link sx={linkStyle}>IQ CLUB</Link>
              <Link sx={linkStyle}>Все проекты</Link>
            </Stack>
          </Box>
          <Box sx={{ minWidth: { xs: "45%", md: "auto" } }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 800, mb: 2.5, textTransform: "uppercase", fontSize: "13px" }}
            >
              ИПОТЕКА
            </Typography>
            <Stack spacing={1.5}>
              <Link sx={linkStyle}>Ипотечные кредиты</Link>
              <Link sx={linkStyle}>Для семей с детьми</Link>
              <Link sx={linkStyle}>Военная ипотека</Link>
              <Link sx={linkStyle}>Господдержка 2023</Link>
            </Stack>
          </Box>
          <Box sx={{ minWidth: { xs: "45%", md: "auto" }, textAlign: { xs: "left", md: "right" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                justifyContent: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <motion.img 
                whileHover={{ rotate: 5, scale: 1.1 }}
                src={logoImg} 
                alt="Wisdom Construction" 
                style={{ width:"140px", height: "120px", objectFit: "contain" }} 
              />
            </Box>
            <Stack spacing={1.5} sx={{ alignItems: { xs: "flex-start", md: "flex-end" } }}>
              <Link href="mailto:info@wisdom-const.ru" sx={linkStyle}>
                info@wisdom-const.ru
              </Link>
              <Typography variant="body2" sx={{ color: "#888", fontSize: "13px" }}>
                +7 (962) 555-25-25
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Divider sx={{ my: 5, borderColor: "rgba(255,255,255,0.1)" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: "#aaa", fontSize: "11px" }}>
            Политика конфиденциальности
          </Typography>
          <Typography variant="caption" sx={{ color: "#555", fontSize: "11px" }}>
            © {new Date().getFullYear()} WIN DOM. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}