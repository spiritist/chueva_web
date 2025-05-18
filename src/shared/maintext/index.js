import React, { memo } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const MainSection = () => (
    <div
        className="absolute inset-x-0 z-10 flex flex-col text-white
               px-4 sm:px-6 md:px-8
               items-center text-center
               pt-[100px] 
               md:pt-[130px] md:items-start md:text-left
               lg:pt-0 lg:items-start lg:px-0 sm:mt-24"
    >
        <div
            className="w-full 
                 max-w-xs sm:max-w-sm
                 md:max-w-md md:ml-[10%]
                 lg:absolute lg:left-[10%] lg:top-[35vh]
                 lg:max-w-lg xl:max-w-xl
                 lg:ml-40 lg:mt-40"
        >
            <div className="text-center lg:text-left md:text-center">
                {/* Для мобильных и планшетов (до lg) - "ЧУЕВА УЛЬЯНА" в одну строку */}
                <h1 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-6xl font-serif whitespace-nowrap block lg:hidden">
                    ЧУЕВА УЛЬЯНА
                </h1>

                {/* Для десктопа (lg и выше) - "ЧУЕВА" и "УЛЬЯНА" на разных строках */}
                <div className="hidden lg:block">
                    <h1 className="text-6xl mb-1 font-serif">ЧУЕВА</h1>
                    <h1 className="text-6xl font-serif">УЛЬЯНА</h1>
                </div>

                <p className="text-xs xs:text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 mb-6 sm:mb-8 font-serif mt-3 sm:mt-4">
                    Системный семейный психотерапевт, магистр психологии НИУ ВШЭ.
                    <br />
                    Ко мне можно прийти на индивидуальную, парную или семейную психотерапию.
                </p>
                <Link href="https://web.telegram.org/a/#486188328" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                            type="primary"
                            size="large"
                            className="no-hover-bg w-full max-w-[260px] xs:max-w-[280px] sm:max-w-xs md:max-w-sm 
                         sm:w-auto mx-auto md:mx-0"
                            style={{
                                color: '#6B665A',
                                backgroundColor: '#F4EFED',
                                borderColor: '#F4EFED',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = '#0C0B0B')}
                            onMouseLeave={e => (e.currentTarget.style.color = '#6B665A')}
                        >
                            ЗАПИСАТЬСЯ НА ПРИЕМ
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default memo(MainSection);