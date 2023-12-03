import React from 'react'
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa6";
import HeroSection from '../HeroSection/HeroSection';


function Header() {
    return (
        <>
            <div className='header-container'>
                <div className='header-item'>
                    <div>
                        <img src='https://cryptologos.cc/logos/fox-token-fox-logo.png?v=029' alt='shapeshiftLogo' />
                    </div>

                    <div>Buy, sell, & swap your favorite assets. No KYC. No added fees. Decentralized.  </div>

                    <div><FaArrowRight /></div>
                </div>
            </div>
            <Navbar />
            <HeroSection />
        </>
    )
}

export default Header