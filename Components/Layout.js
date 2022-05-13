import React, { useContext } from 'react';
import { UseLayout } from '../context/layoutContext';
import styles from '../styles/Layout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faGlobe, faClock, faCommentAlt, faPlus, faLink, faBan, faThLarge } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Navbar from "../Components/Navbar";

export default function Layout() {
    const {
        plusSlides,
        open,
        selected,
        slideIndex,
        items,
        info
    } = UseLayout();

    return (
        <Navbar>
            <div className='h-[91vh] lg:flex'>
                <div className={'lg:w-[50vw] w-[100vw] lg:h-[91vh] h-[41vh] flex justify-center items-center ' + styles[["image-planet"]]}>
                    <h1 className='text-[6.5vh] text-white'>Metrics</h1>
                </div>
                <div className='w-[100vw] lg:w-[50vw] lg:h-[91vh] h-[50vh]'>
                    <div className='flex h-[50%]'>
                        <div className={'w-[40vw] lg:w-[20vw] flex justify-center items-center ' + ((items.slideIndex === 1) && (" bg-[#d7c9c9] " + styles[["transition)"]])) + ((items.slideIndex === 2) && (" bg-[#4a3244] " + styles[["transition-2"]]))}>
                            <div className='w-[20%] h-full'>
                                <p className={"text-[4vw] text-white m-4 text-lg " + ((items.slideIndex === 1) && " hidden ")} onClick={() => plusSlides(-1)}>&#10094;</p>
                            </div>
                            <div className={'w-[80%] h-full flex flex-col items-center justify-center'}>
                                <Link href="/pieChart"><a className={'text-[7.5vh] md:text-[9.5vh] text-[#594343] ' + (items.slideIndex === 2 && "hidden ")}><FontAwesomeIcon icon={faProjectDiagram} /></a></Link>
                                <p className={styles[["font-galaxy"]] + " text-[#594343]  md:text-2xl " + ((items.slideIndex === 2) && " hidden ")}>Peers</p>
                                <Link href="/aggregations"><a className={'text-[7.5vh] md:text-[9.5vh] text-white ' + (items.slideIndex === 1 && "hidden ")}><FontAwesomeIcon icon={faPlus} /></a></Link>
                                <p className={styles[["font-galaxy"]] + " text-white  md:text-2xl " + ((items.slideIndex === 1) && " hidden ")}>Aggregations</p>
                            </div>
                        </div>
                        <div className={'w-[60vw] lg:w-[30vw] flex ' + ((items.slideIndex === 1) && " bg-[#4a3244] transition ") + ((items.slideIndex === 2) && " bg-[#d7c9c9] transition-2 ")}>
                            <div className='w-[60%] h-full justify-center items-end flex flex-col'>
                                <Link href="/simpleScatter"><a className={'text-[7.5vh] md:text-[9.5vh] text-white ' + (items.slideIndex === 2 && "hidden ")}><FontAwesomeIcon icon={faCommentAlt} /></a></Link>
                                <p className={styles[["font-galaxy"]] + " text-white  md:text-2xl " + ((items.slideIndex === 2) && " hidden ")}>Messages</p>
                                <Link href="/beaconMessage"><a className={'text-[7.5vh] md:text-[9.5vh] text-[#594343]  ' + (items.slideIndex === 1 && "hidden ")}><FontAwesomeIcon icon={faThLarge} /></a></Link>
                                <div id={styles[["font-galaxy-box"]]} className='md:w-[145px] lg:w-[95px] w-[60px]'>
                                    <p className={styles[["font-galaxy"]] + " w-[60px] mx-auto text-[#594343]  md:text-2xl " + ((items.slideIndex === 1) && " hidden ")}>Average</p>
                                </div>
                            </div>
                            <div className='w-[40%] h-full justify-end flex'>
                                <p className={"text-[4vw] text-white m-4 text-lg " + ((items.slideIndex === 2) && " hidden ")} onClick={() => plusSlides(+1)}>&#10095;</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex h-[50%] justify-center'>
                        <div className={'lg:w-[30vw] w-[60vw] bg-[#594343]  justify-center items-center flex-col flex ' + ((items.slideIndex === 1) && (" bg-[#594343] " + styles[["transition"]])) + " " + ((items.slideIndex === 2) && (" bg-[#3e3434] " + styles[["transition-2"]]))}>
                            <Link href="/peers"><a className={'text-[7.5vh] md:text-[9.5vh] text-white  ' + (items.slideIndex === 2 && "hidden ")}><FontAwesomeIcon icon={faGlobe} /></a></Link>
                            <p className={styles[["font-galaxy"]] + " text-white md:text-2xl " + ((items.slideIndex === 2) && " hidden ")}>Peers</p>
                            <Link href="/connections"><a className={'text-[7.5vh] md:text-[9.5vh] text-white ' + (items.slideIndex === 1 && "hidden ")}><FontAwesomeIcon icon={faLink} /></a></Link>
                            <p className={styles[["font-galaxy"]] + " text-white md:text-2xl  " + ((items.slideIndex === 1) && " hidden ")}>Connections</p>
                        </div>
                        <div className={'lg:w-[20vw] w-[40vw] justify-center items-center flex flex-col ' + ((items.slideIndex === 1) && (" bg-[#68687a] " + styles[["transition"]])) + ((items.slideIndex === 2) && (" bg-[#686879] " + styles[["transition-2"]]))}>
                            <Link href="/connectionTimePerClient"><a className={'text-[7.5vh] md:text-[9.5vh] text-white ' + (items.slideIndex === 2 && "hidden ")}><FontAwesomeIcon icon={faClock} /></a></Link>
                            <p className={styles[["font-galaxy"]] + " text-white md:text-2xl  " + ((items.slideIndex === 2) && " hidden ")}>Timing</p>
                            <Link href="/disconnections"><a className={'text-[7.5vh] md:text-[9.5vh] text-white  ' + (items.slideIndex === 1 && "hidden ")}><FontAwesomeIcon icon={faBan} /></a></Link>
                            <p className={styles[["font-galaxy"]] + " text-white md:text-2xl  " + ((items.slideIndex === 1) && " hidden ")}>Disconnections</p>
                        </div>
                    </div>
                </div>
            </div>
        </Navbar >
    )
}


