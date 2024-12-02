import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstname : "",
        lastname : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const changeHandler = (e) => {
        setUser((prevUser)=>({...prevUser,[e.target.name] : e.target.value}))
    }

    return(
        <div className='container col-6 border border-2 border-black rounded p-3 d-flex flex-column align-items-center mt-5 mb-5 gap-3' >
            <form className='col-5 d-flex flex-column gap-4'>
                <div >
                    <label class="form-label">First Name: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => changeHandler(e)} name='firstname' />

                </div>
                <div >
                    <label class="form-label">Last Name: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => changeHandler(e)} name='lastname' />

                </div>
                <div >
                    <label class="form-label">Email:</label> 
                    <input className='form-control input-bold-border' type='email' onChange={ (e) => changeHandler(e)} name='email' />

                </div>
                <div >
                    <label class="form-label">Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => changeHandler(e)} name='password' />

                </div>
                <div >
                    <label class="form-label"> Confirm Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => changeHandler(e)} name='confirmPassword'/>

                </div>
                <br />
            </form>
            <div>
                <h1 className='mb-4'>Your Form Data :</h1>
                <div className="d-flex gap-3 align-items-center">
                    <h4>First Name : </h4>
                    <h5>{user.firstname}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Last Name : </h4>
                    <h5>{user.lastname}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Email : </h4>
                    <h5>{user.email}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Password : </h4>
                    <h5>{user.password}</h5>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <h4>Confirm Password : </h4>
                    <h5>{user.confirmPassword}</h5>
                </div>
            </div>
        </div>
        );
}
export default Form