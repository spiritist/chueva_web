import React, { memo } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import Image from 'next/image'

const { Title, Paragraph } = Typography

const PathSection = () => (
    <section id='approaches' className="bg-gray-50 py-8 md:py-4"> {/* Уменьшены вертикальные отступы для мобильных */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6"> {/* Добавлены горизонтальные отступы */}
            <Row>
                <Col span={24} className="flex justify-center md:justify-end text-center md:text-right mb-6 md:mb-8"> {/* Центрирование заголовка на мобильных */}
                    <Title level={2} className="text-3xl md:text-4xl font-serif mb-0"> {/* Уменьшен размер заголовка для мобильных */}
                        Путь к психотерапии
                    </Title>
                </Col>
            </Row>
            {/* Убрал max-h-[80vh] с внешнего div, чтобы контент мог определять высоту */}
            <div>
                <Row gutter={[16, 16]} align="top" justify="start" className="items-stretch"> {/* Уменьшен gutter для мобильных */}
                    {/* Карточка с текстом */}
                    <Col xs={24} md={24} lg={12} className="flex mb-4 md:mb-0"> {/* Добавлен отступ снизу для мобильных */}
                        <Card
                            bordered
                            className="relative rounded-lg shadow-sm p-4 md:p-8 w-full" // Уменьшены внутренние отступы для мобильных, w-full
                            style={{ overflow: 'visible' }}
                            bodyStyle={{ padding: 0, overflow: 'visible' }}
                        >
                            <div className="p-2 md:p-6"> {/* Уменьшены внутренние отступы для мобильных */}
                                <Paragraph className="font-serif text-base md:text-lg mb-4 md:mb-6"> {/* Уменьшен размер шрифта для мобильных */}
                                    Мой путь к психотерапии был небыстрым. Магистратура по психологии - мое второе высшее образование, по первому я юрист.
                                    В 2022 году я закончила шестилетнюю учебу на юридическом факультете
                                    МГЮА им. О. Е. Кутафина. Почти четыре года работала юристом в корпоративной практике.
                                </Paragraph>
                                <Paragraph className="font-serif text-base md:text-lg italic mb-4 md:mb-6"> {/* Уменьшен размер шрифта для мобильных */}
                                    Моя карьера в юриспруденции развивалась, но в работе мне не
                                    хватало настоящего, глубокого контакта «человек – человек».
                                </Paragraph>
                                <Paragraph className="font-serif text-base md:text-lg"> {/* Уменьшен размер шрифта для мобильных */}
                                    Именно это подтолкнуло меня в 2024 году поступить в магистратуру НИУ ВШЭ, где я выбрала
                                    системную психотерапию в качестве основного метода работы.
                                </Paragraph>
                            </div>
                            {/* Иконка объятий - позиционирование изменено для адаптивности */}
                            <div className="absolute hidden lg:block -top-5 -right-5 md:-mt-10 md:ml-64 h-12 z-10"> {/* Адаптивное позиционирование иконки */}
                                <Image
                                    src="/Images/hugs.png"
                                    width={48} // Уменьшен размер иконки для мобильных
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                        </Card>
                    </Col>

                    {/* Картинка */}
                    <Col xs={24} md={24} lg={12} className="flex justify-center md:justify-end"> {/* Центрирование картинки на мобильных */}
                        <Card
                            bordered={false}
                            className="rounded-lg overflow-hidden shadow-sm w-full hidden lg:block lg:h-140 max-w-full md:max-w-[600px]" // max-w-full для мобильных
                            bodyStyle={{ padding: 0, height: '100%' }} // height: '100%' для заполнения
                        >
                            <div className="relative w-full h-0 lg:h-140 md:aspect-[4/3] max-h-[60vh] md:max-h-[80vh]"> {/* Задана высота для мобильных, аспект для десктопа */}
                                <Image
                                    src="/Images/path.jpg"
                                    alt="Путь к психотерапии"
                                    fill
                                    className="object-cover rounded-lg" // object-cover для корректного заполнения
                                />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </section>
)

export default memo(PathSection)