{/* <div className={"w-[100vw] h-[91vh]"}>
         {/* id={styles[["layout__planet"]]}
         id={!items.open ? styles[["layout__title"]] : styles[["layout__title__hidden"]]}
         */}
//          <div className={'w-[100vw] h-[41vh] flex justify-center items-center ' + styles[["image-planet"]]}>
//          <h1 className='text-[6.5vh] text-white'>Metrics</h1>
//      </div>
//      <div className='w-[100vw] h-[50vh]'>
//          <div className='flex h-[50%]'>
//              <div className='w-[40vw] bg-slate-500 flex justify-center items-center'>
//                  <Link href="/pieChart"><a className='text-[7.5vh] md:text-[9.5vh] text-white'><FontAwesomeIcon icon={faProjectDiagram} /></a></Link>
//              </div>
//              <div className='w-[60vw] bg-slate-900 flex'>
//                  <div className='w-[60%] h-full justify-end items-center flex'>
//                      <Link style={{ color: "#5a4343" }} href="/simpleScatter"><a className='text-[7.5vh] md:text-[9.5vh] text-white'><FontAwesomeIcon icon={faCommentAlt} /></a></Link>
//                  </div>
//                  <div className='w-[40%] h-full items-start justify-end flex'>
//                      {/* items.slideIndex === 2 ? styles[["layout__arrows"]] + " " + styles[[" next"]] : styles[["next"]] */}
//                      <p className={"text-white m-4 text-lg"} onClick={() => plusSlides(+1)}>&#10095;</p>
//                  </div>
//              </div>
//          </div>
//          <div className='flex h-[50%] justify-center'>
//              <div className='w-[60vw] bg-slate-200  justify-center items-center flex'>
//                  <Link href="/peers"><a className='text-[7.5vh] md:text-[9.5vh] text-white'><FontAwesomeIcon icon={faGlobe} /></a></Link>
//              </div>
//              <div className='w-[40vw] bg-slate-300  justify-center items-center flex'>
//                  <Link href="/connectionTimePerClient"><a className='text-[7.5vh] md:text-[9.5vh] text-white'><FontAwesomeIcon icon={faClock} /></a></Link>
//              </div>
//          </div>
//      </div>
//  </div >

