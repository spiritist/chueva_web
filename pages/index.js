import React, { memo } from 'react';
import Head from 'next/head';
import FullscreenImage from '@/shared/fullimage';
import SystemicSection from '@/shared/abouttext';
import BackToTop from '@/shared/backtop';
import ApproachesSection from '@/shared/approaches';
import PathSection from '@/shared/pathtext';
import EduSection from '@/shared/edutext';
import ExpSection from '@/shared/exptext';
import EtSection from '@/shared/ethictext';
import TimeSection from '@/shared/timetext';
import CostSection from '@/shared/costtext';
import ReqSection from '@/shared/requesttext';
import ContactSection from '@/shared/contacttext';
import PHeader from '@/layouts/Header';
import { Divider } from 'antd';
import MainSection from '@/shared/maintext';

const MainPage = () => {
    const siteUrl = "https://chuevatherapy.ru";
    const siteTitle = "Ульяна Чуева — Психотерапевт в Москве и онлайн | Семейные и индивидуальные консультации";
    const siteDescription = "Психотерапевт Ульяна Чуева: онлайн и очные консультации для взрослых, подростков и пар. Семейная терапия, системный подход, ОРКТ. Помощь при тревоге, депрессии, кризисах.";
    const ogImage = `${siteUrl}/Images/main.jpg`;

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Psychologist",
                "@id": `${siteUrl}/#person`,
                "name": "Ульяна Чуева",
                "image": ogImage,
                "url": siteUrl,
                "jobTitle": "Системный семейный психотерапевт, Магистр психологии",
                "description": "Системный семейный психотерапевт, магистр психологии НИУ ВШЭ. Индивидуальная, парная и семейная психотерапия.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Москва",
                    "addressCountry": "RU"
                },
                "alumniOf": [
                    {
                        "@type": "CollegeOrUniversity",
                        "name": "НИУ ВШЭ (Высшая школа экономики)"
                    },
                    {
                        "@type": "CollegeOrUniversity",
                        "name": "МГЮА им. О. Е. Кутафина"
                    },
                    {
                        "@type": "CollegeOrUniversity",
                        "name": "Московский институт психоанализа"
                    }
                ],
                "knowsAbout": [ // Области экспертизы
                    "Системная семейная психотерапия",
                    "Ориентированная на решение краткосрочная терапия (ОРКТ)",
                    "Психологическое консультирование",
                    "Отношения",
                    "Тревожные состояния",
                    "Депрессивные состояния",
                    "Проживание кризисных ситуаций",
                    "Выгорание"
                ],
                "hasOfferCatalog": { // Указывает на каталог услуг
                    "@type": "OfferCatalog",
                    "name": "Услуги психотерапии",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Индивидуальная консультация (Онлайн)",
                                "description": "Индивидуальная психологическая консультация онлайн, 60 минут.",
                                "provider": { "@id": `${siteUrl}/#person` }
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "price": "3000",
                                "priceCurrency": "RUB"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Семейная терапия / консультация для пары (Онлайн)",
                                "description": "Психологическая консультация для семей и пар онлайн, 60 минут.",
                                "provider": { "@id": `${siteUrl}/#person` }
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "price": "4000",
                                "priceCurrency": "RUB"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": siteTitle,
                "description": siteDescription,
                "publisher": { "@id": `${siteUrl}/#person` }, // Ссылка на вас как издателя сайта
                "inLanguage": "ru-RU"
            }
        ]
    };


    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" /> {/* Укажите размеры, если известны */}
                <meta property="og:image:height" content="630" /> {/* Стандартный размер для OG image */}
                <meta property="og:locale" content="ru_RU" />
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={siteUrl} />
                <meta property="twitter:title" content={siteTitle} />
                <meta property="twitter:description" content={siteDescription} />
                <meta property="twitter:image" content={ogImage} />
                {/* Другие мета-теги, если нужны */}
                <link rel="canonical" href={siteUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />{/* Канонический URL */}
            </Head>
            <BackToTop />
            <div id='hero' className="relative w-full h-screen overflow-hidden max-sm:mx-0 sm:mx-4 md:mx-0 lg:mx-0">
                <FullscreenImage />
                <PHeader />
                <MainSection />
            </div>

            <div className="relative w-full h-auto overflow-hidden">
                <SystemicSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-hidden">
                <ApproachesSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <PathSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <EduSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ExpSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <EtSection />
            </div>
            <div className="relative w-full h-auto overflow-visible">
                <TimeSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <CostSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ReqSection />
            </div>
            <Divider />
            <div className="relative w-full h-auto overflow-visible">
                <ContactSection />
            </div>
        </>
    );
};

export default MainPage;