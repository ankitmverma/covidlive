import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [sdata, setSdata] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://api.covid19india.org/data.json');
            const resData = await response.json();
            setSdata(resData.statewise[20])
        }
        catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <section>
                <div className="container text-center py-5">
                    <h5 className="pb-2">🔴 LIVE</h5>
                    <h2 className="pb-5">COVID-19 CORONAVIRUS TRCAKER</h2>

                    <div className="row">

                        <div className="col-md-4">
                            <div className="card ch-1">
                                <div className="card-body">
                                    <h3 className="card-title"><small>State</small> Madhya Pradesh</h3>
                                    <h1 className="card-text">{sdata.active}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card ch-2">
                                <div className="card-body">
                                    <h3 className="card-title"><small>Total</small>Active</h3>
                                    <h1 className="card-text">{sdata.active}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card ch-3">
                                <div className="card-body">
                                    <h3 className="card-title"><small>Total</small>Confirmed</h3>
                                    <h1 className="card-text">{sdata.confirmed}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card ch-4">
                                <div className="card-body">
                                    <h3 className="card-title"><small>Total</small>Deaths</h3>
                                    <h1 className="card-text">{sdata.deaths}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card ch-5">
                                <div className="card-body">
                                    <h3 className="card-title"><small>Total</small>Recovered</h3>
                                    <h1 className="card-text">{sdata.recovered}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card ch-6">
                                <div className="card-body">
                                    <h3 className="card-title"><small>Data</small>last updated</h3>
                                    <h1 className="card-text">{sdata.lastupdatedtime}</h1>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Covid;