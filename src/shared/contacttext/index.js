import React, { memo } from 'react';
import { Row, Col, Typography, Button } from 'antd'; // Ant Design Grid
import Image from 'next/image'; // Next.js Image

const { Title, Text } = Typography;

const ContactSection = () => (
    <section id="contact" className="pb-12 sm:py-12 md:py-20 lg:py-24"> {/* Изменен фон на белый и отступы */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Используем Ant Design Row/Col для структуры как на макете FullHD.
          На мобильных (xs) колонки будут идти одна под другой по умолчанию.
          flex-col-reverse md:flex-row был для другого порядка, вернемся к стандартному.
      */}
            <Row gutter={[48, 48]} align="middle" className="md:items-stretch"> {/* md:items-stretch чтобы колонки были одной высоты на md+ */}

                {/* Левая колонка с фото (на FullHD) */}
                <Col xs={24} md={10} lg={10} className="sm:mb-8 md:mb-0">
                    {/* Контейнер для изображения:
              - На мобильных: будет над текстом (естественный порядок для xs в Row/Col)
              - Задаем aspectRatio для корректного отображения с fill
              - maxWidth, чтобы не было слишком большим на мобильных, но могло расти на десктопе.
          */}
                    <div
                        className="relative hidden md:block w-full max-w-[300px] sm:max-w-xs md:max-w-sm lg:max-w-full mx-auto md:mx-0 rounded-lg overflow-hidden shadow-xl"
                        style={{ aspectRatio: '3/4' }} // Пропорции как на макете
                    >
                        <Image
                            src="/Images/contact.png" // Убедитесь, что путь к фото правильный
                            alt="Ульяна Чуева - Контакты" // Более описательный alt
                            fill
                            className="object-cover" // object-cover сохранит пропорции и заполнит контейнер
                            priority // Можно добавить, если это важное изображение
                        />
                    </div>
                </Col>

                {/* Правая колонка с текстом и кнопкой (на FullHD) */}
                <Col xs={24} md={14} lg={14} className="flex flex-col justify-center text-center md:text-left md:pl-8 lg:pl-16">
                    {/* justify-center для вертикального центрирования контента в колонке, если она выше контента */}

                    <Title
                        level={1} // Используем h1 для главного заголовка секции для семантики
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] !leading-tight sm:mb-2 md:mb-3"
                        // Используем !leading-tight для Tailwind или style={{lineHeight: 1.2}}
                        style={{ fontFamily: 'Georgia Pro, serif', color: '#2C2C2C', fontWeight: 400 }}
                    >
                        Со мной можно созвониться
                        <br />
                        на <span className="whitespace-nowrap">10 минут</span>
                    </Title>

                    <Title
                        level={2} // Используем h2 для подзаголовка
                        className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] !leading-tight mb-6 md:mb-8 lg:mb-10 sm:mt-2"
                        style={{ fontFamily: 'Georgia Pro, serif', color: '#2C2C2C', fontWeight: 400, marginTop: '0px sm:1rem' }}
                    >
                        и просто познакомиться
                        <span className="inline-block md:inline-block relative w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 ml-2 align-middle">
                            <Image
                                src="/icons/mobile.png" // Убедитесь, что путь к иконке правильный
                                alt="" // Декоративная иконка
                                fill
                                className="object-contain"
                            />
                        </span>
                    </Title>

                    <Button
                        type="default"
                        size="large"
                        style={{
                            fontFamily: 'Georgia Pro, serif',
                            borderRadius: '4px',
                            padding: '0.6rem 1.5rem', // Немного уменьшены паддинги
                            borderColor: '#787878',
                            color: '#2C2C2C',
                            fontWeight: 'normal',
                            letterSpacing: '0.05em',
                            // alignSelf: 'flex-start', // Убрано для центрирования кнопки на мобильных
                        }}
                        className="md:w-70 sm:w-auto" // Кнопка на всю ширину на очень маленьких экранах
                        href="https://web.telegram.org/a/#486188328" legacyBehavior>
                        ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</Button>
                </Col>
            </Row>
        </div>
    </section>
);

export default memo(ContactSection);