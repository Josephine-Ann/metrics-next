import React, { useContext } from 'react'
import { UseLayout } from '../context/layoutContext';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from '../styles/SimpleScatter.module.scss'
import Navbar from '../Components/Navbar';

export default function SimpleScatter() {
    const {
        scatterData
    } = UseLayout();

    return (
        <Navbar>
            <div id={styles[["mobile"]]} className="h-[92vh] w-[100vw] flex justify-center items-center bg-black">
                <ResponsiveContainer id={styles[["simple__scatterchart__container"]]} width={270} height={533}>
                    <ScatterChart
                        margin={{
                            top: 100,
                            right: 10,
                            bottom: 200,
                            left: 2,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="stature" unit="min" />
                        <YAxis type="number" dataKey="y" name="weight" unit="b" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={scatterData} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
            <div id={styles[["desktop"]]} className="hidden sm:flex w-[100vw] sm:h-[91vh] justify-center items-center bg-black">
                <ResponsiveContainer id={styles[["simple__scatterchart__container"]]} width={600} height={400}>
                    <ScatterChart
                        margin={{
                            top: 5,
                            right: 20,
                            bottom: 20,
                            left: 5,
                        }}
                    >
                        <CartesianGrid />
                        <XAxis type="number" dataKey="x" name="stature" unit="min" />
                        <YAxis type="number" dataKey="y" name="weight" unit="b" />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Scatter name="A school" data={scatterData} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </Navbar >

    )
}