//     <Navbar>
//         <div className={"w-[100vw] h-[91vh]"}>
//             <div className='w-[100vw] h-[41vh]'></div>
//             <div className='w-[100vw] h-[50vh]'>
//                 <div className='flex h-[50%]'>
//                     <div className='w-[40vw] bg-slate-500'></div>
//                     <div className='w-[60vw] bg-slate-900'></div>
//                 </div>
//                 <div className='flex h-[50%]'>
//                     <div className='w-[60vw] bg-slate-200'></div>
//                     <div className='w-[40vw] bg-slate-300'></div>
//                 </div>
//             </div>
//         </div>
//         <div className={items.selected === "home" ? styles[["layout__background"]] : styles[["layout__hidden"]]}>
//             <div id={styles[["layout__planet"]]}>
//                 <h1 id={!items.open ? styles[["layout__title"]] : styles[["layout__title__hidden"]]}>Metrics</h1>
//             </div>
//             <div id={items.slideIndex === 1 ? "w-[100vw] h-[48.3vh] bg-white" : styles[["hide__upper"]]} className="fade">
//                 <div id={styles[["layout__top-layer-panels"]]}>
//                     <div className={styles[["layout__panels__top__left"]]}>
//                         <Link href="/pieChart"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faProjectDiagram} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Peers Per Client</p>
//                     </div>
//                     <div className={styles[["layout__panels__top__right"]]}>
//                         <Link style={{ color: "#5a4343" }} href="/simpleScatter"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faCommentAlt} /></a></Link>
//                         <p className={styles[["layout__labels__white"]]}>Messages Per Minute</p>
//                     </div>
//                     <p className={items.slideIndex === 1 ? styles[["layout__arrows"]] + " " + styles[[" prev"]] : styles[["prev"]]} onClick={() => plusSlides(-1)}>&#10094;</p>
//                     <p className={items.slideIndex === 2 ? styles[["layout__arrows"]] + " " + styles[[" next"]] : styles[["next"]]} onClick={() => plusSlides(+1)}>&#10095;</p>
//                 </div>
//                 <div id={styles[["layout__bottom-layer-panels"]]}>
//                     <div className={styles[["layout__panels__bottom__left"]]}>
//                         <Link href="/peers"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faGlobe} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Peers Per Country</p>
//                     </div>
//                     <div className={styles[["layout__panels__bottom__right"]]}>
//                         <Link href="/connectionTimePerClient"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faClock} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Connection Time Per Client</p>
//                     </div>
//                 </div>
//             </div>
//             <div id={items.slideIndex === 2 ? styles[["other__layout__panels"]] : styles[["hide__lower"]]} className="fade">
//                 <div id={styles[["other__layout__top-layer-panels"]]}>
//                     <div className={styles[["other__layout__panels__top__left"]]}>
//                         <Link href="/aggregations"><a className={styles[["layout__links-all"]] + " " + styles[["layout__links-all-grey"]]} style={{ color: "rgb(90, 67, 67);" }}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faPlus} /></a></Link>
//                         <p className={styles[["layout__labels__white"]]}>Aggregations</p>
//                     </div>
//                     <div className={styles[["other__layout__panels__top__right"]]}>
//                         <Link href="/beaconMessage"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faThLarge} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Average Messages</p>
//                     </div>
//                     <p className={items.slideIndex === 1 ? styles[["layout__arrows"]] + " " + styles[["prev-sec"]] : styles[["prev-sec"]]} onClick={() => plusSlides(-1)}>&#10094;</p>
//                     <p className={items.slideIndex === 2 ? styles[["layout__arrows"]] + " " + styles[["next"]] : styles[["next"]]} onClick={() => plusSlides(+1)}>&#10095;</p>
//                 </div>
//                 <div id={styles[["layout__bottom-layer-panels"]]}>
//                     <div className={styles[["other__layout__panels__bottom__left"]]}>
//                         <Link href="/connections"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faLink} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Connections</p>
//                     </div>
//                     <div className={styles[["layout__panels__bottom__right"]]}>
//                         <Link href="/disconnections"><a className={styles[["layout__links-all"]]}> <FontAwesomeIcon className={styles[["layout__icon"]]} icon={faBan} /></a></Link>
//                         <p className={styles[["layout__labels"]]}>Disconnections</p>
//                     </div>
//                 </div>
//             </div>
//         </div>



