import React from 'react'
import BottomNavbar from '../components/BottomNavbar'
import HeaderClaimSection from './HeaderClaimSection'

const Home = () => {
  return (
    <div className="h-screen relative bg-[url('../../public/images/home-bg.webp')] bg-cover bg-center w-full p-[18px]">
        <HeaderClaimSection />
        <BottomNavbar/>
    </div>
  )
}

export default Home