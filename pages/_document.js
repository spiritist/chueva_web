// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const metrikaId = 102144532; // Ваш ID счетчика из скриншота
        const isProduction = process.env.NODE_ENV === 'production'; // Чтобы счетчик работал только в продакшене

        return (
            <Html lang="ru"> {/* Укажите язык вашего сайта */}
                <Head>
                    {/* Сюда можно добавлять другие глобальные теги <head>, шрифты и т.д. */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {isProduction && (
                        <noscript>
                            <div>
                                <img src={`https://mc.yandex.ru/watch/${metrikaId}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
                            </div>
                        </noscript>
                    )}
                    {/* /Яндекс.Метрика */}
                </body>
            </Html>
        )
    }
}

export default MyDocument