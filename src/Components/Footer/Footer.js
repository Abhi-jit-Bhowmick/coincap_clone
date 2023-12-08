import React from 'react';
import "./Footer.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-items-1st-row'>
                <div className='footer-item-1st footer'>
                    <h3>CONCAP.IO</h3>
                    <p>Methodology</p>
                    <p>Support</p>
                    <p>Our API</p>
                    <p>Rate Comparison</p>
                    <p>Careers</p>
                </div>
                <div className='footer-items-2nd'>
                    <div className='items-2nd-1st-para footer'>
                        <h3>LEGALS</h3>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='items-2nd-2nd-para footer'>
                        <h3>DISCLAIMER</h3>
                        <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services. </p>
                    </div>

                </div>
                <div className='footer-items-3rd footer'>
                    <h3>Follow Us</h3>

                    <FaSquareFacebook className='footer-icon  footer-icon-fb' />
                    <FaTwitter className='footer-icon footer-icon-insta' />

                </div>
                <div className='footer-items-4th footer'>
                    <h3>COINCAPAPP AVAILABLE ON</h3>
                    {/* <img src="" */}

                </div>
            </div>

        </div >
    )
}

export default Footer