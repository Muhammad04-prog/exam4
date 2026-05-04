import React from "react";
import {Box, Container, Typography, TextField, Button, Paper, Stack, Link} from "@mui/material";
import { Mail as MailIcon, YouTube as YouTubeIcon, LinkedIn as LinkedInIcon, WhatsApp as WhatsAppIcon, PhoneEnabled as PhoneEnabledIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SalesOffice from "../../components/SalesOffice/SalesOffice";

const VKIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.608 3H8.392C4.545 3 3 4.545 3 8.392v7.216C3 19.455 4.545 21 8.392 21h7.216C19.455 21 21 19.455 21 15.608V8.392C21 4.545 19.455 3 15.608 3zm2.592 12.87c0 .54-.27 1.08-.81 1.08h-1.62c-1.35 0-2.43-.81-3.24-1.89-.54-.54-1.08-.81-1.62-.81h-.54v2.7h-2.16V9.21c0-.54.27-1.08.81-1.08h1.62c1.35 0 2.43.81 3.24 1.89.54.54 1.08.81 1.62.81h.54v-2.7h2.16v6.66z" />
  </svg>
);

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <>
    <Box 
      component="section" 
      sx={{ 
        bgcolor: "#F8F8F8", 
        py: { xs: 8, md: 12 }, 
        minHeight: "600px", 
        display: "flex", 
        alignItems: "center" 
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "column", lg: "row" }, 
            justifyContent: "space-between", 
            alignItems: "flex-start", 
            gap: 6 
          }}>
          <Box component={motion.div} 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ flex: 1 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "32px", md: "54px" }, 
                fontWeight: 700, 
                color: "#1F1F1F", 
                lineHeight: 1.1, 
                textTransform: "uppercase",
                mb: 4
              }}
            >
              {t('contacts.title')} <Box component="span" sx={{ color: "#E9A05B" }}>WIN DOM</Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: "18px", 
                color: "#333333", 
                fontWeight: 500,
                mb: 4
              }}
            >
              {t('contacts.address')}
            </Typography>
            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={4} 
              sx={{ mb: 4 }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneEnabledIcon sx={{ color: "#E9A05B", fontSize: 24 }} />
                <Typography sx={{ fontSize: "18px", color: "#1F1F1F", fontWeight: 700 }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneEnabledIcon sx={{ color: "#E9A05B", fontSize: 24 }} />
                <Typography sx={{ fontSize: "18px", color: "#1F1F1F", fontWeight: 700 }}>
                  +7 (962) 591-79-60
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ mb: 4 }}>
              <SocialIcon icon={<YouTubeIcon sx={{ fontSize: 20 }} />} />
              <SocialIcon icon={<VKIcon />} />
              <SocialIcon icon={<LinkedInIcon sx={{ fontSize: 20 }} />} />
              <SocialIcon icon={<WhatsAppIcon sx={{ fontSize: 20 }} />} />
            </Stack>
            <Box 
              sx={{ 
                display: "inline-flex", 
                alignItems: "center", 
                gap: 1.5, 
                px: 3, 
                py: 1.5, 
                border: "1px solid rgba(233, 160, 91, 0.4)", 
                borderRadius: "2px", 
                bgcolor: "rgba(255, 255, 255, 0.4)" 
              }}
            >
              <MailIcon sx={{ color: "#E9A05B", fontSize: 24 }} />
              <Typography sx={{ fontSize: "16px", color: "#1F1F1F", fontWeight: 500 }}>
                windom.kazan@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{ width: { xs: "100%", lg: "450px" } }}
          >
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
                borderRadius: "2px" 
              }}
            >
              <Box sx={{ textAlign: "center", mb: 4 }}>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: "32px", 
                    fontWeight: 700, 
                    color: "#1F1F1F", 
                    mb: 0.5 
                  }}
                >
                  {t('contacts.callback')}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ color: "#333333", fontSize: "16px", lineHeight: 1.3 }}
                >
                  {t('contacts.manager_contact')}
                </Typography>
              </Box>
              <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField 
                  fullWidth 
                  placeholder={t('contacts.name_placeholder')} 
                  variant="outlined" 
                  sx={formFieldSx}
                />
                <TextField 
                  fullWidth 
                  placeholder={t('contacts.phone_placeholder')} 
                  variant="outlined" 
                  sx={formFieldSx}
                />
                <Button 
                  fullWidth 
                  variant="contained" 
                  type="submit"
                  sx={{ 
                    bgcolor: "#E9A05B", 
                    color: "white", 
                    fontWeight: 700, 
                    py: 1.5, 
                    borderRadius: "2px", 
                    textTransform: "none", 
                    fontSize: "15px", 
                    mt: 2,
                    "&:hover": { bgcolor: "#d88f4a" },
                    boxShadow: "none"
                  }}
                >
                  {t('contacts.get_consultation')}
                </Button>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: "#333333", 
                    textAlign: "center", 
                    mt: 3, 
                    fontSize: "11px", 
                    lineHeight: 1.3 
                  }}
                >
                  {t('contacts.consent')} <Link sx={{ color: "#E9A05B", textDecoration: "none", cursor: "pointer" }}>согласие на обработку персональных данных</Link>
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
    <SalesOffice />
    </>
  );
}

const formFieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#F3F3F3",
    borderRadius: "2px",
    "& fieldset": { border: "none" },
    "& input": { 
      p: 2, 
      fontSize: "14px", 
      color: "#333",
      "&::placeholder": { color: "#999999", opacity: 1 }
    }
  }
};
function SocialIcon({ icon }) {
  return (
    <Box 
      sx={{ 
        width: 40, 
        height: 40,   
        display: "flex",   
        alignItems: "center",   
        justifyContent: "center",   
        border: "1px solid #CCCCCC",   
        color: "#666666",  
        borderRadius: "2px",  
        cursor: "pointer",  
        transition: "all 0.2s",
        "&:hover": { borderColor: "#E9A05B", color: "#E9A05B" } 
      }}
    >
      {icon}
    </Box>
  );
}