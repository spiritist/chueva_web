import React, { memo } from 'react';
import { Row, Col, Image as AntImage } from 'antd'; // Используем AntImage, чтобы не конфликтовать с next/image, если он есть в проекте

// Для простоты, текст можно вынести в константы, если он статичен
const leftColumnText = {
    title: {
        part1: 'Основа моей работы — ',
        part2: 'это системное психологическое консультирование',
    },
    paragraph: {
        part1: 'Я использую методы с\u00A0', // неразрывный пробел
        highlight: 'научно\u00A0доказанной', // неразрывный пробел
        part2: '\u00A0эффективностью.', // неразрывный пробел
    },
};

const rightColumnText = [
    'Проблема — это не чья-то вина или «патология» личности клиента.',
    'Проблема — это сигнал о том, что в системе (семья, пара, окружение клиента) что-то не работает так, как раньше, и требуется новое решение.',
];

const SystemicSection = () => {
    return (
        <section id='about' className="bg-gray-50 py-12 md:py-16 lg:py-20"> {/* Адаптивные вертикальные отступы */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Горизонтальные отступы для всей секции */}
                {/* Вместо Row/Col от AntD, используем Flexbox для лучшего контроля на мобильных */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-8 xl:space-x-16">

                    {/* Левая колонка: Текст */}
                    <div className="w-full lg:w-1/3 order-1 lg:order-1 mb-8 lg:mb-0">
                        {/* Смещение -mt-32 будет применяться только на lg и выше */}
                        <div className="lg:-mt-1 space-y-4 md:space-y-6 text-center sm:text-left">
                            <h2 className="text-3xl sm:text-4xl font-serif leading-tight">
                                {leftColumnText.title.part1}
                                <strong className="font-semibold">{leftColumnText.title.part2}</strong>.
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700">
                                {leftColumnText.paragraph.part1}
                                <span className="relative inline-block whitespace-nowrap">
                                    {leftColumnText.paragraph.highlight}
                                    <svg
                                        className="absolute left-0 w-full h-2 top-full translate-y-1 pointer-events-none"
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
                                {leftColumnText.paragraph.part2}
                            </p>
                        </div>
                    </div>

                    {/* Центральная колонка: Изображение */}
                    {/* На мобильных и планшетах изображение будет между текстовыми блоками */}
                    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 order-2 lg:order-2 mx-auto lg:mx-0 mb-8 lg:mb-0 flex justify-center">
                        <AntImage // Используем AntImage, если это изображение из Ant Design (с preview и т.д.)
                            // Если это обычное изображение, лучше использовать <img /> или next/image
                            src="/Images/about.jpg" // Убедитесь, что путь к изображению правильный
                            preview={false}
                            alt="Системная психотерапия" // Добавлен более описательный alt
                            className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full" // Адаптивная ширина
                        // style={{ height: 'auto' }} // height: auto для сохранения пропорций
                        />
                    </div>

                    {/* Правая колонка: Текст */}
                    <div className="w-full lg:w-1/3 order-3 lg:order-3">
                        {/* Смещение mt-32 будет применяться только на lg и выше */}
                        <div className="lg:mt-48 space-y-4 md:space-y-6 text-center sm:text-left">
                            {rightColumnText.map((text, index) => (
                                <p key={index} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default memo(SystemicSection);