{/* <div className={items.selected === "home" ? styles[["layout__background"]] : styles[["layout__hidden"]]} >
<div id={styles[["layout__planet"]]}>
    <h1 id={!items.open ? styles[["layout__title"]] : styles[["layout__title__hidden"]]}>Metrics</h1>
    <div id={items.slideIndex === 1 ? styles[["layout__panels"]] : styles[["hide__upper"]]} className="fade">
        <div id={styles[["layout__top-layer-panels"]]}>
            <div className={styles[["layout__panels__top__left"]]}>
                <Link href="/pieChart"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faProjectDiagram} /></a></Link>
                <p className={styles[["layout__labels"]]}>Peers Per Client</p>
            </div>
            <div className={styles[["layout__panels__top__right"]]}>
                <Link style={{ color: "#5a4343" }} href="/simpleScatter"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faCommentAlt} /></a></Link>
                <p className={styles[["layout__labels__white"]]}>Messages Per Minute</p>
            </div>
            <p className={items.slideIndex === 1 ? styles[["layout__arrows"]] + " " + styles[[" prev"]] : styles[["prev"]]} onClick={() => plusSlides(-1)}>&#10094;</p>
            <p className={items.slideIndex === 2 ? styles[["layout__arrows"]] + " " + styles[[" next"]] : styles[["next"]]} onClick={() => plusSlides(+1)}>&#10095;</p>
        </div>
        <div id={styles[["layout__bottom-layer-panels"]]}>
            <div className={styles[["layout__panels__bottom__left"]]}>
                <Link href="/peers"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faGlobe} /></a></Link>
                <p className={styles[["layout__labels"]]}>Peers Per Country</p>
            </div>
            <div className={styles[["layout__panels__bottom__right"]]}>
                <Link href="/connectionTimePerClient"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faClock} /></a></Link>
                <p className={styles[["layout__labels"]]}>Connection Time Per Client</p>
            </div>
        </div>
    </div>
    <div id={items.slideIndex === 2 ? styles[["other__layout__panels"]] : styles[["hide__lower"]]} className="fade">
        <div id={styles[["other__layout__top-layer-panels"]]}>
            <div className={styles[["other__layout__panels__top__left"]]}>
                <Link href="/aggregations"><a className={styles[["layout__links-all"]] + " " + styles[["layout__links-all-grey"]]} style={{ color: "rgb(90, 67, 67);" }}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faPlus} /></a></Link>
                <p className={styles[["layout__labels__white"]]}>Aggregations</p>
            </div>
            <div className={styles[["other__layout__panels__top__right"]]}>
                <Link href="/beaconMessage"><a className={styles[["layout__links-all"]]} ><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faThLarge} /></a></Link>
                <p className={styles[["layout__labels"]]}>Average Messages</p>
            </div>
            <p className={items.slideIndex === 1 ? styles[["layout__arrows"]] + " " + styles[["prev-sec"]] : styles[["prev-sec"]]} onClick={() => plusSlides(-1)}>&#10094;</p>
            <p className={items.slideIndex === 2 ? styles[["layout__arrows"]] + " " + styles[["next"]] : styles[["next"]]} onClick={() => plusSlides(+1)}>&#10095;</p>
        </div>
        <div id={styles[["layout__bottom-layer-panels"]]}>
            <div className={styles[["other__layout__panels__bottom__left"]]}>
                <Link href="/connections"><a className={styles[["layout__links-all"]]}><FontAwesomeIcon className={styles[["layout__icon"]]} icon={faLink} /></a></Link>
                <p className={styles[["layout__labels"]]}>Connections</p>
            </div>
            <div className={styles[["layout__panels__bottom__right"]]}>
                <Link href="/disconnections"><a className={styles[["layout__links-all"]]}> <FontAwesomeIcon className={styles[["layout__icon"]]} icon={faBan} /></a></Link>
                <p className={styles[["layout__labels"]]}>Disconnections</p>
            </div>
        </div>
    </div>
</div>
</div > */}

