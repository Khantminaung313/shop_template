import { Outlet } from 'react-router'
import Footer from './Footer'
import HeaderSection from './Header/HeaderSection'

const Layout = () => {
  return (
    <>
        <HeaderSection />
        <div className='pt-16 lg:pt-48'>
            <Outlet/>
        </div>
        <Footer />
    </>
  )
}

export default Layout