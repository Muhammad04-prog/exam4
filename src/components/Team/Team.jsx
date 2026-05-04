import { Box, Container, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import team1 from "../../assets/images/Rectangle 92.png";
import team2 from "../../assets/images/Rectangle 93.png";
import team3 from "../../assets/images/Rectangle 94.png";
import team4 from "../../assets/images/Rectangle 94 (1).png";

const teamMembers = [
  {
    name: "Игорь Захаров",
    role: "Руководитель проекта",
    img: team1,
  },
  {
    name: "Луиза Назипова",
    role: "Главный архитектор",
    img: team2,
  },
  {
    name: "Мухаримов Расул",
    role: "Заместитель руководителя проекта",
    img: team3,
  },
  {
    name: "Ваганов Дмитрий",
    role: "Заместитель руководителя проекта",
    img: team4,
  },
];

export default function Team() {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "28px", md: "40px" },
              textTransform: "uppercase",
            }}
          >
            НАША{" "}
            <Box
              component="span"
              sx={{ color: "#F2A95E", fontStyle: "italic" }}
            >
              КОМАНДА
            </Box>
          </Typography>
          <IconButton
            sx={{
              border: "2px solid #F2A95E",
              color: "#F2A95E",
              width: 48,
              height: 48,
              "&:hover": { bgcolor: "#F2A95E", color: "#fff" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 6 },
            mb: 6,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              flex: 1,
              color: "#555",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            Сотрудники Wisdom Construction - это профессионалы, сочетающие в себе
            энтузиазм и опыт, энергичные, творческие и увлеченные люди.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              flex: 1,
              color: "#555",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            Наша команда состоит из молодых профессионалов, готовых преодолевать
            сложности любого уровня. Успех отдельно взятого сотрудника - это
            составляющая часть успеха всей компании.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {teamMembers.map((member, i) => (
            <Box
              key={i}
              sx={{
                width: { xs: "calc(50% - 12px)", md: "calc(25% - 18px)" },
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: "250px", md: "350px" },
                  borderRadius: "4px",
                  overflow: "hidden",
                  mb: 2,
                  "&:hover img": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </Box>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, fontSize: "15px", mb: 0.3 }}
              >
                {member.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#888", fontSize: "13px" }}
              >
                {member.role}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
