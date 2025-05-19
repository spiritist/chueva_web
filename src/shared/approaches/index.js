// components/ApproachesSection.js
import React, { memo } from 'react';
import { Row, Col, Card, Typography } from 'antd'; // Row и Col здесь также подходят

const { Title, Paragraph } = Typography;

const approachesData = [
  {
    title: 'Системная семейная терапия',
    acronym: 'ССТ',
    text: `Мы исследуем семейную историю, смотрим генограмму семьи, меняем повторяющиеся проблемные сценарии. Подходит для семей, пар и отдельных людей.`,
  },
  {
    title: 'Ориентированная на решение краткосрочная терапия',
    acronym: 'ОРКТ',
    text: `Во время работы мы фокусируемся не на проблеме, а на целях, ресурсах и уже имеющемся опыте. Вместе ищем работающие стратегии и строим путь к желаемым изменениям — через конкретные, посильные шаги.`,
  },
];

const ApproachesSection = () => (
  <section id="approaches" className="bg-gray-50 sm:py-4 md:py-2"> {/* Увеличен pb для согласованности */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Добавлены общие px */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-end mb-6 sm:mb-8">
        <Title
          level={2}
          className="text-2xl sm:text-3xl md:text-4xl font-serif mb-0 text-center sm:text-right"
        >
          Подходы в работе
        </Title>
      </div>

      {approachesData.map(({ title, acronym, text }, idx) => (
        <div
          key={acronym}
          className="flex flex-col text-center md:text-left md:flex-row md:items-start md:space-x-8 mb-8 sm:mb-12 last:mb-0" // Замена Row на flex, адаптивные отступы
        >
          {/* Левая колонка с заголовком */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Title
              level={2} // Уровень можно оставить 2 или сделать 3 для семантики, стили управляются классами
              style={{ fontFamily: 'Georgia, serif' }}
              className="text-2xl sm:text-3xl text-gray-900 mb-2 md:mb-0 leading-tight" // Адаптивный размер, уменьшен mb
            >
              {title}{' '}
              <span className="font-semibold">({acronym})</span>
            </Title>
          </div>

          {/* Правая колонка с карточкой */}
          <div className="w-full md:w-2/3 flex md:justify-end">
            <Card
              bordered
              hoverable // Убрал
              style={{ cursor: 'default' }} // Убрал
              className={`
                rounded-lg shadow-sm
                w-full 
                max-w-full md:max-w-[900px]
              `}
              bodyStyle={{ padding: '1rem sm:1.5rem' }} // Адаптивный padding
            >
              <Paragraph className="text-base sm:text-lg text-gray-700 font-georgia mb-0 leading-relaxed">
                {text}
              </Paragraph>
            </Card>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default memo(ApproachesSection);