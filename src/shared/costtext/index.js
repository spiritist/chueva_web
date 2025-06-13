// components/CostSection.js
import React, { memo } from 'react';
import { Row, Col, Card, Typography } from 'antd'; // Row и Col здесь хорошо работают для структуры 2 колонок

const { Title, Paragraph } = Typography;

const COST_OPTIONS = [
  {
    type: 'Онлайн',
    titleLines: ['Индивидуальная', 'консультация'],
    title: 'Индивидуальная консультация',
    price: '3000 ₽/60 мин',
  },
  {
    type: 'Онлайн',
    titleLines: ['Семейная', 'консультирование / для пары'], // Для многострочного заголовка
    price: '4000 ₽/60 мин',
  },
];

const CostSection = () => (
  <section id="cost" className="bg-gray-50 py-8 sm:py-12 md:py-4">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Добавлены общие px */}
      {/* Заголовок секции */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-end mb-6 sm:mb-8">
        <Title
          level={2}
          className="text-2xl sm:text-3xl md:text-4xl font-serif mb-0 text-center sm:text-right"
        >
          Стоимость сессии
        </Title>
      </div>

      {/* Две колонки с вариантами */}
      <Row gutter={[16, 24]} className="items-stretch"> {/* gutter меньше на мобильных, mb-6 между карточками на мобильных */}
        {COST_OPTIONS.map((option, index) => (
          <Col xs={24} md={12} key={index} className="flex justify-center"> {/* md:mb-0 чтобы на десктопе не было лишнего отступа */}
            <div className="relative w-full max-w-sm sm:max-w-md pt-6 flex flex-col items-center"> {/* max-w-sm для мобильных, pt-6 меньше */}
              {/* Плашка “Онлайн” */}
              <span
                className="absolute top-0 right-0 text-xs border border-black rounded px-2 py-0.5 bg-transparent" // Tailwind классы
                style={{ fontFamily: 'Georgia Pro, serif' }}
              >
                {option.type}
              </span>

              {/* Заголовок варианта */}
              <Title
                level={3}
                className="text-xl sm:text-2xl md:text-4xl font-normal text-zinc-800 mb-3 sm:mb-4 text-center leading-tight" // Адаптивный размер, цвет Tailwind
                style={{ fontFamily: 'Georgia Pro, serif' }}
              >
                {option.titleLines ? (
                  option.titleLines.map((line, i) => <span key={i} className="block">{line}</span>)
                ) : (
                  option.title
                )}
              </Title>

              {/* Карточка с ценой */}
              <Card
                bordered
                // hoverable // Убрал
                // style={{ cursor: 'default' }} // Убрал
                className="rounded-lg shadow-sm w-full h-24"
              >
                <Paragraph
                  className="text-3xl sm:text-4xl md:text-4xl text-gray-800 m-0 text-center leading-nones" // Адаптивный размер, цвет Tailwind
                  style={{ fontFamily: 'Georgia Pro, serif' }}
                >
                  {option.price}
                </Paragraph>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default memo(CostSection);