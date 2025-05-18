/* eslint-disable react/display-name */
import { Layout } from 'antd'

const DefaultLayout = props => {
    const { children } = props

    return (
        <>
            <main>{children}</main>
        </>
    )
}

DefaultLayout.defaultProps = {
    title: 'ULYANA CHUEVA',
}

export default DefaultLayout
