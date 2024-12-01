import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [userFirstname,setUserFirstname] = useState("")
    const [userLastname,setUserLastname] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPass,setUserPass] = useState("")
    const [userConfirmPass,setUserConfirmPass] = useState("")
    
    return(
        <div className='container col-6 border border-2 border-black rounded p-3 d-flex flex-column align-items-center mt-5 mb-5 gap-3' >
            <form className='col-5 d-flex flex-column gap-4'>
                <div >
                    <label class="form-label">First Name: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => setUserFirstname(e.target.value)} value={userFirstname}/>

                </div>
                <div >
                    <label class="form-label">Last Name: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => setUserLastname(e.target.value)} value={userLastname}/>

                </div>
                <div >
                    <label class="form-label">Email:</label> 
                    <input className='form-control input-bold-border' type='email' onChange={ (e) => setUserEmail(e.target.value)} value={userEmail}/>

                </div>
                <div >
                    <label class="form-label">Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => setUserPass(e.target.value)} value={userPass}/>

                </div>
                <div >
                    <label class="form-label"> Confirm Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => setUserConfirmPass(e.target.value)} value={userConfirmPass}/>

                </div>
                <br />
            </form>
            <div>
                <h1 className='mb-4'>Your Form Data :</h1>
                <div className="d-flex gap-3 align-items-center">
                    <h4>First Name : </h4>
                    <h5>{userFirstname}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Last Name : </h4>
                    <h5>{userLastname}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Email : </h4>
                    <h5>{userEmail}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Password : </h4>
                    <h5>{userPass}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Confirm Password : </h4>
                    <h5>{userConfirmPass}</h5>
                </div>
            </div>
        </div>
        );
}
export default Form