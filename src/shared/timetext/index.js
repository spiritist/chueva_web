// components/TimeSection.js
import React, { memo } from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

const TimeSection = () => (
  <section id="time" className="bg-gray-50"> {/* Увеличил вертикальные отступы для лучшего вида */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Используем flex-col для мобильных и flex-row для md и выше */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-0 lg:space-x-0">
        {/* Левая колонка: изображение */}
        <Col xs={24} md={10} className="flex justify-center mb-6 md:mb-0 md:justify-start">
          {/* Адаптивные размеры для изображения */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-90 lg:h-90"> {/* w-120 h-120 только для lg */}
            <Image
              src="/Images/time.png"
              alt="Иконка часов"
              fill
              className="object-contain"
            />
          </div>
        </Col>

        {/* Правая колонка: карточка с текстом */}
        <Col xs={24} md={14} className="w-full"> {/* w-full чтобы занимала доступную ширину */}
          <Card
            bordered
            hoverable
            style={{ cursor: 'default' }}
            className="rounded-lg shadow-sm w-full h-full lg:mt-10" // w-full уже есть, h-full для выравнивания если нужно
            bodyStyle={{
              padding: '1.5rem', // Можно сделать адаптивным '1rem sm:1.5rem'
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Если нужно выровнять контент по центру вертикально
            }}
          >
            <Title
              level={3}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl !leading-tight mb-2 sm:mb-4 text-center sm:text-left" // Адаптивный размер шрифта и !leading-tight
              style={{ // Стили, которые не легко задать через Tailwind, оставляем
                fontFamily: 'Georgia Pro, serif',
                fontWeight: 400, // Tailwind: font-normal
                color: '#1F1F1F', // Tailwind: text-zinc-800 (пример)
                // lineHeight: 1.2, // Задано через className !leading-tight
                // marginBottom: '1rem', // Задано через className
                // textAlign: 'left', // Задано через className
              }}
            >
              <span
                className="block font-semibold text-black md:text-2xl lg:text-4xl" // Tailwind классы для стилизации
              // style={{ color: '#000000', fontWeight: 600, display: 'block' }}
              >
                <span style={{ fontStyle: 'italic' }}> Типовая сессия длится 60 минут</span>,
              </span>
              <span
                className="block font-light mt-1 sm:mt-2" // Tailwind классы
                style={{ color: '#333333' /* fontWeight: 300 - перекрывается font-light */ }}
              >
                первая сессия может составить 90 минут.
              </span>
            </Title>

            <Divider className="my-2 sm:my-4" style={{ borderColor: '#DDD' }} />

            <Paragraph
              className="text-base sm:text-lg md:text-xl lg:text-[1.5rem] text-center sm:text-left m-0" // Адаптивный размер шрифта
              style={{
                fontFamily: 'Georgia Pro, serif',
                color: '#333333',
                // margin: 0, // Задано через className m-0
                // textAlign: 'left', // Задано через className
              }}
            >
              Количество сессий зависит от запроса и крайне индивидуально.
            </Paragraph>
          </Card>
        </Col>
      </div>
    </div>
  </section>
);

export default memo(TimeSection);