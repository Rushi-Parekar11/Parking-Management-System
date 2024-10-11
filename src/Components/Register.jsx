import React, { useState } from 'react';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [vehicleType, setVehicleType] = useState('Car');
    const [plateNumber, setPlateNumber] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    

    return (
        <>
        <div className="registermain" style={{height:"150vh",width:'100%',backgroundColor:"#18181b",color:'white'}}>
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="text-center mb-4">Register</h3>
                    <form >
                        <div className="form-group mb-3 ">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                className="form-control w-100" 
                                id="username" 
                                placeholder="Enter username"
                                value={username}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                className="form-control w-100" 
                                id="password" 
                                placeholder="Enter password"
                                value={password}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="ownerName">Vehicle Owner Name</label>
                            <input 
                                type="text" 
                                className="form-control w-100" 
                                id="ownerName" 
                                placeholder="Enter vehicle owner name "
                                value={ownerName}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="vehicleType">Vehicle Type</label>
                            <select 
                                className="form-control" 
                                id="vehicleType" 
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                                required
                            >
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                                <option value="Scooty">Scooty</option>
                            </select>
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="plateNumber">Vehicle Plate Number</label>
                            <input 
                                type="text" 
                                className="form-control w-100" 
                                id="plateNumber" 
                                placeholder="Enter vehicle plate number"
                                value={plateNumber}
                                required
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="contactNumber">Contact Number</label>
                            <input 
                                type="tel" 
                                className="form-control w-100" 
                                id="contactNumber" 
                                placeholder="Enter contact number"
                                value={contactNumber}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        
            
        </>
    );
}

export default Register;
