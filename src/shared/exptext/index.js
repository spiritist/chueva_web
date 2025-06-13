// components/ExpSection.js
import React, { memo } from 'react';
import { Row, Col, Card, Typography } from 'antd'; // Row и Col можно будет убрать, если полностью перейдем на flex
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const ExpSection = () => (
  <section id="experience" className="bg-gray-50 py-8 sm:py-12 md:py-4">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Заголовок секции */}
      <div className="flex justify-center sm:justify-end mb-6 sm:mb-8">
        <Title
          level={2}
          className="text-2xl sm:text-3xl md:text-[2.25rem] font-serif mb-0 text-center sm:text-right" // Адаптивный размер и выравнивание
          style={{
            fontFamily: 'Georgia Pro, serif',
            // fontSize и margin убраны, управляются Tailwind
          }}
        >
          Личный опыт
        </Title>
      </div>

      {/* Карточка с контентом */}
      <Card
        bordered
        // hoverable // Убрал hoverable, если не нужен эффект при наведении, style={{ cursor: 'default' }} тоже можно убрать
        className="rounded-lg shadow-sm overflow-hidden" // overflow-hidden на карточке на всякий случай
        bodyStyle={{ padding: '1.5rem sm:2rem' }} // Адаптивный padding
      >
        {/* Используем flex для управления колонками */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 lg:space-x-8">
          {/* Текстовая часть - ставим ее первой на мобильных */}
          <div className="w-full md:w-2/3 lg:w-3/5 mb-6 md:mb-0 text-center md:text-left"> {/* Адаптивная ширина и выравнивание текста */}
            <Title
              level={1}
              className="text-3xl sm:text-2xl lg:text-4xl !leading-tight mb-3 sm:mb-4" // Адаптивный размер шрифта
              style={{
                fontFamily: 'Georgia Pro, serif',
                // lineHeight и marginBottom убраны
              }}
            >
              Нахожусь под супервизией еженедельно.
            </Title>
            <Paragraph
              className="text-xl sm:text-2xl lg:text-4xl !leading-tight text-zinc-800 m-0" // Адаптивный размер, цвет, убрали w-120
              style={{
                fontFamily: 'Georgia Pro, serif',
                // color, margin, lineHeight убраны
              }}
            >
              Прохожу личную терапию с 2021 года.
            </Paragraph>
          </div>

          {/* Изображение - будет под текстом на мобильных */}
          <div className="w-full md:w-1/3 lg:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-85 xl:h-85 xl:w-85 rounded-lg overflow-hidden"> {/* Адаптивные размеры для изображения */}
              <Image
                src="/Images/exp.jpg" // ваш путь
                alt="Личный опыт"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default memo(ExpSection);