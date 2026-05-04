import React from 'react';
import { Box, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import MediaSection from '../../components/Media/Media';
import SmiCard from '../../components/Media/SmiCard';

import img1 from '../../assets/images/keys.png';
import img2 from '../../assets/images/about-house.png';
import img3 from '../../assets/images/p1.png';
import img4 from '../../assets/images/unique-arch.png';

const articlesData = [
  {
    id: 1,
    image: img1,
    title_ru: 'Где лежат ключи от «рая»?',
    title_en: 'Where are the keys to "paradise"?',
    text_ru: 'Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.',
    text_en: 'Trends in suburban real estate in Kazan are moving into a civilized channel: the times of "Shanghai" with chaotic development are over, experts say. And today the buyer is ready to overpay even 30% above the market, just to settle in a cottage settlement with its own philosophy, strictly maintained concept and developed infrastructure.'
  },
  {
    id: 2,
    image: img2,
    title_ru: 'На рынке новый тренд – свой дом в черте города',
    title_en: 'A new trend on the market – your own house in the city',
    text_ru: 'Тенденции в загородной недвижимости Казани устремляются в цивилизованное русло: времена «Шанхая» с хаотичной застройкой прошли, отмечают эксперты. И сегодня покупатель готов переплатить и 30% выше рынка, лишь бы поселиться в коттеджном поселке со своей философией, строго выдержанной концепцией и развитой инфраструктурой.',
    text_en: 'Trends in suburban real estate in Kazan are moving into a civilized channel: the times of "Shanghai" with chaotic development are over, experts say. And today the buyer is ready to overpay even 30% above the market, just to settle in a cottage settlement with its own philosophy, strictly maintained concept and developed infrastructure.'
  },
  {
    id: 3,
    image: img3,
    title_ru: 'На пути к расцвету субурбии: что ждет рынок ИЖС в 2021 году?',
    title_en: 'On the way to the rise of suburbia: what awaits the residential real estate market in 2021?',
    text_ru: 'Продажи земельных участков и домов в пригороде без господдержки, доступной ипотеки и программы комплексного развития — курс в никуда. Правительство РТ сдерживает перевод сельхозземель под ИЖС, но наращивает его долю в общем объеме ввода жилья.',
    text_en: 'Sales of land plots and houses in the suburbs without state support, affordable mortgages and a comprehensive development program are a course to nowhere. The Government of the Republic of Tatarstan restrains the transfer of agricultural land to housing development, but increases its share in the total volume of housing commissioning.'
  },
  {
    id: 4,
    image: img4,
    title_ru: 'Жилье для счастливой жизни: успех кроется в мелочах',
    title_en: 'Housing for a happy life: success lies in the details',
    text_ru: 'Комфортная среда и развитая инфраструктура — одно из главных отличий современного жилья от «вторички» прошлого века. Сегодня человек выбирает не просто квадратные метры, а новый стиль жизни.',
    text_en: 'A comfortable environment and developed infrastructure are one of the main differences between modern housing and the "secondary housing" of the last century. Today, a person chooses not just square meters, but a new lifestyle.'
  }
];

export default function Smi() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language === 'en' ? 'en' : 'ru';

  return (
    <Box sx={{ bgcolor: 'white', pb: 10 }}>
      <MediaSection />
      <Container maxWidth="lg" sx={{ mt: 6, px: { xs: 2, md: 8, lg: 12 } }}>
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {articlesData.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SmiCard 
                id={article.id}
                image={article.image}
                title={article[`title_${currentLang}`]}
                text={article[`text_${currentLang}`]}
              />
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  )
}