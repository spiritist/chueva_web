// src/shared/maintext/index.js
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
               lg:pt-40 lg:px-0 
               lg:items-left
               3xl:pt-64" // Увеличим верхний отступ для основного блока на 3xl
  >
    <div
      className="w-full 
               max-w-xs sm:max-w-sm
               md:max-w-md md:ml-[10%] md:text-left
               lg:relative lg:transform-none lg:left-auto lg:top-auto
               lg:ml-64
               lg:mt-64
               xl:ml-64
               xl:mt-10
               lg:max-w-lg xl:max-w-xl 
               2xl:max-w-2xl 3xl:max-w-4xl" // Увеличим максимальную ширину текстового блока
    >
      <div className="text-center md:text-left md:w-70 lg:text-center lg:w-120 3xl:w-auto"> {/* На 3xl пусть ширина будет автоматической или больше */}
        {/* Мобильный заголовок остается без изменений, так как он lg:hidden */}
        <h1 className="text-[2rem] text-3xl sm:text-5xl md:text-6xl font-serif whitespace-nowrap block lg:hidden">
          ЧУЕВА УЛЬЯНА
        </h1>

        {/* Десктопный заголовок */}
        <div className="hidden lg:block">
          <h1 className="text-6xl xl:text-7xl 3xl:text-8xl mb-1 font-serif">ЧУЕВА</h1> {/* Увеличиваем шрифт */}
          <h1 className="text-6xl xl:text-7xl 3xl:text-8xl font-serif">УЛЬЯНА</h1> {/* Увеличиваем шрифт */}
        </div>

        {/* Параграф */}
        <p className="text-sm xs:text-sm sm:text-base md:text-lg mx-auto md:max-w-80 md:mx-0 lg:mx-auto lg:text-xl xl:text-2xl 2xl:text-lg 3xl:text-2xl 3xl:max-w-2xl font-serif mt-3 sm:mt-4 mb-1 xs:mb-6 sm:mb-8 "> {/* Увеличиваем шрифт и max-w */}
          Системный семейный психотерапевт, магистр психологии НИУ ВШЭ.
          <br />
          <a className="hidden xs:block">Ко мне можно прийти на индивидуальную, парную или семейную психотерапию.</a>
        </p>
        <Link href="https://t.me/Ulyana_chueva" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="block">
            <Button
              type="primary"
              // Размер кнопки Ant Design large уже довольно большой. Можно увеличить кастомными классами высоту/padding или размер шрифта.
              // Tailwind классы для кнопки можно дополнить для 3xl
              className="no-hover-bg w-56 md:w-56 lg:w-64 h-6 xs:h-8 md:h-12 sm:w-full max-w-[260px] xs:max-w-[480px] sm:max-w-xs md:max-w-24
                         mx-auto md:mx-0 lg:mx-auto
                         3xl:h-16 3xl:text-lg 3xl:w-80 3xl:max-w-md" // Увеличиваем кнопку для 3xl
              style={{
                color: '#6B665A',
                backgroundColor: '#F4EFED',
                borderColor: '#F4EFED',
                // Можно попробовать увеличить font-size и padding через style для 3xl, но лучше классами, если возможно
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