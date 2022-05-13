import React, { useContext } from 'react'
import { UseLayout } from '../context/layoutContext';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../styles/connectionTimePerClient.module.scss'
import Navbar from '../Components/Navbar';

export default function connectionTimePerClient() {
    const {
        areaData,
    } = UseLayout();

    return (
        <Navbar>
            <div className={styles[["dt-seen"]] + " " + styles[["tab-hidden"]] + " " + styles[["mob-hidden"]] + " " + styles[["gal-hidden"]] + ' w-full h-[91vh] bg-black justify-center items-center'}>
                <ResponsiveContainer id={styles[["arearesponsive__container"]]} width={800} height={450}>
                    <AreaChart
                        data={areaData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 100,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="m" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className={styles[["dt-hidden"]] + " " + styles[["tab-seen"]] + " " + styles[["mob-hidden"]] + " " + styles[["gal-hidden"]] + ' w-full h-[91vh] bg-black xl:flex justify-center items-center'}>
                <ResponsiveContainer id={styles[["arearesponsive__container"]]} width={600} height={600}>
                    <AreaChart
                        data={areaData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 100,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="m" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className={styles[["dt-hidden"]] + " " + styles[["tab-hidden"]] + " " + styles[["mob-seen"]] + " " + styles[["gal-hidden"]] + '   w-full h-[91vh] bg-black xl:flex justify-center items-center'}>
                <ResponsiveContainer id={styles[["arearesponsive__container"]]} width={350} height={400}>
                    <AreaChart
                        data={areaData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="m" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className={styles[["dt-hidden"]] + " " + styles[["tab-hidden"]] + " " + styles[["mob-hidden"]] + " " + styles[["gal-seen"]] + '   w-full h-[91vh] bg-black xl:flex justify-center items-center'}>
                <ResponsiveContainer id={styles[["arearesponsive__container"]]} width={260} height={260}>
                    <AreaChart
                        data={areaData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis unit="m" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Navbar>

    )
}