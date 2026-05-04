import { Box } from "@mui/material";
import Hero from "../../components/Hero/Hero";
import Stats from "../../components/Stats/Stats";
import ProjectsGrid from "../../components/ProjectsGrid/ProjectsGrid";
import About from "../../components/About/About";
import Architecture from "../../components/Architecture/Architecture";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import Mortgage from "../../components/Mortgage/Mortgage";
import Team from "../../components/Team/Team";
import Testimonials from "../../components/Testimonials/Testimonials";
import News from "../../components/News/News";
import SalesOffice from "../../components/SalesOffice/SalesOffice";
import MediaSection from "../../components/Media/Media";

import React, { useState, useEffect } from "react";
import Loading from "../../components/Loader/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Hero />
      <Stats />
      <About />
      <Architecture />
      <ProjectsSlider />
      <ProjectsGrid />
      <Mortgage />
      <MediaSection />
      <Team />
      <Testimonials />
      <News />
      <SalesOffice />
    </Box>
  );
}