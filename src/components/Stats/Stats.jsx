import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const statsData = [
  { num: "10", text: "Лет успешного опыта продаж загородной недвижимости" },
  { num: "1051", text: "Га - площадь наших комфортных посёлков европейского класса" },
  { num: "5063", text: "Счастливых владельцев загородных домов" },
];

export default function Stats() {
  return (
    <Box sx={{ py: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, 
            gap: 4 
          }}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Box sx={{ borderTop: "1px solid #D1A36E", pt: 4 }}>
                <Typography
                  variant="h2"
                  sx={{ 
                    fontWeight: 800, 
                    color: "#D1A36E", 
                    mb: 2, 
                    fontSize: { xs: "48px", md: "64px" },
                    lineHeight: 1
                  }}
                >
                  {stat.num}
                </Typography>
                <Typography variant="body1" sx={{ color: "#333", lineHeight: 1.6, maxWidth: "280px" }}>
                  {stat.text}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
