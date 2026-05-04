import React, { useState } from 'react';
import { Box, Container, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "Можно ли использовать материнский капитал для первоначального взноса?",
    answer: "Да, возможно. Если средств материнского капитала не хватает для первоначального взноса, то вы можете добавить собственные средства.\n\nПосле рассмотрения пакета документов банк рассчитывает сумму кредита, который он может выдать на данных условиях. После этого возможны два варианта:\n\n— увеличение максимальной суммы кредита на величину материнского капитала с автоматическим уменьшением первоначального взноса;\n\n— использование материнского капитала для первоначального взноса без увеличения суммы кредита."
  },
  {
    question: "Нужно ли привозить бумажные документы или все можно отправить электронно?",
    answer: "Для подачи заявки на ипотеку достаточно сканов или фото всех документов. Анкету на кредит также можно подписать дистанционно."
  },
  {
    question: "Есть ли требование к гражданству?",
    answer: "По стандартным программам требования к гражданству нет. Ипотека с Господдержкой и Семейная ипотека распространяется только на граждан РФ."
  },
  {
    question: "Я работаю неофициально. У меня есть шанс получить ипотеку?",
    answer: "Да, ипотеку получить возможно. Практические все наши банки-партнеры могут рассмотреть заявку на ипотечный кредит по двум документам, без предоставления документов о трудоустройстве. Для этого необходимо заполнить анкету, паспорт и СНИЛС."
  }
];

export default function Faq() {
  const [expanded, setExpanded] = useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' }, mb: 6, gap: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, textTransform: 'uppercase', fontSize: { xs: '28px', md: '36px' } }}>
            ОТВЕТЫ НА <Box component="span" sx={{ color: '#F2A359' }}>ВОПРОСЫ</Box>
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#F2A359', 
              color: '#fff', 
              fontWeight: 600, 
              px: 4, 
              py: 1.5,
              borderRadius: 0,
              boxShadow: 'none',
              textTransform: 'none',
              '&:hover': { bgcolor: '#e0964d', boxShadow: 'none' }
            }}
          >
            Перезвоните мне
          </Button>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `panel${index}`} 
              onChange={handleChange(`panel${index}`)}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: '#F3F4F6',
                '&:before': { display: 'none' },
                borderRadius: '0 !important',
                overflow: 'hidden'
              }}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={{ width: 44, height: 44, bgcolor: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ExpandMoreIcon sx={{ color: '#333', fontSize: '1.5rem' }} />
                  </Box>
                }
                sx={{ 
                  py: 1.5, 
                  px: { xs: 3, md: 5 },
                  '& .MuiAccordionSummary-content': { my: 0 }
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: { xs: '16px', md: '18px' }, pr: 2, color: '#1F1F1F' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 3, md: 5 }, pb: 4, pt: 0 }}>
                {faq.answer.split('\n\n').map((paragraph, i) => (
                  <Typography key={i} sx={{ fontSize: '14px', color: '#444', mb: i === faq.answer.split('\n\n').length - 1 ? 0 : 2, lineHeight: 1.6 }}>
                    {paragraph}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
