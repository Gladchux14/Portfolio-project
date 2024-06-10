import Footer from '../components/footer'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'

const Rootpage = () => {
  return (
    <div>
    <Header />

    <main>
        <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default Rootpage