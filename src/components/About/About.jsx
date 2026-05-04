import { Box, Typography, Container, Stack, IconButton } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PublicIcon from "@mui/icons-material/Public";
import { motion } from "framer-motion";
import aboutHouse from "../../assets/images/about-house.png";

export default function About() {
  return (
    <Box sx={{ py: 10, bgcolor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, 
            gap: 8, 
            alignItems: "center" 
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, mb: 4, display: "flex", alignItems: "center", gap: 1 }}
            >
              <Box component="span" sx={{ color: "#D1A36E" }}>○</Box> О КОМПАНИИ
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mb: 3, lineHeight: 1.8 }}>
              Компания <Box component="span" sx={{ color: "#D1A36E", fontWeight: 600 }}>Wisdom Construction</Box> основана в 2012 году. Основным направлением девелопера является строительство загородных домов и таунхаусов "под ключ".
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mb: 5, lineHeight: 1.8 }}>
              Более 11 лет Wisdom Construction работает на строительном рынке недвижимости Казани и Республики Татарстан и как подрядная организация и, как самостоятельный застройщик.
            </Typography>
            
            <Stack direction="row" spacing={2}>
              {[YouTubeIcon, PublicIcon, LinkedInIcon, InstagramIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    color: "#333",
                    "&:hover": { bgcolor: "#D1A36E", color: "#fff", borderColor: "#D1A36E" }
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 15,
                left: 15,
                width: "100%",
                height: "100%",
                border: "1px solid #D1A36E",
                zIndex: 0,
              }}
            />
            <Box
              component="img"
              src={aboutHouse}
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                position: "relative",
                zIndex: 1,
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
