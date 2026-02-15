import HomeHeader from '../components/Home/HomeHeader'
import HomeBody from '../components/Home/HomeBody'
import { Helmet } from 'react-helmet-async'

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>{'رمضان — صدقة جارية'}</title>
            </Helmet>
            <HomeHeader />
            <HomeBody />
        </>
    )
}
