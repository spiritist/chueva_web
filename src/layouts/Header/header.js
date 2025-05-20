// components/PHeader.js
import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Button, Drawer } from 'antd'; // Row, Col не используются для wideScreenHeader
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const NAV_ITEMS = [
    { label: 'ГЛАВНАЯ', href: '#hero' },
    { label: 'ОБО МНЕ', href: '#about' },
    { label: 'ПОДХОД', href: '#approaches' },
    { label: 'ОБРАЗОВАНИЕ', href: '#education' },
    { label: 'ЛИЧНЫЙ ОПЫТ', href: '#experience' },
    { label: 'УСЛОВИЯ РАБОТЫ', href: '#ethic' },
    { label: 'СТОИМОСТЬ', href: '#cost' },
    { label: 'КОНТАКТЫ', href: '#contact' },
];

const NavButton = ({ label, href, isActive, onClick, is3xl }) => { // Добавим проп is3xl для управления стилями
    const activeColor = '#0C0B0B';
    const defaultColor = '#6B665A';

    const styleButton = {
        color: isActive ? activeColor : defaultColor,
        // Увеличим вертикальные отступы для 3xl, если высота хедера увеличится
        padding: is3xl ? '16px 0px' : '12px 0px', 
        transition: 'color 0.3s ease',
        outline: 'none',
        boxShadow: 'none',
        display: 'block',
        width: '100%',
        textAlign: 'center', // Можно оставить left или сделать center для больших экранов
        backgroundColor: 'transparent',
        fontWeight: 500, // Сделаем шрифт чуть жирнее для лучшей читаемости
    };

    return (
        <Link href={href} passHref legacyBehavior>
            <a
                style={styleButton}
                // Обновляем классы для размера шрифта
                className={`lg:text-xs xl:text-sm 2xl:text-base ${is3xl ? 'text-lg' : ''}`}
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
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [is3xlScreen, setIs3xlScreen] = useState(false); // Новый стейт для 3xl

    useEffect(() => {
        const checkScreenSizes = () => {
            const screenWidth = window.innerWidth;
            setIsWideScreen(screenWidth >= 1024);
            setIs3xlScreen(screenWidth >= 2560); // Проверяем наш новый брейкпоинт 3xl
        };
        checkScreenSizes();
        window.addEventListener('resize', checkScreenSizes);
        return () => window.removeEventListener('resize', checkScreenSizes);
    }, []);

    useEffect(() => {
        const handleScrollSection = () => {
            let current = '';
            const headerOffset = is3xlScreen ? 120 : 100; // Увеличим offset для 3xl, если хедер стал выше
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
    }, [is3xlScreen]); // Добавляем is3xlScreen в зависимости, если headerOffset меняется

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

    // Динамически определяем стили для хедера
    const getHeaderStyles = () => {
        const baseStyle = {
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            borderRadius: 8,
            height: is3xlScreen ? 72 : 56, // Увеличиваем высоту для 3xl
            transition: 'background-color 0.3s, box-shadow 0.3s, backdrop-filter 0.3s, top 0.3s, width 0.3s, padding 0.3s, height 0.3s',
        };

        const scrollEffect = scrolled
            ? {
                backgroundColor: 'rgba(255,255,255,0.85)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(8px)',
              }
            : {
                backgroundColor: 'rgba(255,255,255,0.4)',
                boxShadow: 'none',
                backdropFilter: 'none',
              };
        
        if (isWideScreen) { // Включает lg, xl, 2xl, 3xl
            return {
                ...baseStyle,
                ...scrollEffect,
                top: is3xlScreen ? 40 : 32,         // Немного опустим на 3xl
                width: is3xlScreen ? '70%' : '80%', // Можно сделать чуть уже на 3xl, если maxWidth большой
                maxWidth: is3xlScreen ? 1600 : 1200, // Увеличиваем maxWidth для 3xl
                padding: is3xlScreen ? '0px 24px' : '0px 16px', // Увеличиваем padding для 3xl
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            };
        } else { // Мобильный хедер
            return {
                ...baseStyle,
                ...scrollEffect,
                top: 16,
                width: 'auto',
                padding: '0px',
                height: 56, // Мобильный хедер оставляем прежней высоты
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            };
        }
    };
    
    const currentHeaderStyle = getHeaderStyles();

    return (
        <>
            {isWideScreen ? (
                <div style={currentHeaderStyle} className="rounded-lg">
                    {NAV_ITEMS.map(({ label, href }) => (
                        <div key={href} className={`px-2 ${is3xlScreen ? '3xl:px-4' : ''}`}> {/* Увеличиваем отступы между кнопками для 3xl */}
                            <NavButton
                                label={label}
                                href={href}
                                isActive={activeSection === href}
                                is3xl={is3xlScreen} // Передаем флаг в NavButton
                            />
                        </div>
                    ))}
                </div>
            ) : (
                // Мобильный/планшетный хедер
                <div style={currentHeaderStyle} className="rounded-lg">
                    <Button
                        type="text"
                        icon={mobileMenuOpen ? <CloseOutlined style={{ fontSize: '24px', color: '#0C0B0B' }} /> : <MenuOutlined style={{ fontSize: '24px', color: '#0C0B0B' }} />}
                        onClick={mobileMenuOpen ? closeMobileMenu : showMobileMenu}
                        className="flex items-center justify-center w-14 h-14"
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
                        width={isWideScreen ? (is3xlScreen ? "350px" : "300px") : "260px"} // Можно увеличить Drawer и на 3xl, если надо
                        styles={{ mask: { backgroundColor: 'rgba(0, 0, 0, 0.45)' } }}
                    >
                        {NAV_ITEMS.map(({ label, href }) => (
                            <NavButton
                                key={href}
                                label={label}
                                href={href}
                                isActive={activeSection === href}
                                onClick={closeMobileMenu}
                                // is3xl не нужен для кнопок в Drawer, они уже имеют свои стили
                            />
                        ))}
                    </Drawer>
                </div>
            )}
        </>
    );
};

export default memo(PHeader);