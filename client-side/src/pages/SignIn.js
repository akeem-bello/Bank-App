import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = ()=>{
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [message, setmessage] = useState('');
    const url = 'http://localhost:4000/users/signin';
    const navigate = useNavigate();

    const signIn = ()=>{
        const currentUser = {email, password};
        axios.post(url, currentUser).then((res)=>{
            localStorage.token = res.data.token
            setmessage(res.data.message)
            if(res.data.status){
                navigate('/dashboard')
            }
        })
    }

    let wrapStyle = {
        backgroundImage: 'url(https://images.unsplash.com/photo-1601597110547-78516f198ce4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80)',
        paddingBottom: '9.6%'
    }

    let divStyle = {
        padding: '0% 23%'
    }

    let colStyle = {
        borderRadius: '5%',
        backgroundColor: 'white',
        marginTop: '100px'
    }

    let headStyle = {
        color: '#364EC6'
    }

    let labelStyle = {
        fontSize: '14px',
        marginTop: '20px',
        color: '#4a5568'
    }
    
    let btnStyle = {
        backgroundColor: '#364EC6',
        color: 'white',
        float: 'center',
        fontSize: '16px'
    }

    let inpStyle = {
        backgroundColor: '#EDF3F3'
    }
  return (
    <div style={wrapStyle}>
        <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Login to your Account</h3>
                    <div className='text-center'>{message}</div>

                    <label style={labelStyle}><strong>Email Address</strong></label>
                    <input type="text" className='form-control my-2' placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)} style={inpStyle}/>

                    <label style={labelStyle}><strong>Password</strong></label>
                    <input style={inpStyle} type="text" className='form-control my-2' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    
                    <button className='btn mt-4 w-100 p-2 justify-center' style={btnStyle} onClick={signIn}>LOG IN</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn