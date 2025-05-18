// components/ContactSection.js
import React, { memo } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

const ContactSection = () => (
    <section id="contact" className="py-12 md:py-24"> {/* Уменьшены вертикальные отступы для мобильных */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Row gutter={[32, 32]} align="middle" className="flex-col-reverse md:flex-row"> {/* Изменен порядок для мобильных: текст сверху, потом фото */}
                {/* Правая (теперь первая на мобильных) колонка с текстом и кнопкой */}
                <Col xs={24} md={14} lg={13} className="md:pl-8 lg:pl-12 text-center md:text-left"> {/* Центрирование текста на мобильных */}
                    <div className="flex flex-col items-center md:items-start"> {/* Центрирование элементов на мобильных */}
                        <Title
                            level={2}
                            style={{
                                fontFamily: 'Georgia Pro, serif',
                                fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', // Немного уменьшен clamp для мобильных
                                fontWeight: 400,
                                lineHeight: 1.3,
                                color: '#2C2C2C',
                                marginBottom: '0.25rem',
                            }}
                        >
                            Со мной можно созвониться
                            <br />
                            на 10 минут
                        </Title>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontFamily: 'Georgia Pro, serif',
                                fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)',// Немного уменьшен clamp для мобильных
                                fontWeight: 400,
                                lineHeight: 1.3,
                                color: '#2C2C2C',
                                marginBottom: '2rem', // Уменьшен отступ перед кнопкой
                            }}
                            className="justify-center md:justify-start" // Центрирование на мобильных
                        >
                            <Text
                                style={{
                                    fontFamily: 'inherit',
                                    fontSize: 'inherit',
                                    fontWeight: 'inherit',
                                    lineHeight: 'inherit',
                                    color: 'inherit',
                                }}
                            >
                                и просто познакомиться
                            </Text>
                            <div className="relative w-6 h-6 md:w-8 md:h-8 ml-2 md:ml-3 shrink-0"> {/* Уменьшен размер иконки и отступ для мобильных */}
                                <Image
                                    src="/icons/mobile.png"
                                    alt="Телефон"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

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
                            className="w-full sm:w-auto" // Кнопка на всю ширину на очень маленьких экранах
                            // href="ВАША_ССЫЛКА_ДЛЯ_ЗАПИСИ"
                        >
                            ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
                        </Button>
                    </div>
                </Col>

                {/* Левая (теперь вторая на мобильных) колонка с фото */}
                <Col xs={24} md={10} lg={11} className="mt-8 md:mt-0"> {/* Добавлен отступ сверху для фото на мобильных */}
                    <div style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto', aspectRatio: '3/4' }} className="overflow-hidden rounded-lg md:max-w-full"> {/* Ограничение ширины фото на мобильных и центрирование */}
                        <Image
                            src="/Images/contact.png"
                            alt="Знакомство"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </section>
);

export default memo(ContactSection);