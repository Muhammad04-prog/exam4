import React, { useState } from "react";
import {Box, Container, Typography, Slider, Stack, Button, Paper, Link, TextField, MenuItem, Grid} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { motion } from "framer-motion";
import Mortgage from "../../components/Mortgage/Mortgage";
import Faq from "../../components/FAQ/Faq";
import ipotekaHero from "../../assets/images/ipoteka-hero.jpg";

const sliderSx = {
  color: "#E9A05B",
  height: 6,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "3px solid currentColor",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 0 0 8px rgba(233, 160, 91, 0.16)",
    },
  },
  "& .MuiSlider-track": { height: 6 },
  "& .MuiSlider-rail": { color: "#E5E7EB", opacity: 1, height: 6 },
};

const filterFieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#F9F9F9",
    borderRadius: "2px",
    "& fieldset": { borderColor: "#EEE" },
    "&.Mui-focused fieldset": { borderColor: "#E9A05B" },
  },
  "& .MuiInputLabel-root": { fontSize: "14px", color: "#666" },
  mb: 2
};

export default function Ipoteka() {
  const [price, setPrice] = useState(6331430);
  const [initial, setInitial] = useState(949714);
  const [years, setYears] = useState(20);
  const [rate, setRate] = useState(4);
  
  const formatPrice = (val) => new Intl.NumberFormat("ru-RU").format(val) + " ₽";

  return (
    <Box component="main">
      <Box 
        sx={{ 
          height: "600px",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${ipotekaHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          py: { xs: 10, md: 0 }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: "800px" }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: "36px", md: "72px" }, 
                  fontWeight: 800, 
                  mb: 3,
                  textTransform: "uppercase"
                }}
              >
                ИПОТЕКА ОТ <Box component="span" sx={{ bgcolor: "#fff", color: "#1F1F1F", px: 2, borderRadius: "4px" }}>4%</Box>
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: { xs: "16px", md: "20px" }, 
                  lineHeight: 1.6, 
                  mb: 5,
                  opacity: 0.9,
                  fontWeight: 500
                }}
              >
                Поможем получить одобрение ипотеки на самых выгодных условиях. <br />
                Поможем с оформлением документов в короткий срок.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: "#E9A05B", 
                  color: "#fff", 
                  px: 6, 
                  py: 2, 
                  fontSize: "16px", 
                  fontWeight: 700,
                  borderRadius: "4px",
                  "&:hover": { bgcolor: "#d88f4a" }
                }}
              >
                Оставить заявку
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 12, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              sx={{ fontWeight: 800, mb: 8, textTransform: "uppercase" }}
            >
              Банковские программы
            </Typography>
          </motion.div>
          <Grid container spacing={6}>
            <Grid xs={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Вид недвижимости</Typography>
                  <TextField select fullWidth defaultValue="Все" sx={filterFieldSx}>
                    <MenuItem value="Все">Все</MenuItem>
                    <MenuItem value="Дом">Дом</MenuItem>
                    <MenuItem value="Квартира">Квартира</MenuItem>
                  </TextField>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Объект</Typography>
                  <TextField select fullWidth defaultValue="Все" sx={filterFieldSx}>
                    <MenuItem value="Все">Все</MenuItem>
                  </TextField>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Вид ипотеки</Typography>
                  <TextField select fullWidth defaultValue="Все" sx={filterFieldSx}>
                    <MenuItem value="Все">Все</MenuItem>
                    <MenuItem value="Семейная">Семейная</MenuItem>
                    <MenuItem value="IT">IT-ипотека</MenuItem>
                  </TextField>
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Стоимость</Typography>
                  <TextField fullWidth defaultValue="5 000 000 ₽" sx={filterFieldSx} />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Первоначальный взнос</Typography>
                  <TextField fullWidth defaultValue="1 500 000 ₽" sx={filterFieldSx} />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600, mb: 1, color: "#1F1F1F" }}>Ежемесячный платеж</Typography>
                  <TextField fullWidth defaultValue="30 000 ₽" sx={filterFieldSx} />
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{ 
                      bgcolor: "#E9A05B", 
                      color: "#fff", 
                      py: 2, 
                      fontWeight: 700,
                      borderRadius: "4px",
                      mt: 2,
                      "&:hover": { bgcolor: "#d88f4a" }
                    }}
                  >
                    Рассчитать ипотеку
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid xs={12} lg={8}>
              <Grid container spacing={3}>
                {[
                  { bank: "АО Альфа-Банк", rate: "4.1%", payment: "1 000 ₽", program: "Семейная" },
                  { bank: "Банк ВТБ (ПАО)", rate: "6%", payment: "4 000 ₽", program: "Господдержка" },
                  { bank: "ПАО Сбербанк", rate: "4%", payment: "4 000 ₽", program: "IT-специалисты", highlighted: true },
                  { bank: "ПАО Совкомбанк", rate: "4%", payment: "4 000 ₽", program: "Семейная" }
                ].map((item, idx) => (
                  <Grid xs={12} sm={6} key={idx}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <BankCard {...item} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 12, bgcolor: "#F9F9F9" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 800, 
                mb: 8, 
                textTransform: "uppercase",
                fontSize: { xs: "32px", md: "42px" }
              }}
            >
              Рассчитайте <Box component="span" sx={{ color: "#E9A05B" }}>ИПОТЕКУ</Box>
            </Typography>
          </motion.div>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 10 }}>
            <Box component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}
            >
              <Box>
                <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ color: "#666", fontWeight: 500, fontSize: "18px" }}>Стоимость недвижимости</Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: "22px" }}>{formatPrice(price)}</Typography>
                </Stack>
                <Slider value={price} min={1000000} max={20000000} onChange={(e, v) => setPrice(v)} sx={sliderSx} />
              </Box>
              <Box>
                <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                  <Typography sx={{ color: "#666", fontWeight: 500, fontSize: "18px" }}>Первоначальный взнос</Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: "22px" }}>{formatPrice(initial)} (15%)</Typography>
                </Stack>
                <Slider value={initial} min={100000} max={price} onChange={(e, v) => setInitial(v)} sx={sliderSx} />
              </Box>
              <Box sx={{ display: "flex", gap: 6, flexDirection: { xs: "column", sm: "row" } }}>
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                    <Typography sx={{ color: "#666", fontWeight: 500, fontSize: "18px" }}>Срок кредита</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: "22px" }}>{years} лет</Typography>
                  </Stack>
                  <Slider value={years} min={1} max={30} onChange={(e, v) => setYears(v)} sx={sliderSx} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                    <Typography sx={{ color: "#666", fontWeight: 500, fontSize: "18px" }}>Ставка</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: "22px" }}>{rate}%</Typography>
                  </Stack>
                  <Slider value={rate} min={1} max={20} step={0.1} onChange={(e, v) => setRate(v)} sx={sliderSx} />
                </Box>
              </Box>
            </Box>
            <Box component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{ width: { xs: "100%", lg: "440px" } }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  bgcolor: "#111827", 
                  color: "#fff", 
                  p: { xs: 5, md: 7 }, 
                  borderRadius: "4px",
                  textAlign: "center"
                }}
              >
                <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 2, fontSize: "16px" }}>Ваш ежемесячный платеж</Typography>
                <Typography variant="h2" sx={{ fontWeight: 900, mb: 5, fontSize: "48px" }}>32 612 ₽</Typography>
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ 
                    bgcolor: "#E9A05B", 
                    color: "#fff", 
                    py: 2.5, 
                    fontSize: "16px", 
                    fontWeight: 700,
                    borderRadius: "4px",
                    "&:hover": { bgcolor: "#d88f4a" },
                    mb: 4
                  }}
                >
                  Получить одобрение
                </Button>
                <Link href="#" sx={{ color: "rgba(255,255,255,0.5)", textDecoration: "underline", fontSize: "14px" }}>
                  Подробнее об ипотеке
                </Link>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
      <Mortgage />
      <Faq />
    </Box>
  );
}

function BankCard({ bank, rate, payment, program, highlighted }) {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 4, 
        border: "1px solid #EEE", 
        borderRadius: "4px",
        bgcolor: highlighted ? "#F9F9F9" : "#FFF",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s",
        "&:hover": { boxShadow: "0 10px 20px rgba(0,0,0,0.05)", borderColor: "#E9A05B" }
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 2 }}>
          <AccountBalanceIcon sx={{ color: "#E9A05B", fontSize: 20 }} />
          <Typography sx={{ fontWeight: 700, fontSize: "14px", color: "#1F1F1F" }}>{bank}</Typography>
        </Stack>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#999", fontSize: "12px", mb: 0.5 }}>Ставка</Typography>
          <Typography sx={{ fontWeight: 800, fontSize: "28px", color: "#1F1F1F" }}>{rate}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "#999", fontSize: "12px", mb: 0.5 }}>от {payment} / мес</Typography>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ color: "#999", fontSize: "12px", mb: 0.5 }}>Программа</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#333" }}>{program}</Typography>
      </Box>
    </Paper>
  );
}