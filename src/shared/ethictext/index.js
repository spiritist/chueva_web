import React, { memo } from 'react'
import { Row, Col, Card, Typography } from 'antd'

const { Title, Paragraph } = Typography

const EthicSection = () => (
    <section id="ethic" className="bg-gray-50 py-8 md:py-4"> {/* Уменьшены вертикальные отступы */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Row>
                <Col span={24} className="flex justify-center md:justify-end text-center md:text-right mb-6 md:mb-8"> {/* Центрирование заголовка на мобильных */}
                    <Title level={2} className="text-3xl md:text-4xl font-serif mb-0"> {/* Адаптивный размер заголовка */}
                        Условия работы
                    </Title>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="items-stretch"> {/* Уменьшен gutter */}
                {/* 1-я карточка */}
                <Col xs={24} md={12} className="flex mb-4 md:mb-0"> {/* Отступ снизу для мобильных */}
                    <Card
                        bordered
                        hoverable
                        style={{ cursor: 'default' }}
                        className="rounded-lg shadow-sm w-full h-full"
                        bodyStyle={{
                            padding: '1rem md:1.5rem', // Адаптивные внутренние отступы
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <Title
                                level={3}
                                className="mb-3 md:mb-4" // Адаптивный отступ
                                style={{
                                    fontFamily: 'Georgia Pro, serif',
                                    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', // Адаптивный размер шрифта
                                    fontWeight: 400,
                                    color: '#1F1F1F',
                                    lineHeight: 1.2,
                                    textAlign: 'center',
                                }}
                            >
                                Общение полностью{' '}
                                <span style={{ fontStyle: 'italic' }}>конфиденциально</span>
                            </Title>
                            <Paragraph
                                style={{
                                    fontFamily: 'Georgia Pro, serif',
                                    fontSize: '1rem md:1.125rem', // Адаптивный размер шрифта (16px / 18px)
                                    color: '#333333',
                                    textAlign: 'center',
                                    margin: 0,
                                }}
                            >
                                Наша работа строится на базе информированного согласия, которое
                                подписывают обе стороны. Вся предоставленная вами информация
                                абсолютно <strong>конфиденциальна</strong>.
                            </Paragraph>
                        </div>
                    </Card>
                </Col>

                {/* 2-я карточка */}
                <Col xs={24} md={12} className="flex">
                    <Card
                        bordered
                        hoverable
                        className="rounded-lg shadow-sm w-full h-full"
                        bodyStyle={{
                            padding: '1rem md:1.5rem', // Адаптивные внутренние отступы
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                        style={{ cursor: 'default' }}
                    >
                        <Title
                            level={3}
                            className="mb-3 md:mb-4" // Адаптивный отступ
                            style={{
                                fontFamily: 'Georgia Pro, serif',
                                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', // Адаптивный размер шрифта
                                fontWeight: 400,
                                color: '#1F1F1F',
                                lineHeight: 1.2,
                                textAlign: 'center',
                            }}
                        >
                            Соблюдение этики{' '}
                            <span style={{ fontStyle: 'italic' }}>гарантировано</span>
                        </Title>

                        <div className="md:mt-12 lg:mt-auto" style={{ textAlign: 'center' }}> {/* 'md:auto' чтобы на десктопе отступ был рассчитан flex 'space-between' */}
                            <a
                                href="https://psyethics.ru/code/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    fontFamily: 'Georgia Pro, serif',
                                    fontSize: '1rem md:1.125rem', // Адаптивный размер шрифта
                                    color: '#000',
                                    textDecoration: 'underline',
                                }}
                            >
                                Я руководствуюсь этическим кодексом
                            </a>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    </section>
)

export default memo(EthicSection)