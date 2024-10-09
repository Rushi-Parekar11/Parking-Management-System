import "../Styles/Herosection.css";
import mainImg from "../Img/ParkingHero.png";
import cautionImg from "../Img/caution.png";
import { useState, useRef } from 'react';
import React from 'react';

// Locomotive Scroll imports
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Link } from "react-router-dom";

function Herosection({ mood }) {

    const containerRef = useRef(null);

    return (
        <>
            <LocomotiveScrollProvider
                containerRef={containerRef} 
                options={{
                    smooth: true,
                }}
                watch={[]}
            >
                <div data-scroll-container ref={containerRef}>
                    <div className="heromain" style={mood ? { backgroundColor: '#18181b' } : { background: 'linear-gradient(to right,#5899E2, #FFFF)' }}>
                        <div className="one">
                            <div className="namesec"  style={mood ? { backgroundColor: '#18181b' } : { background: 'linear-gradient(to right,#5899E2, #FFFF)', color: 'black' }}>
                                <h2 className="txt1">Where Parking</h2>
                                <h2 className="txt1">Meets Perfection.</h2>
                                <h3 className="txt2" style={mood ? { fontWeight: '100' } : { fontWeight: '300' }} > The solution for{" "}<strong style={{ color: '#ffea73' }}>MGM's</strong> hassle-free parking management.</h3>
                            </div>

                            <div className="imgsec" style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}>
                                <img src={mainImg} alt="Parking Hero" id="mainimgcss" />
                            </div>
                        </div>

                         <div style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}   className="cautionmain">

                            <div id="firstrow" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6" className="firstrow">
                                <img src={cautionImg} alt="Caution"  height="50px" width="300px"  />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                            </div>

                            <div id="midrow" data-scroll data-scroll-direction="horizontal" data-scroll-speed="9" className="midrow">
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                            </div>

                            <div id="secondrow" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-15" className="secondrow">
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                                <img src={cautionImg} alt="Caution" height="50px" width="300px" />
                            </div>
                        </div>





                        {/* button */}
                        <div
                            className="mainbutton"
                            style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}
                        >
                            <button className="mainBtn">Add vehicle</button>
                            <Link to="/Dashboard" className="mainBtn" id="midBtn">My Dashboard</Link>
                            <Link to='/PricePlan' className="mainBtn">Price Plans</Link>
                        </div>






                        {/* total van */}
                        <div className="two" style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}>
                            
                        </div>






                    </div>
                </div>
            </LocomotiveScrollProvider>
        </>
    );
}

export default Herosection;
