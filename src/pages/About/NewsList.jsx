import React, { useState } from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Button, 
  Grid,
  Link
} from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router-dom";

const years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

const newsItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    title: "10 причин, почему вам нужно поменять квартиру на таунхаус",
    date: "01.06.2022",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    title: "Интерьерные решения от наших дизайнеров",
    date: "11.06.2021",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595435064212-c441721aaac1?q=80&w=1000&auto=format&fit=crop",
    title: "Открытие теннисного корта в коттеджном поселке",
    date: "01.06.2023",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
    title: "Новые проекты загородных домов 2023",
    date: "01.06.2022",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1000&auto=format&fit=crop",
    title: "Преимущества жизни за городом",
    date: "01.06.2023",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1595435064212-c441721aaac1?q=80&w=1000&auto=format&fit=crop",
    title: "Открытие теннисного корта в коттеджном поселке",
    date: "01.06.2017",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  },
    {
    id: 7,
    image: "https://images.unsplash.com/photo-1595435064212-c441721aaac1?q=80&w=1000&auto=format&fit=crop",
    title: "Открытие теннисного корта в коттеджном поселке",
    date: "01.06.2018",
    snippet: "По данным Всероссийского центра изучения общественного мнения — 68% граждан хотели бы переехать в частный дом."
  }
];

export default function NewsList() {
  const [activeYear, setActiveYear] = useState("2023");
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 4, textTransform: "uppercase" }}>Новости</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 6, flexWrap: "wrap", gap: 1 }}>
          {years.map((year) => (
            <Button
              key={year}
              onClick={() => setActiveYear(year)}
              variant="contained"
              sx={{
                bgcolor: activeYear === year ? "#E9A05B" : "#F9F9F9",
                color: activeYear === year ? "#fff" : "#666",
                boxShadow: "none",
                fontWeight: 600,
                px: 3,
                "&:hover": {
                  bgcolor: activeYear === year ? "#d88f4a" : "#eee",
                  boxShadow: "none",
                }
              }}
            >
              {year}
            </Button>
          ))}
        </Stack>
        <Stack spacing={4}>
          {newsItems
            .filter((item) => item.date.endsWith(activeYear))
            .map((item) => (
              <Box 
                key={item.id}
              sx={{ 
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                gap: 4,
                p: 2,
                border: "1px solid #F1F1F1",
                borderRadius: "4px",
                transition: "all 0.3s",
                "&:hover": { boxShadow: "0 10px 30px rgba(0,0,0,0.05)", borderColor: "#E9A05B" }
              }}
            >
              <Box 
                sx={{ 
                  width: { xs: "100%", md: "400px" }, 
                  height: "240px", 
                  overflow: "hidden", 
                  borderRadius: "2px",
                  flexShrink: 0
                }}
              >
                <Box 
                  component="img"
                  src={item.image}
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", py: 1 }}>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", color: "#E9A05B", mb: 2 }}>
                  <AccessTimeIcon sx={{ fontSize: 16 }} />
                  <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>{item.date}</Typography>
                </Stack>
                <Typography sx={{ color: "#666", mb: 3, lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {item.snippet}
                </Typography>
                <Link 
                  component="button"
                  onClick={() => navigate("/about/news/detail")}
                  sx={{ 
                    color: "#E9A05B", 
                    fontWeight: 700, 
                    textDecoration: "none", 
                    fontSize: "14px",
                    width: "fit-content",
                    border: "none",
                    bgcolor: "transparent",
                    p: 0,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" }
                  }}
                >
                  Читать далее
                </Link>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
