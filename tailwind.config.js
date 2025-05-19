/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    // purge: [
    //     './src/components/**/*.{js,ts,jsx,tsx}',
    //     './src/shared/**/*.{js,ts,jsx,tsx}',
    //     './src/pages/**/*.{js,ts,jsx,tsx}',
    // ],
    theme: {
        extend: {
            fontFamily: {
                georgia: ['"Georgia Pro"', 'Georgia', 'serif'],
            },
            colors: {
                'my-blue': '#1f1fc6',
                'my-black': '#1e1e1e',
                'my-blue-header': '#024797',
                'my-brown-header': '#F4EFED',
                'my-text-header-black': '#0C0B0B',
                'my-text-not-selected': '#716D69'
            },
            screens: {
                'xs': '400px',
                'sm': '640px',   // >= 640px, мобильные (например, iPhone SE/X, Pixel)
                'md': '768px',   // >= 768px, планшеты (например, iPad mini)
                'lg': '1280px',  // >= 1024px, небольшие ноутбуки, iPad Pro
                'xl': '1280px',  // >= 1280px, большие ноутбуки, десктоп
                '2xl': '1536px', // >= 1536px, очень широкие мониторы
            },
            opacity: {
                '0': '0',
                '10': '.1',
                '20': '.2',
                '30': '.3',
                '40': '.4',
                '50': '.5',
                '60': '.6',
                '70': '.7',
                '80': '.8',
                '90': '.9',
                '100': '1',
            },
            height: {
                '85': '22.5rem',
                '90': '25.0rem',
                '120': '32.0rem',
                '140': '36.0rem'
            },
            width: {
                '60': '15.5rem',
                '70': '20rem',
                '85': '22.5rem',
                '90': '25.0rem',
                '120': '32.0rem',
                '140': '36.0rem',
                '180': '44.5rem',
                '210': '53rem',
                '240': '60rem',
                '300': '77.5rem',
                '360': '93rem'
            },
            padding: {
                '60': '15.5rem',
            },
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
        borderColor: ['responsive', 'hover', 'focus', 'disabled'],
        textColor: ['responsive', 'hover', 'focus', 'disabled'],
    },
    plugins: [],
}
