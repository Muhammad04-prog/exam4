import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewsList from "./NewsList";
import NewsDetail from "./NewsDetail";

export default function About() {
  return (
    <Routes>
      <Route path="" element={<NewsList />} />
      <Route path="news" element={<NewsList />} />
      <Route path="news/detail" element={<NewsDetail />} />
      <Route path="*" element={<Navigate to="" replace />} />
    </Routes>
  );
}
