import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
import Table from '../Components/Table/Table'
import Button from '../Components/Button/Button'
import Footer from '../Components/Footer/Footer'
import "./LandingPage.css"
import axios from 'axios'
import { config } from '../Config/Endpoint'


function LandingPage() {
    const [apidata, setApiData] = useState("");
    const [clickTimes, setClickTimes] = useState(20)

    const onButtonClick = () => {
        setClickTimes((preState) => {
            return preState + 40
        })
    }

    const fetchData = async (clickTimes) => {
        const url = `${config.endpoint}assets?limit=${clickTimes}&ofset=${1}`;
        try {
            const response = await axios.get(url);
            const result = response.data.data;
            setApiData(result)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchData(clickTimes);
    }, [clickTimes]);


    return (
        console.log("apidata", apidata),
        <>
            <Header />
            <Navbar />
            <HeroSection >
            </HeroSection>
            <Table data={apidata} />
            <Button handleClick={onButtonClick}>View More</Button>
            <Footer />
        </>
    )
}

export default LandingPage