import React from 'react'
import "./Table.css"

function Table({ data, children }) {


    return (
        console.log("TABLE::", data),
        <div className='table-container'>
            <div div className='table-container-item' >
                <table className='table'>
                    <thead>
                        <tr>
                            <th className="hide-in-mobile" >Rank</th>
                            <th>Name</th>
                            <th className="hide-in-mobile" >Price</th>
                            <th className="hide-in-mobile" >Market Cap</th>
                            <th className="hide-in-mobile" >VWAP (24Hr)</th>
                            <th className="hide-in-mobile" >Supply</th>
                            <th className="hide-in-mobile" >Volume (24hr)</th>
                            <th>Change (24Hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data ? (
                                data.map((item) =>
                                    <tr>
                                        <td className="hide-in-mobile" >{item.rank}</td>
                                        <td className='coin-image'>
                                            <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt={item.name} />
                                            <div className='coin-description'>
                                                <p>{item.name}</p>
                                                <span><p>{item.symbol}</p></span>
                                            </div>

                                        </td>
                                        <td className="hide-in-mobile" >{item.priceUsd}</td>
                                        <td className="hide-in-mobile" >{item.marketCapUsd}</td>
                                        <td className="hide-in-mobile" >{item.vwap24Hr}</td>
                                        <td className="hide-in-mobile" >{item.supply}</td>
                                        <td className="hide-in-mobile">{item.volumeUsd24Hr}</td>
                                        <td
                                            className={Number(item.changePercent24Hr) < 0 ? "color-red" : "color-black"}
                                        >
                                            {item.changePercent24Hr}
                                        </td>
                                    </tr>
                                )
                            ) : (
                                <div className='loading'>
                                    <p><b>Loading...</b></p>
                                </div>
                            )
                        }

                    </tbody>

                </table>
                {children}
            </div >
        </div >

    )
}

export default Table

/**
 
  {data ? (
                        data.map((item) => {
                            return (
                                <tr>
                                    <td>{item.rank}</td>
                                    <td>
                                        <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} alt={item.name} />
                                        <p>{item.name}</p>
                                        <span><p>{item.symbol}</p></span>
                                    </td>
                                    <td>{item.priceUsd}</td>
                                    <td>{item.marketCapUsd}</td>
                                    <td>{item.vwap24Hr}</td>
                                    <td>{item.supply}</td>
                                    <td>{item.volumeUsd24Hr}</td>
                                    <td>{item.changePercent24Hr}</td>
                                </tr>
                            )
                        })
                    ) : ("")}

 */