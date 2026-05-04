import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navlists from "../NavLists/Navlists";
import { useTranslation } from "react-i18next";
import {AppBar, Toolbar, Button, Typography, Box, Container, IconButton, Drawer, List, ListItem, ListItemText, Stack, Menu, MenuItem
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import CallbackModal from "../CallbackModal/CallbackModal";
import logoImg from "../../assets/images/windom logo 4.png";

export default function Header() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLangMenu = (event) => setAnchorEl(event.currentTarget);
  const handleLangClose = () => setAnchorEl(null);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleLangClose();
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="sticky" 
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        sx={{ 
          bgcolor: "rgba(255, 255, 255, 0.95)", 
          backdropFilter: "blur(8px)",
          color: "#333", 
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)", 
          borderBottom: "1px solid #f0f0f0",
          py: 0.5,
          zIndex: 1100
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box 
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={logoImg} 
                alt="Wisdom Construction" 
                style={{ height: "45px", objectFit: "contain" }} 
              />
            </Box>
            <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
              <Navlists />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 3 } }}>
              <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ fontSize: 20, color: "#D1A36E" }} />
                <Typography variant="body1" sx={{ fontWeight: 600, fontSize: "15px" }}>
                  +7 (962) 555-25-25
                </Typography>
              </Box>
              
              <Button
                variant="outlined"
                onClick={() => setModalOpen(true)}
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  borderColor: "#D1A36E",
                  color: "#333",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  borderRadius: "4px",
                  "&:hover": { 
                    bgcolor: "#D1A36E", 
                    borderColor: "#D1A36E",
                    color: "#fff" 
                  },
                }}
              >
                Заказать звонок
              </Button>
              <IconButton
                onClick={handleLangMenu}
                sx={{ 
                  color: "#D1A36E", 
                  border: "1px solid #D1A36E44", 
                  borderRadius: "4px",
                  p: 0.8
                }}
              >
                <LanguageIcon sx={{ fontSize: 20 }} />
                <Typography sx={{ ml: 0.5, fontWeight: 700, fontSize: "14px" }}>
                  {i18n.language.toUpperCase()}
                </Typography>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleLangClose}
              >
                <MenuItem onClick={() => changeLanguage('ru')}>Русский</MenuItem>
                <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
              </Menu>

              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { lg: "none" }, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiPaper-root": { width: "100%", maxWidth: "300px", p: 3 },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Navlists mobile onSelect={handleDrawerToggle} />
        </Box>
        <Stack spacing={3}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <PhoneIcon sx={{ color: "#D1A36E" }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              +7 (962) 555-25-25
            </Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              setModalOpen(true);
              handleDrawerToggle();
            }}
            sx={{
              bgcolor: "#D1A36E",
              color: "#fff",
              py: 1.5,
              fontWeight: 700,
              boxShadow: "none",
              "&:hover": { bgcolor: "#b88e5d" }
            }}
          >
            Заказать звонок
          </Button>
        </Stack>
      </Drawer>
      <CallbackModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}