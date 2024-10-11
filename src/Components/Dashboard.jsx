import React, { useState } from 'react'
import { useRef } from 'react';
import "../Styles/Dashboard.css"


//locomotive js
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';


function Dashboard({ mood }) {
  const containerRef = useRef(null);


  const [plane, setplane] = useState("Select a Package")

  return (
    <>
      <LocomotiveScrollProvider
        containerRef={containerRef}
        options={{
          smooth: true,
        }}
        watch={[]}>
        <div data-scroll-container ref={containerRef}>



          <div className='main-addstu' style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: "white" }} >

            <div className="selectPlan" style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#5e9ce3' }}>
              <center><h3>Select your Parking Package</h3></center>

              <form action="">
                <div className='mainform'>


                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{plane}</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" onClick={() => setplane("3 Month ₹399")} >3 Month ₹399</a></li>
                      <li><a class="dropdown-item" onClick={() => setplane("6 Month ₹599")} >6 Month ₹599</a></li>
                      <li><a class="dropdown-item" onClick={() => setplane("12 Month ₹999")}>12 Month ₹999</a></li>
                    </ul>
                  </div>


                  <div class="mb-1" >
                    <input class="form-control" type="file" id="formFile"  />
                  </div>


                  <div class="form-group" >
                    <input type="text" class="form-control" id="textInput" placeholder="Vechicle Company Name" />
                  </div>

                  <div>
                    <button type="submit"  class="btn btn-primary">Pay {plane.slice(8, 16)}</button>
                  </div>
                </div>        
                </form>
            </div>



            <center><div className="PlanData" style={mood ? { backgroundColor: "#18181b" } : { backgroundColor: '#5e9ce3' }}>
              <center><h3 className='mt-3'>User Information</h3></center>
            </div></center>



          </div>








        </div>
      </LocomotiveScrollProvider>
    </>
  )
}

export default Dashboard
