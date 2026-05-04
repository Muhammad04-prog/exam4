import {Box, Container, Typography, TextField, Button, Stack} from "@mui/material";
import { motion } from "framer-motion";
import catalogBg from "../../assets/images/catalog-bg.png";
import keys from "../../assets/images/keys.png";
import familyField from "../../assets/images/family-field.png";
import itFamily from "../../assets/images/it-family.png";
import girlFlowers from "../../assets/images/girl-flowers.png";

const mortgageCards = [
  {
    title: "ИПОТЕЧНЫЕ КРЕДИТЫ",
    desc: "Бесплатно подберём базовую ипотечную программу",
    rate: "от 13,7%",
    payment: "от 10%",
    img: keys,
  },
  {
    title: "СЕМЕЙНАЯ ИПОТЕКА",
    desc: "Используем материнский капитал в качестве первоначального взноса",
    rate: "от 4%",
    payment: "от 15%",
    img: familyField,
  },
  {
    title: "IT СПЕЦИАЛИСТАМ",
    desc: "В рамках данной программы сотрудники IT-компаний могут построить частный дом в ипотеку по льготной ставке.",
    rate: "от 4%",
    payment: "от 15%",
    img: itFamily,
  },
  {
    title: "ГОСПОДДЕРЖКА 2023",
    desc: "Используем материнский капитал в качестве первоначального взноса",
    rate: "от 6%",
    payment: "от 15%",
    img: girlFlowers,
  },
];

export default function Mortgage() {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          py: { xs: 6, md: 10 },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${catalogBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 5,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: { xs: "22px", md: "34px" },
              }}
            >
              СКАЧАТЬ{" "}
              <Box component="span" sx={{ color: "#F2A95E" }}>
                КАТАЛОГ
              </Box>{" "}
              НАШИХ ПРОЕКТОВ
            </Typography>
          </motion.div>
          <Box component={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ maxWidth: "800px", mx: "auto", alignItems: "stretch" }}
            >
              <TextField
                placeholder="Имя"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: "2px",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": { borderColor: "#F2A95E" },
                  },
                }}
              />
              <TextField
                placeholder="Ваш E-mail"
                variant="outlined"
                fullWidth
                sx={{
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: "2px",
                  "& .MuiOutlinedInput-root": {
                    color: "#fff",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                    "&:hover fieldset": { borderColor: "#F2A95E" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#F2A95E",
                  color: "#fff",
                  px: 6,
                  py: 1.8,
                  minWidth: "180px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "2px",
                  boxShadow: "none",
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#e59a4d", boxShadow: "none" },
                }}
              >
                Скачать
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontSize: { xs: "24px", md: "36px" },
                  lineHeight: 1.2,
                }}
              >
                ПОДБЕРЁМ РЕШЕНИЯ{" "}
                <Box
                  component="span"
                  sx={{ color: "#F2A95E", fontStyle: "italic" }}
                >
                  ПО ИПОТЕКЕ
                </Box>{" "}
                УЖЕ СЕГОДНЯ
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#888",
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                Выберите подходящий вариант и наши специалисты подготовят для вас
                актуальные предложения
              </Typography>
            </motion.div>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {mortgageCards.map((card, i) => (
              <Box
                key={i}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                sx={{
                  width: { xs: "100%", md: "calc(50% - 12px)" },
                  display: "flex",
                  height: "280px",
                  bgcolor: "#fff",
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    transform: "translateY(-3px)",
                    "& .card-img": { transform: "scale(1.05)" }
                  },
                }}
              >
                <Box
                  sx={{
                    width: "55%",
                    p: { xs: 2.5, md: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 800,
                        mb: 1,
                        fontSize: { xs: "14px", md: "16px" },
                        lineHeight: 1.3,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#888",
                        lineHeight: 1.5,
                        fontSize: { xs: "11px", md: "13px" },
                      }}
                    >
                      {card.desc}
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ display: "flex", gap: 3, mb: 2 }}>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: { xs: "18px", md: "24px" },
                            color: "#222",
                            lineHeight: 1.2,
                          }}
                        >
                          {card.rate}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "#aaa", fontSize: "10px" }}
                        >
                          Ставка по ипотеке
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: { xs: "18px", md: "24px" },
                            color: "#222",
                            lineHeight: 1.2,
                          }}
                        >
                          {card.payment}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "#aaa", fontSize: "10px" }}
                        >
                          Первоначальный взнос
                        </Typography>
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: "#F2A95E",
                        color: "#fff",
                        textTransform: "none",
                        px: 3,
                        py: 1,
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 600,
                        boxShadow: "none",
                        "&:hover": { bgcolor: "#e59a4d", boxShadow: "none" },
                      }}
                    >
                      Получить расчёт
                    </Button>
                  </Box>
                </Box>
                <Box
                  className="card-img"
                  sx={{
                    width: "45%",
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.5s ease"
                  }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}