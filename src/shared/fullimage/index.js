import Image from 'next/image'

function FullscreenImage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block absolute inset-0 w-full h-full overflow-hidden sm:rounded-3xl z-0"> {/* Оставляем скругление для десктопа */}
        <Image
          src="/Images/main.jpg"
          alt="Фоновое изображение для десктопа"
          fill
          className="object-cover w-full h-full lg:px-2 lg:py-2 sm:rounded-3xl "
          priority
        />
      </div>
      {/* Mobile */}
      <div className="block sm:hidden absolute inset-0 w-full h-full overflow-hidden z-0"> {/* Убрал rounded-xl, если на мобильных скругление не нужно */}
        <Image
          src="/Images/main-mobile.jpg"
          alt="Фоновое изображение для мобильных устройств"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </>
  )
}
export default FullscreenImage