import React, { memo, useState, useEffect } from 'react'; // Добавлен useEffect
import { Card, Typography, Button, Modal, Carousel, Empty } from 'antd';

const { Title, Paragraph } = Typography;

const EDUCATION_DATA = [ // Переименовал для ясности
  {
    year: '2024–2026',
    title: 'Высшая школа экономики',
    desc: 'Магистерская программа "Семейная системная психотерапия"',
    image: '/Images/hse.png',
  },
  {
    year: 'Апрель – май 2025',
    title: 'Морозовская детская городская клиническая больница',
    desc: 'Клиническая практика по консультированию детей и взрослых',
  },
  {
    year: '2022 – 2023',
    title: 'Московский институт психоанализа',
    desc: 'Профессиональная переподготовка по программе "Психологическое консультирование"',
    image: '/Images/mip1.jpg',
  },
  {
    year: '2020 – 2022',
    title: 'МГЮА им. О. Е. Кутафина, факультет частного права',
    desc: '(магистратура)',
  },
  {
    year: '2016 – 2020',
    title: 'МГЮА им. О. Е. Кутафина, факультет частного права',
    desc: '(бакалавриат)',
  },
];

const EduSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false); // Состояние для определения мобильного вида

  useEffect(() => {
    // Определяем мобильный вид (например, ширина меньше 768px - Tailwind md брейкпоинт)
    // Это поможет решить, сколько карточек отображать и как их стилизовать.
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768); // md брейкпоинт
    };
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const openAllImagesModal = () => { // Переименовал для ясности
    const images = EDUCATION_DATA.filter((item) => item.image).map(
      (item) => item.image
    );
    if (images.length > 0) {
      setModalImages(images);
      setModalOpen(true);
    } else {
      console.log("Нет изображений для отображения");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imagesForModal = EDUCATION_DATA.filter(item => item.image).map(item => item.image);

  // Определяем, какие карточки показывать
  const educationItemsToDisplay = isMobileView ? EDUCATION_DATA.slice(0, 4) : EDUCATION_DATA;

  return (
    <section id="education" className="bg-gray-50 py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-end mb-6 sm:mb-8">
          <Title
            level={2}
            className="text-2xl sm:text-3xl md:text-4xl font-serif mb-0 text-center sm:text-right"
          >
            Образование
          </Title>
        </div>

        {/* Таймлайн-карточки */}
        {/* На мобильных (isMobileView) - flex-wrap и центрирование, без горизонтального скролла для первых двух.
            На планшетах и десктопах - горизонтальный скролл всех карточек.
        */}
        <div 
          className={`pb-4 
            ${isMobileView 
              ? 'flex flex-wrap justify-center gap-4' // Позволяет карточкам переноситься и центрироваться
              : 'flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 -mx-4 px-4' // Горизонтальный скролл для iPad/Desktop
            }`
          }
        >
          {educationItemsToDisplay.map((item, idx) => (
            <div
              key={item.year + idx}
              className={`
                flex flex-col items-center
                ${isMobileView 
                  ? 'w-full max-w-[200px] xs:max-w-[220px] mb-4' // На мобильных карточки могут быть чуть шире и с отступом снизу
                  : `flex-shrink-0 ${idx % 2 === 1 ? 'sm:mt-10 md:mt-16' : 'mt-0'}` // Зигзаг для sm и выше, если не мобильный вид
                }`
              }
              style={!isMobileView ? { width: '180px', minWidth: '180px' } : {}} // Фиксированная ширина только для iPad/Desktop скролла
            >
              <Card
                bordered
                className="rounded-lg shadow-sm w-full h-full flex flex-col"
                bodyStyle={{ padding: '1rem', flexGrow: 1 }}
              >
                <Paragraph className="font-semibold text-sm mb-1 leading-tight">
                  {item.title}
                </Paragraph>
                <Paragraph className="text-xs text-gray-600 mb-0 leading-tight">
                  {item.desc}
                </Paragraph>
              </Card>
              <div className="mt-2 text-xs sm:text-sm text-black font-medium text-center px-1">
                {item.year}
              </div>
            </div>
          ))}
        </div>

        {imagesForModal.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:justify-end mt-6 sm:mt-8">
            <Button
              type="default"
              size="large"
              className="rounded-lg w-full sm:w-auto font-georgia text-sm sm:text-base"
              onClick={openAllImagesModal}
            >
              Узнать подробнее о моей квалификации
            </Button>
          </div>
        )}
      </div>

      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={closeModal}
        width={isMobileView ? "90vw" : "80vw"} // Ширина модального окна
        style={isMobileView ? {maxWidth: '400px'} : { maxWidth: '600px' }} // Макс. ширина
        centered
        bodyStyle={{ padding: 0, maxHeight: '80vh', overflowY: 'auto' }}
      >
        {modalImages.length > 0 ? (
          <Carousel autoplay arrows>
            {modalImages.map((src, i) => (
              <div key={i} className="flex justify-center items-center bg-black h-[50vh] sm:h-[60vh] md:h-[70vh]"> {/* Адаптивная высота слайда */}
                <img
                  src={src}
                  alt={`Диплом ${i + 1}`}
                  className="object-contain w-auto h-auto max-w-full max-h-full"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="p-8 text-center">
            <Empty description="Нет доступных изображений для отображения." />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default memo(EduSection);