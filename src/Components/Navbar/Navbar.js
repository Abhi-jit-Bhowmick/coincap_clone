import React, { useState } from 'react'
import "./Navbar.css"
// import { ReactComponent as ReactLogo } from ""
import { CiSearch } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [isClicked, setIsClicked] = useState(false)
    return (

        <div className='navbar-container'>
            <div className='navbar-menu'>
                <div className='navbar-menu-items '>
                    <li>Coin</li>
                    <li>Exchange</li>
                    <li>Swap</li>
                </div>
                <div className='navbar-menu-items'>

                    <img src='https://imgs.search.brave.com/ontkqoKu5fJ_Wik-nrF9CXGEzo5gDiIY-D4L8zBUT1c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9LQTZvalo3UFc0/UjdfNVY0NmQyUTBL/S2gxQWViRU5rNTZJ/UGs0NnVoT0J4U0VD/SGdPbG5sVjI0azFX/Q3Vid1pVeG1NPXcy/NDAtaDQ4MC1ydw' alt='Coincap logo' width="80px" height="31px" />

                </div>
                <div className='navbar-menu-items'>
                    <li>USD</li>
                    <li>English</li>
                    <li><CiSearch /></li>
                    <li><IoIosSettings /></li>
                </div>
            </div>
            <div className='navbar-menu-mobile'>
                <div className='navbar-menu-mobile-items'>
                    <li>
                        <CiSearch
                            className='mobile-items-icon'
                        />
                    </li>
                    <li>
                        <img src='https://imgs.search.brave.com/ontkqoKu5fJ_Wik-nrF9CXGEzo5gDiIY-D4L8zBUT1c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9LQTZvalo3UFc0/UjdfNVY0NmQyUTBL/S2gxQWViRU5rNTZJ/UGs0NnVoT0J4U0VD/SGdPbG5sVjI0azFX/Q3Vid1pVeG1NPXcy/NDAtaDQ4MC1ydw' alt='Coincap logo' width="80px" height="31px"
                        />
                    </li>
                    <li>
                        {
                            isClicked ? (
                                <IoMdClose
                                    className='mobile-items-icon'
                                    onClick={() => setIsClicked(!isClicked)}
                                />
                            ) : (
                                <MdOutlineMenu
                                    className='mobile-items-icon'
                                    onClick={() => setIsClicked(!isClicked)}
                                />
                            )
                        }

                    </li>
                </div>
                {
                    isClicked ? (
                        <div className='navbar-sidebar-container'>

                        </div>
                    ) : (
                        ""
                    )
                }
            </div>

        </div>




    )
}

export default Navbar