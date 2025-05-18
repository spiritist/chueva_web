import React, { memo } from 'react'
import { Row, Col, Image } from 'antd'

const SystemicSection = () => {
    return (
        <section id='about' className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto">
                <Row gutter={[64, 32]} align="middle">
                    {/* Левая колонка: убираем боковой padding и поднимаем чуть выше */}
                    <Col
                        xs={24}
                        md={8}
                        className="relative -mt-32 pl-0 md:pl-4"  /* pl-0 — текст у левого края, на мобилках можно вернуть немного pl-4 */
                    >
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-4xl font-serif leading-tight">
                                Основа моей работы —{' '}
                                <strong className="font-semibold">это системная психотерапия</strong>.
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700">
                                Я использую методы с&nbsp;
                                <span className="relative inline-block whitespace-nowrap">
                                    научно&nbsp;доказанной
                                    <svg
                                        className="
                                            absolute
                                            left-0
                                            w-full
                                            h-2
                                            top-full               /* привязка к низу контейнера */
                                            translate-y-1          /* смещаем вниз на 0.25rem (~4px) */
                                            pointer-events-none
                                            "
                                        viewBox="0 0 100 5"
                                        preserveAspectRatio="none"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M0,4 Q50,0 100,4"
                                            stroke="#0C0B0B"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                    </svg>
                                </span>
                                &nbsp;эффективностью.
                            </p>
                        </div>
                    </Col>

                    {/* Центральная колонка: картинку чуть побольше */}
                    <Col xs={24} md={8} className="flex justify-center px-0">
                        <Image
                            src="/Images/about.jpg"
                            preview={false}
                            className="rounded-lg shadow-lg"
                            style={{ width: '100%', maxWidth: 380, height: 'auto' }}  /* увеличили до 380px */
                        />
                    </Col>

                    {/* Правая колонка: текст у правого края, опускаем чуть ниже */}
                    <Col
                        xs={24}
                        md={8}
                        className="relative mt-32 pr-0 md:pr-4"  /* pr-0 — текст у правого края */
                    >
                        <div className="space-y-6">
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Проблема — это не чья-то вина или «патология» личности клиента.
                            </p>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Проблема — это сигнал о том, что в системе (семья, пара, окружение клиента)
                                что-то не работает так, как раньше, и требуется новое решение.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default memo(SystemicSection)
