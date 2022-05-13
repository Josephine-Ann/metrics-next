import React, { useContext } from 'react'
import { UseLayout } from '../context/layoutContext';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import styles from '../styles/TinyBar.module.scss'
import Navbar from '../Components/Navbar';

export default function Connections() {

    const {
        renderCustomBarLabel,
        connections
    } = UseLayout();

    return (
        <Navbar>
            <div className='sm:hidden w-full h-[91vh] bg-black flex justify-center items-center'>
                <ResponsiveContainer className={styles[["tiny__barchart__five__noshow"]]} id={styles[["tiny__barchart__container"]]} width={280} height={500}>
                    <BarChart width={600} height={300} data={connections}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='hidden w-full h-[91vh] bg-black sm:flex justify-center items-center'>
                <ResponsiveContainer className={styles[["tiny__barchart__five__noshow"]]} id={styles[["tiny__barchart__container"]]} width={600} height={450}>
                    <BarChart width={600} height={300} data={connections}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="uv" fill="#8884d8" label={renderCustomBarLabel} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Navbar>

    )
}

// <BarChart width={600} height={300} data={data}>
//     <XAxis dataKey="name" tick={renderCustomAxisTick} />
//     <YAxis />
//     <Bar dataKey="uv" barSize={30} fill="#8884d8"
//         label={renderCustomBarLabel} />
// </BarChart>
