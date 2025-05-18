// components/ReqSection.js
import React, { memo } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import Image from 'next/image';

const { Title, Paragraph } = Typography;

// Можно вынести карточку запроса в отдельный компонент для чистоты
const RequestItem = ({ iconSrc, title, items }) => (
    <div className="w-full md:w-1/3 px-2 sm:px-4 mb-6 md:mb-0"> {/* Адаптивные отступы и ширина */}
        <div className="flex items-center mb-3 sm:mb-4">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 mr-2 sm:mr-3">
                <Image
                    src={iconSrc}
                    alt={title}
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <Paragraph
                className="text-lg sm:text-xl font-bold m-0" // Адаптивный шрифт
                style={{ fontFamily: 'Georgia Pro, serif' }}
            >
                {title}
            </Paragraph>
        </div>
        <ul
            className="text-sm sm:text-base list-disc pl-5 sm:pl-6" // list-disc для маркеров, адаптивные размеры
            style={{
                fontFamily: 'Georgia Pro, serif',
                lineHeight: 1.4,
                // margin: 0, // Tailwind m-0
                // paddingLeft: '1.5rem', // Заменено на pl-5/pl-6 и list-disc
            }}
        >
            {items.map((item, index) => (
                <li key={index} className="mb-1">{item}</li>
            ))}
        </ul>
    </div>
);

// Разделитель колонок, который будет виден только на md и выше
const ColumnSeparator = () => (
    <div className="hidden md:flex items-stretch mx-2 sm:mx-4"> {/* mx-2 sm:mx-4 для отступов */}
        <svg
            width="6" // Можно сделать чуть тоньше, если нужно, например 2 или 4
            height="100%"
            viewBox="0 0 6 100" // Адаптируем viewBox если меняем strokeWidth
            preserveAspectRatio="none" // Важно для растягивания по высоте
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block' }}
        >
            {/* Можно использовать одну линию или упростить SVG */}
            <line
                x1="3" y1="0" x2="3" y2="100"
                stroke="#000"
                strokeWidth="1" // Сделаем тоньше для более изящного вида
                opacity="0.3"   // Сделаем полупрозрачнее
            />
        </svg>
    </div>
);


const ReqSection = () => (
    <section id="request" className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Row>
                <Col span={24} className="flex justify-center sm:justify-end mb-6 sm:mb-8">
                    <Title level={2} className="text-3xl sm:text-4xl font-serif mb-0 text-center sm:text-right">
                        Запросы
                    </Title>
                </Col>
            </Row>

            <Card
                bordered
                className="rounded-lg shadow-sm"
                bodyStyle={{ padding: '1.5rem sm:2rem' }} // Адаптивный padding
            >
                {/* flex-col на мобильных, md:flex-row на десктопе */}
                <div className="flex flex-col md:flex-row md:items-stretch">
                    <RequestItem
                        iconSrc="/icons/heart.png"
                        title="Отношения"
                        items={[
                            'Не могу построить отношения',
                            'Проблемы в отношениях с партнёром',
                            'Проблемы в отношениях в родительской семье',
                        ]}
                    />
                    <ColumnSeparator /> {/* Разделитель будет виден только на md+ */}
                    <RequestItem
                        iconSrc="/icons/confusion3.png"
                        title="Сложные состояния"
                        items={[
                            'Тревожные и депрессивные состояния',
                            'Страхи, руминации',
                            'Преодоление утраты и проживание кризисных ситуаций',
                        ]}
                    />
                    <ColumnSeparator /> {/* Разделитель будет виден только на md+ */}
                    <RequestItem
                        iconSrc="/icons/career.png"
                        title="Карьера"
                        items={['Выгорание', 'Смена карьерной траектории']}
                    />
                </div>
            </Card>
        </div>
    </section>
);

export default memo(ReqSection);