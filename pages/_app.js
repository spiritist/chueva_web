/* eslint-disable react/display-name */
import Head from 'next/head'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/global.css'
import '@/styles/tailwind.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
    const Layout = Component.Layout || DefaultLayout
    const metrikaId = 102144532; // Ваш ID счетчика
    const isProduction = process.env.NODE_ENV === 'production';
    return (
        <Layout>
            <Head><link rel="icon" type="image/png" href="/favicon.png" /></ Head>
            <Component {...pageProps} />
            {/* Яндекс.Метрика с использованием next/script */}
            {isProduction && ( // Условие для продакшена
                <>
                    <Script
                        id="yandex-metrika"
                        strategy="afterInteractive" // Загружать после того, как страница стала интерактивной
                        dangerouslySetInnerHTML={{
                            __html: `
                              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                              m[i].l=1*new Date();
                              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                              ym(${metrikaId}, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true
                              });
                            `,
                        }}
                    />
                </>
            )}
        </Layout>
    )
}

export default MyApp
