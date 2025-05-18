import React, { useState, useEffect } from 'react'
import { FloatButton } from 'antd'
import Image from 'next/image'

const BackToTop = () => {
  const [vh, setVh] = useState(0)

  useEffect(() => {
    // Получаем высоту окна в пикселях
    setVh(window.innerHeight)

    // Если пользователь может менять размер окна, можно добавить слушатель
    const onResize = () => setVh(window.innerHeight)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Пока не знаем высоту — не рендерим
  if (!vh) return null

  return (
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 32 }}>
      <FloatButton className="custom-fb" href="https://web.telegram.org/a/#-1002273016747" icon={
        <Image
          src="/icons/Logo.svg"
          width={32}
          height={32}
        />
      } />
      <FloatButton.BackTop
        visibilityHeight={vh}
      // остальные пропсы по необходимости
      />
    </FloatButton.Group>
  )
}

export default BackToTop