import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    const [userFirstname,setUserFirstname] = useState("")
    const [userLastname,setUserLastname] = useState("")
    const [userEmail,setUserEmail] = useState("")
    const [userPass,setUserPass] = useState("")
    const [userConfirmPass,setUserConfirmPass] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [listUsers, setListUser] = useState([])



    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(hasBeenSubmitted);
        setListUser([...listUsers, {userFirstname,userLastname,userEmail,userPass,userConfirmPass}])
        setUserFirstname("")
        setUserLastname("")
        setUserEmail("")
        setUserPass("")
        setUserConfirmPass("")
        setHasBeenSubmitted(true)
        
    }
    
    return(
        <div className='container col-7 border border-2 border-black rounded p-3 d-flex flex-column align-items-center mt-5 mb-5 gap-3' >
            {hasBeenSubmitted? <h1>Thank you for submitting the form!</h1>:<h1>Welcome. Please submit the form</h1> }
            <form className='col-6' onSubmit={submitHandler}>
                <div >
                    <label class="form-label">Firstname: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => setUserFirstname(e.target.value)} value={userFirstname}/>
                    {userFirstname.length<2 ?<p style={{color:"red"}}>Firstname must be at least 2</p>:<p></p>}

                </div>
                <div >
                    <label class="form-label">Lastname: </label> 
                    <input className='form-control input-bold-border' onChange={ (e) => setUserLastname(e.target.value)} value={userLastname}/>
                    {userLastname.length<2 ?<p style={{color:"red"}}>Lastname must be at least 2</p>:<p></p>}

                </div>
                <div >
                    <label class="form-label">Email:</label> 
                    <input className='form-control input-bold-border' type='email' onChange={ (e) => setUserEmail(e.target.value)} value={userEmail}/>
                    {userEmail.length<8 ?<p style={{color:"red"}}>Email must be at least 2</p>:<p></p>}

                </div>
                <div >
                    <label class="form-label">Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => setUserPass(e.target.value)} value={userPass}/>
                    {userPass.length<8 ?<p style={{color:"red"}}>Password must be at least 8 characters</p>:<p></p>}

                </div>
                <div >
                    <label class="form-label"> Confirm Password: </label>
                    <input className='form-control input-bold-border' type="password" onChange={ (e) => setUserConfirmPass(e.target.value)} value={userConfirmPass}/>
                    {userPass!=userConfirmPass ?<p style={{color:"red"}}>Passwords must match</p>:<p></p>}

                </div>
                <br />
                <button className='btn btn-dark' >Submit</button>
            </form>
            <div>
                <h1>Users :</h1>
                {
                    listUsers.map((user,index) => 
                        <p className='border border-black rounded p-3' key={index}>{user.userFirstname} {user.userLastname} ({user.userEmail})</p>
                    )    
                }

            </div>
        </div>
        );
}
export default Form