import React, { useState } from 'react'
import "../Styles/Navbar.css"
import { Link, Route, Routes } from 'react-router-dom'
import Herosection from './Herosection.jsx'
import { LuMoon } from "react-icons/lu";
import PricePlane from "./PricePlan.jsx";
import { IoSunny } from "react-icons/io5";
import Dashboard from './Dashboard.jsx';
import Efficiency from './Efficiency.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';



function Navbar() {
    const [mood,setmood]=useState(true)

    

    function changemood() {
        setmood(!mood); 
    }
    
    return (
        <>
            <div className='main' style={mood ? { backgroundColor: '#18181b'} : { backgroundColor: '#FFFF',color:'black'  }}>

                <div className="fy" >
                    <h2 style={mood ? {color:'white'} : { color:'black'  }}>ParkSmart</h2>
                </div>

                <div className="sy" style={mood ? {color:'white'} : { color:'black'  }}>
                    <Link className='navlink' to="/"            style={mood ? {color:'white'} : { color:'black',fontWeight:'350'  }}>Home</Link>
                    <Link className='navlink' to="/Dashboard"  style={mood ? {color:'white'} : { color:'black',fontWeight:'350'  }}>My Dashboard</Link>
                    <Link className='navlink' to="/Efficiency"     style={mood ? {color:'white'} : { color:'black',fontWeight:'350'  }}>Parking Efficiency</Link>
                    <Link className='navlink' to="/Login"     style={mood ? {color:'white'} : { color:'black',fontWeight:'350'  }}>Login</Link>
                    <span style={mood ? {color:'white'} : { color:'black'  }} className='moodicon' onClick={changemood}>{mood ? <LuMoon/>:<IoSunny/>}</span>
                </div>

            </div>

            <div>
                <Routes>
                     <Route path='/' element={<Herosection mood={mood}/>}> </Route>
                    <Route path='/Dashboard' element={<Dashboard mood={mood}/>}>  </Route>
                    <Route path='/PricePlan' element={<PricePlane mood={mood}/>}>  </Route>
                    <Route path='/Efficiency' element={<Efficiency mood={mood}/>}>  </Route>
                    <Route path='/Login' element={<Login mood={mood}/>}>  </Route>
                    <Route path='/Register' element={<Register mood={mood}/>}>  </Route>


                </Routes>
            </div>

        </>
    )
}

export default Navbar
