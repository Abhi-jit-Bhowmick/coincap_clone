import "./Header.css";
import { FaArrowRight } from "react-icons/fa6";


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

        </>
    )
}

export default Header