// components/EduSection.js
import React, { memo, useState } from 'react';
import { Card, Typography, Button, Modal, Carousel, Empty } from 'antd'; // Empty может не понадобиться, если всегда есть изображения

const { Title, Paragraph } = Typography;

const EDUCATION = [
  {
    year: '2024–2026',
    title: 'Высшая школа экономики',
    desc: 'Магистерская программа "Семейная системная психотерапия"',
    image: '/Images/hse.png', // Убедитесь, что путь к изображениям верный
  },
  {
    year: 'Апрель – май 2025',
    title: 'Морозовская детская городская клиническая больница',
    desc: 'Клиническая практика по консультированию детей и взрослых',
    // image: '/Images/morozov.png' // Если есть изображение
  },
  {
    year: '2022 – 2023',
    title: 'Московский институт психоанализа',
    desc: 'Профессиональная переподготовка по программе "Психологическое консультирование"',
    image: '/Images/mip1.jpg', // Убедитесь, что путь к изображениям верный
  },
  {
    year: '2020 – 2022',
    title: 'МГЮА им. О. Е. Кутафина, факультет частного права',
    desc: '(магистратура)',
    // image: '/Images/mgua_mag.png' // Если есть изображение
  },
  {
    year: '2016 – 2020',
    title: 'МГЮА им. О. Е. Кутафина, факультет частного права',
    desc: '(бакалавриат)',
    // image: '/Images/mgua_bak.png' // Если есть изображение
  },
];

const EduSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const openAll = () => {
    const images = EDUCATION.filter((item) => item.image).map(
      (item) => item.image
    );
    if (images.length > 0) {
      setModalImages(images);
      setModalOpen(true);
    } else {
      // Можно показать уведомление, что изображений нет
      console.log("Нет изображений для отображения");
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const imagesForModal = EDUCATION.filter(item => item.image).map(item => item.image);

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
        <div className="flex overflow-x-auto space-x-4 sm:space-x-6 md:space-x-8 pb-4 -mx-4 px-4">
          {EDUCATION.map((item, idx) => (
            <div
              key={item.year + idx} // Добавил idx для большей уникальности ключа
              className={`
                flex flex-col items-center
                flex-shrink-0
                ${idx % 2 === 1 ? 'sm:mt-10 md:mt-16' : 'mt-0'} // Зигзаг только для sm и выше
              `}
              style={{ width: '180px', minWidth: '180px' }} // Уменьшил ширину карточек, сделал ее одинаковой
            >
              <Card
                bordered
                // hoverable // Можно убрать, если не интерактивно
                className="rounded-lg shadow-sm w-full h-full flex flex-col" // h-full и flex для растягивания
                bodyStyle={{ padding: '1rem', flexGrow: 1 }} // padding меньше, flexGrow для растягивания body
                // style={{ cursor: 'default' }} // Убрал
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

        {/* Кнопка справа внизу */}
        {imagesForModal.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:justify-end mt-6 sm:mt-8">
            <Button
              type="default"
              size="large"
              className="rounded-lg w-full sm:w-auto font-georgia text-sm sm:text-base" // Адаптивная ширина и текст
              onClick={openAll}
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
        width="90vw" // Адаптивная ширина для мобильных
        style={{ maxWidth: '600px' }} // Максимальная ширина для десктопов
        centered
        bodyStyle={{ padding: 0, maxHeight: '80vh', overflowY: 'auto' }} // Ограничение высоты и скролл для body
      >
        {modalImages.length > 0 ? (
          <Carousel autoplay arrows>
            {modalImages.map((src, i) => (
              // Обертка для контроля высоты слайда
              <div key={i} className="flex justify-center items-center bg-black">
                <img
                  src={src}
                  alt={`Диплом ${i + 1}`}
                  className="object-contain w-auto h-auto max-w-full max-h-[75vh]" // Адаптивное изображение внутри карусели
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