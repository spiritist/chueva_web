/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👉 перечень зависимостей, которые нужно пропустить через SWC
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',   // ← добавили!
    'rc-util',
    'rc-picker',
    'rc-input',          // ← добавили
    'rc-pagination',
    'rc-resize-observer',
    '@rc-component/util'
  ],

  // 👇 здесь могут идти любые ваши существующие настройки
  reactStrictMode: true
};

module.exports = nextConfig;