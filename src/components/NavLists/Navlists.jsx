import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Menu, MenuItem, Box, Collapse, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const navLists = [
  {
    key: "nav.projects",
    children: [
      { path: "/izum", title: "Изумрудный Village" },
      { path: "/iqclub", title: "IQ CLUB" },
      { path: "/usadi", title: "Усады" },
      { path: "/zim", title: "Зимняя горка" },
      { path: "/konstant", title: "Константиновка" }, 
      { path: "/projects", key: "nav.all_projects"},
    ],
  },
  {
    key: "nav.houses",
    children: [
      { path: "/one", key: "nav.one_story" },
      { path: "/two", key: "nav.two_story" },
      { path: "/town", key: "nav.townhouses" },
      { path: "/houses", key: "nav.all_houses" },
    ],
  },
  { path: "/ipoteka", key: "nav.mortgage" },
  {
    key: "nav.about",
    children: [
      { path: "/about", key: "nav.news" },
      { path: "/smi", key: "nav.smi" },
      { path: "/team", key: "nav.team" },
    ],
  },
  { path: "/contacts", key: "nav.contacts" },
];

const linkStyle = {
  fontWeight: 500,
  color: "#333",
  textDecoration: "none",
  fontSize: "14px",
  "&:hover": { color: "#D1A36E" },
};

export default function Navlists({ mobile, onSelect }) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState("");

  const handleClick = (event, title) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(title);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
    if (onSelect) onSelect();
  };

  const handleMobileClick = (title) => {
    setOpenSubmenu(openSubmenu === title ? "" : title);
  };

  if (mobile) {
    return (
      <List sx={{ width: "100%" }}>
        {navLists.map((nav) => (
          <Box key={nav.key || nav.title}>
            {nav.path ? (
              <ListItem disablePadding>
                <ListItemButton 
                  component={NavLink} 
                  to={nav.path} 
                  onClick={onSelect}
                  sx={{ "&.active": { color: "#D1A36E", fontWeight: 700 } }}
                >
                  <ListItemText primary={nav.key ? t(nav.key) : nav.title} primaryTypographyProps={{ fontWeight: 600 }} />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItemButton onClick={() => handleMobileClick(nav.key)}>
                  <ListItemText primary={nav.key ? t(nav.key) : nav.title} primaryTypographyProps={{ fontWeight: 600 }} />
                  {openSubmenu === nav.key ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openSubmenu === nav.key} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {nav.children.map((child) => (
                      <ListItemButton
                        key={child.key || child.title}
                        component={NavLink}
                        to={child.path}
                        onClick={onSelect}
                        sx={{ pl: 4, "&.active": { color: "#D1A36E", fontWeight: 600 } }}
                      >
                        <ListItemText primary={child.key ? t(child.key) : child.title} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </Box>
        ))}
      </List>
    );
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      {navLists.map((nav) =>
        nav.path ? (
          <NavLink
            key={nav.key || nav.title}
            to={nav.path}
            style={({ isActive }) => ({
              ...linkStyle,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? "#D1A36E" : "#333",
            })}
          >
            {nav.key ? t(nav.key) : nav.title}
          </NavLink>
        ) : (
          <Box key={nav.key || nav.title}>
            <Button
              onClick={(e) => handleClick(e, nav.key)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: activeMenu === nav.key ? "#D1A36E" : "#333",
                textTransform: "none",
                fontWeight: 500,
                fontSize: "14px",
                p: 0,
                minWidth: "auto",
                "&:hover": { backgroundColor: "transparent", color: "#D1A36E" },
              }}
            >
              {nav.key ? t(nav.key) : nav.title}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && activeMenu === nav.key}
              onClose={handleClose}
              elevation={2}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: "8px",
                  mt: 1,
                  minWidth: 160,
                },
              }}
            >
              {nav.children.map((child) => (
                <MenuItem
                  key={child.key || child.title}
                  onClick={handleClose}
                  component={NavLink}
                  to={child.path}
                  sx={{
                    fontSize: "14px",
                    py: 1,
                    "&.active": { color: "#D1A36E", fontWeight: 600 },
                  }}
                >
                  {child.key ? t(child.key) : child.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )
      )}
    </Box>
  );
}