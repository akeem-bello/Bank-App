import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const SignUp = ()=>{
    const navigate = useNavigate();
    const [message, setmessage] = useState('');
    const url = 'http://localhost:4000/users/signup';

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          gender: '',
          accountType: '',
          email: '',
          phoneNumber: '',
          password: ''
        },
        onSubmit : (values)=>{
        let accountNumber = Math.floor('69' + Math.random() * 100000000)
        const userDetails = {
            firstName:values.firstName, 
            lastName:values.lastName, 
            gender:values.gender, 
            accountType:values.accountType, 
            email:values.email, 
            phoneNumber:values.phoneNumber, 
            password:values.password, 
            accountNumber};
            
        axios.post(url, userDetails).then((res)=>{
            setmessage(res.data.message);
            if(res.data.status){
                navigate('/signin')
            }
        })
        },
        validate : (values)=>{
            let errors = {};
            let regexForFirstName = /^([a-zA-z]+)$/
            let regexForLastName = /^([a-zA-z]+)$/
            // let regexForEmail = /^([\w]+)([@])([a-zA-Z]+)([\.])([a-zA-Z]+)([\.])([a-zA-Z]+)?$/ 
            let regexForPhoneNumber = /^[\d]{11}$/
            let regexForPassword = /^([\w]+)([\.])?$/
            if(values.firstName == ''){
                errors.firstName = 'This field is required'
            }else if(!regexForFirstName.test(values.firstName)){
                errors.firstName = 'First name can only contain letters'
            }
            if(!values.lastName){
                errors.lastName = 'This field is required'
            }else if(!regexForLastName.test(values.lastName)){
                errors.lastName = 'Last name can only contain letters'
            }    
            if(!values.gender){
                errors.gender = 'This field is required'
            }
            if(!values.accountType){
                errors.accountType = 'This field is required'
            }
            if(!values.email){
                errors.email = 'This field is required'
            }
            // else if(!regexForEmail.test(values.email)){
            //     errors.email = 'This is not an email'
            // }    
            if(!values.phoneNumber){
                errors.phoneNumber = 'This field is required'
            }else if(!regexForPhoneNumber.test(values.phoneNumber)){
                errors.phoneNumber = 'Phone number must be 11 digits'
            }
            if(!values.password){
                errors.password = 'This field is required'
            }else if(!regexForPassword.test(values.password)){
                errors.password = "Password can't contain any special characters"
            }
            return errors
        }
      })

    let wrapStyle = {
        backgroundImage: 'url(https://wallpaperaccess.com/full/2311977.jpg)'
    }

    let divStyle = {
        padding: '0% 23%'
    }

    let inpStyle = {
        backgroundColor: '#EDF3F3'
    }

    let labelStyle = {
        fontSize: '14px',
        marginTop: '20px',
        color: '#4a5568'
    }
    
    let pStyle = {
        fontSize: '12px',
        color: '#4a5568'
    }

    let headStyle = {
        color: '#364EC6'
    }

    let colStyle = {
        borderRadius: '5%',
        backgroundColor: 'white'
    }

    let btnStyle = {
        backgroundColor: '#364EC6',
        color: 'white',
        float: 'center',
        fontSize: '16px'
    }
  return (
    <div style={wrapStyle}>
        <div className="container">
            <div className="row" style={divStyle}>
                <div className="col-7 mx-auto shadow p-5 mb-5 mt-5" style={colStyle}>
                    <h3 className='text-center' style={headStyle}>Create a Secure Account</h3>
                    <p className='text-center' style={pStyle}>Welcome to the future of Banking & Investments</p>
                    <div className='text-center'>{message}</div>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <label style={labelStyle}><strong>First Name</strong></label>
                        <input type="text" className='form-control my-2' placeholder='First Name' onChange={formik.handleChange} onBlur={formik.handleBlur} name='firstName' style={inpStyle}/>
                        {formik.touched.firstName ? <div className='text-danger'>{formik.errors.firstName}</div> : ''}

                        <label style={labelStyle}><strong>Last Name</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Last Name' onChange={formik.handleChange} onBlur={formik.handleBlur} name='lastName'/>
                        {formik.touched.lastName ? <div className='text-danger'>{formik.errors.lastName}</div> : ''}

                        <select className='w-100' style={labelStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} name='gender'>
                            <option selected disabled>Gender</option>
                            <option value="Male">Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                        {formik.touched.gender ? <div className='text-danger'>{formik.errors.gender}</div> : ''}

                        <select className='w-100' style={labelStyle} onChange={formik.handleChange} onBlur={formik.handleBlur} name='accountType'>
                            <option selected disabled>Account Type</option>
                            <option value='Savings'>Savings</option>
                            <option value='Current'>Current</option>
                            <option value='Business'>Business</option>
                        </select>
                        {formik.touched.accountType ? <div className='text-danger'>{formik.errors.accountType}</div> : ''}

                        <label style={labelStyle}><strong>Email Address</strong></label>
                        <input type="text" className='form-control my-2' placeholder='Email Address' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' style={inpStyle}/>
                        {formik.touched.email ? <div className='text-danger'>{formik.errors.email}</div> : ''}

                        <label style={labelStyle}><strong>Phone Number</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Phone Number' onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNumber'/>
                        {formik.touched.phoneNumber ? <div className='text-danger'>{formik.errors.phoneNumber}</div> : ''}

                        <label style={labelStyle}><strong>Password</strong></label>
                        <input style={inpStyle} type="text" className='form-control my-2' placeholder='Password' onChange={formik.handleChange} onBlur={formik.handleBlur} name='password'/>
                        {formik.touched.password ? <div className='text-danger'>{formik.errors.password}</div> : ''}
                        
                        <button type='submit' className='btn mt-4 w-100 p-2 justify-center' style={btnStyle}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp