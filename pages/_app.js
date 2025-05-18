/* eslint-disable react/display-name */
import Head from 'next/head'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/global.css'
import '@/styles/tailwind.css'
import DefaultLayout from '@/layouts/DefaultLayout'

const MyApp = ({ Component, pageProps }) => {
    const Layout = Component.Layout || DefaultLayout
    return (
        <Layout>
            <Head><link rel="icon" type="image/png" href="/favicon.png" /></ Head>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
