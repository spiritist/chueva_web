/** @type {import('next').NextConfig} */
const nextConfig = {
  //-------------------------------------------------
  // основные опции
  //-------------------------------------------------
  reactStrictMode: true,

  // списки пакетов для swc-транспиляции (оставьте те, что действительно нужны)
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util',
    'rc-picker',
    'rc-input',
    'rc-pagination',
    'rc-resize-observer',
    '@rc-component/util',
  ],

  //-------------------------------------------------
  // НУЖНАЯ строка – теперь на верхнем уровне,   ⬇⬇⬇
  //-------------------------------------------------
  /** Разрешаем обращаться к dev-серверу с указанных origin’ов */
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.1.74:3000',
  ],

  //-------------------------------------------------
  // пример доп.-настройки webpack (не обязателен)
  //-------------------------------------------------
  webpack(config, { dev, isServer }) {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
