// components/PHeader.js
import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const NAV_ITEMS = [
    // ... ваши NAV_ITEMS
    { label: 'ГЛАВНАЯ', href: '#hero' },
    { label: 'ОБО МНЕ', href: '#about' },
    { label: 'ПОДХОД', href: '#approaches' },
    { label: 'ОБРАЗОВАНИЕ', href: '#education' },
    { label: 'ЛИЧНЫЙ ОПЫТ', href: '#experience' },
    { label: 'УСЛОВИЯ РАБОТЫ', href: '#ethic' },
    { label: 'СТОИМОСТЬ', href: '#cost' },
    { label: 'КОНТАКТЫ', href: '#contact' },
];

const NavButton = ({ label, href, isActive, onClick }) => {
    // ... (код NavButton остается прежним)
    const activeColor = '#0C0B0B';
    const defaultColor = '#6B665A';

    const styleButton = {
        color: isActive ? activeColor : defaultColor,
        padding: '12px 0px',
        transition: 'color 0.3s ease',
        outline: 'none',
        boxShadow: 'none',
        display: 'block',
        width: '100%',
        textAlign: 'left',
        fontSize: '16px',
        backgroundColor: 'transparent',
    };

    return (
        <Link href={href} passHref legacyBehavior>
            <a
                style={styleButton}
                onClick={onClick}
                onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = activeColor;
                }}
                onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = defaultColor;
                }}
                onFocus={(e) => {
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                {label}
            </a>
        </Link>
    );
};

const PHeader = () => {
    const [activeSection, setActiveSection] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Брейкпоинт для переключения на десктопное меню (например, lg = 1024px)
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsWideScreen(window.innerWidth >= 1024);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // ... (остальные useEffects без изменений) ...
    useEffect(() => {
        const handleScrollSection = () => {
            let current = '';
            const headerOffset = 100;
            NAV_ITEMS.forEach((item) => {
                const el = document.querySelector(item.href);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
                        current = item.href;
                    }
                }
            });
            if (!current && window.scrollY < window.innerHeight / 2) {
                current = '#hero';
            }
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScrollSection, { passive: true });
        handleScrollSection();
        return () => window.removeEventListener('scroll', handleScrollSection);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    const showMobileMenu = () => {
        setMobileMenuOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    const headerBaseStyle = {
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        borderRadius: 8,
        height: 56,
        transition: 'background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s, top 0.3s, width 0.3s, padding 0.3s',
    };

    // Стили для эффекта стекла при скролле (применяются к обоим типам хедера)
    const scrolledEffectStyle = scrolled
        ? {
            backgroundColor: 'rgba(255,255,255,0.85)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(8px)',
        }
        : {
            backgroundColor: 'rgba(255,255,255,0.4)', // Полупрозрачный фон по умолчанию
            boxShadow: 'none',
            backdropFilter: 'none',
        };


    // Стили для десктопного хедера (lg и выше)
    const wideScreenHeaderStyle = {
        ...headerBaseStyle,
        ...scrolledEffectStyle,
        top: 32,
        width: '80%', // или 'auto' если пункты меню будут определять ширину
        maxWidth: 1200, // или убрать, если width: 'auto'
        padding: '0px 16px', // Убрали вертикальный padding, т.к. высота фиксирована
        display: 'flex',     // Используем flex для центрирования пунктов
        justifyContent: 'space-around', // Или 'center' если нужно плотнее
        alignItems: 'center',
    };

    // Стили для мобильного и планшетного хедера (меньше lg) - ТОЛЬКО ИКОНКА БУРГЕРА ПО ЦЕНТРУ
    const narrowScreenHeaderStyle = {
        ...headerBaseStyle,
        ...scrolledEffectStyle,
        top: 16,
        width: 'auto', // Ширина по содержимому (только кнопка)
        padding: '0px', // Убираем внутренние отступы вокруг кнопки, если не нужны
        // borderRadius: '50%', // Если хотим круглую кнопку-плашку
        // backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.4)', // Уже в scrolledEffectStyle
        // boxShadow: scrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none', // Уже в scrolledEffectStyle
        // backdropFilter: scrolled ? 'blur(8px)' : 'none', // Уже в scrolledEffectStyle
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            {isWideScreen ? (
                // Десктопный хедер (lg и выше)
                <div style={wideScreenHeaderStyle} className="rounded-lg"> {/* Используем div вместо Row для простоты с flex */}
                    {NAV_ITEMS.map(({ label, href }) => (
                        // Оборачиваем NavButton в Col или просто div для управления отступами, если нужно
                        <div key={href} className="px-2"> {/* Отступы между пунктами */}
                            <NavButton
                                label={label}
                                href={href}
                                isActive={activeSection === href}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                // Мобильный/планшетный хедер (меньше lg) - только иконка бургера по центру
                <div style={narrowScreenHeaderStyle} className="rounded-lg"> {/* Скругление для плашки */}
                    <Button
                        type="text"
                        icon={mobileMenuOpen ? <CloseOutlined style={{ fontSize: '24px', color: '#0C0B0B' }} /> : <MenuOutlined style={{ fontSize: '24px', color: '#0C0B0B' }} />}
                        onClick={mobileMenuOpen ? closeMobileMenu : showMobileMenu}
                        // style={{ color: '#0C0B0B', padding: '10px' }} // Увеличиваем кликабельную зону кнопки
                        className="flex items-center justify-center w-14 h-14" // Задаем явные размеры для кнопки-плашки
                        aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                    />
                    <Drawer
                        title="НАВИГАЦИЯ"
                        placement="right"
                        onClose={closeMobileMenu}
                        open={mobileMenuOpen}
                        bodyStyle={{ padding: '24px 16px' }}
                        headerStyle={{ borderBottom: '1px solid #f0f0f0' }}
                        closeIcon={<CloseOutlined style={{ color: '#0C0B0B' }} />}
                        width={isWideScreen ? "300px" : "85%"} // Drawer может быть разной ширины
                        styles={{ mask: { backgroundColor: 'rgba(0, 0, 0, 0.45)' } }}
                    >
                        {NAV_ITEMS.map(({ label, href }) => (
                            <NavButton
                                key={href}
                                label={label}
                                href={href}
                                isActive={activeSection === href}
                                onClick={() => {
                                    closeMobileMenu();
                                }}
                            />
                        ))}
                    </Drawer>
                </div>
            )}
        </>
    );
};

export default memo(PHeader);