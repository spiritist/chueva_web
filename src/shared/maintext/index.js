import React, { memo } from 'react';
import { Button } from 'antd';
import Link from 'next/link';

const MainSection = () => (
  <div
    className="absolute inset-x-0 z-10 flex flex-col text-white
               px-4 sm:px-6 md:px-8
               items-center text-center
               mt-20
               md:pt-64 md:items-start md:left-0
               lg:pt-48 lg:px-0 
               lg:items-left"
  >
    <div
      className="w-full 
                 max-w-xs sm:max-w-sm
                 md:max-w-md md:ml-[10%] md:text-left
                 lg:relative lg:transform-none lg:left-auto lg:top-auto
                 lg:ml-64
                 lg:mt-10
                 lg:max-w-lg xl:max-w-xl"
    >
      <div className="text-center md:text-left md:w-70 lg:text-center lg:w-120">
        <h1 className="text-[2rem] text-3xl sm:text-5xl md:text-6xl font-serif whitespace-nowrap block lg:hidden">
          ЧУЕВА УЛЬЯНА
        </h1>

        <div className="hidden lg:block">
          <h1 className="text-6xl mb-1 font-serif">ЧУЕВА</h1>
          <h1 className="text-6xl font-serif">УЛЬЯНА</h1>
        </div>

        <p className="text-sm xs:text-sm sm:text-base md:text-lg mx-auto md:max-w-80 md:mx-0 lg:mx-auto lg:text-xl mb-1 xs:mb-6 sm:mb-8 font-serif mt-3 sm:mt-4">
          Системный семейный психотерапевт, магистр психологии НИУ ВШЭ.
          <br />
          <a className="hidden xs:block">Ко мне можно прийти на индивидуальную, парную или семейную психотерапию.</a>
        </p>
        <Link href="https://web.telegram.org/a/#486188328" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="block">
            <Button
              type="primary"
              size="large"
              className="no-hover-bg w-56 md:w-56 lg:w-64 h-6 xs:h-8 md:h-12 sm:w-full max-w-[260px] xs:max-w-[480px] sm:max-w-xs md:max-w-24
                        mx-auto md:mx-0 lg:mx-auto"
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