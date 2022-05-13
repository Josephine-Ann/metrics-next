import React, { useContext } from 'react'
import { UseLayout } from '../context/layoutContext';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/PieChart.module.scss'
import Navbar from "../Components/Navbar";

export default function Piechart() {
    const {
        renderCustomizedLabel,
        data,
        items
    } = UseLayout();

    return (
        <Navbar>
            <ResponsiveContainer id={styles[["piechart__smaller"]]} className={styles[["piechart__container"]]} width="100%" height="100%">
                <PieChart width={800} height={800}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={items.colors[index % items.colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer id={styles[["piechart__bigger"]]} className={styles[["piechart__container"]]} width="100%" height="100%">
                <PieChart width={800} height={800}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={250}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={items.colors[index % items.colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ResponsiveContainer id={styles[["piechart__medium"]]} className={styles[["piechart__container"]]} width="100%" height="100%">
                <PieChart width={800} height={800}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={210}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={items.colors[index % items.colors.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <ul id="piechart__list">
                <li id={styles[["first"]]}><FontAwesomeIcon style={{ color: items.colors[1] }} className={styles[["icon"]]} icon={faCaretRight} /> Lighthouse</li>
                <li id={styles[["second"]]}><FontAwesomeIcon style={{ color: items.colors[0] }} className={styles[["icon"]]} icon={faCaretRight} /> Prysm</li>
                <li id={styles[["third"]]}><FontAwesomeIcon style={{ color: items.colors[3] }} className={styles[["icon"]]} icon={faCaretRight} /> Teku</li>
                <li id={styles[["fourth"]]}><FontAwesomeIcon style={{ color: items.colors[4] }} className={styles[["icon"]]} icon={faCaretRight} /> Lodestar</li>
                <li id={styles[["fifth"]]}><FontAwesomeIcon style={{ color: items.colors[2] }} className={styles[["icon"]]} icon={faCaretRight} /> Unknown</li>
            </ul>
        </Navbar>


    )
}