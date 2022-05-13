import React, { useContext } from 'react'
import { UseLayout } from '../context/layoutContext';
import sandwich from '../styles/images/sandwich.svg'
import Home_Icon from '../styles/images/Home_Icon.svg'
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = ({ children }) => {
    const {
        items,
        openMenu,
        // open
    } = UseLayout();

    return (
        <div>
            <div id={styles[["navbar__with__buttons"]]}>
                <div id={styles[["navbar"]]}>
                    <button className='text-xl mx-4'><a className='text-[#999999]'><FontAwesomeIcon id={styles[["navbar__sandwich"]]} onClick={() => openMenu()} src={sandwich} icon={faBars} /></a></button>
                </div>
                <ul id={items.open ? styles[["navbar__buttons"]] : styles[["navbar__closed"]]}>
                    <li><Link onClick={() => openMenu()} href="/"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon id={styles[["navbar__home"]]} onClick={() => openMenu()} src={sandwich} icon={faHome} /></a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/peers"><a className={styles[["layout__links-all"]]}>Peers Per Country</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/pieChart"><a className={styles[["layout__links-all"]]} >Peers Per Client</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/simpleScatter"><a className={styles[["layout__links-all"]]}>Messages Per Minute</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/area"><a className={styles[["layout__links-all"]]}>Connection Time Per Client</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/tinybaraggregations"><a className={styles[["layout__links-all"]]}>Aggregations</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/tinybarbeacon"><a className={styles[["layout__links-all"]]}>Average Messages</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/tinybarconnections"><a className={styles[["layout__links-all"]]}>Connections</a></Link></li>
                    <li><Link onClick={() => openMenu()} href="/tinybardisconnections"><a className={styles[["layout__links-all"]]}>Disconnections</a></Link></li>
                </ul>
            </div>
            <div id={styles[["navbar__sd"]]}>
                <Link href="/"><a className={styles[["navbar__sd__home"]] + " " + styles[["layout__links-all-grey"]]}>Home</a></Link>
            </div>
            {children}
        </div>

    )
}

export default Navbar;
