import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Dashboard = ()=>{
  const [accountBalance, setaccountBalance] = useState(5000000);
  const navigate = useNavigate();
  const url = 'http://localhost:4000/users/dashboard';
  const token = localStorage.token;
  const [userDetails, setuserDetails] = useState('');
    useEffect(() => {
      axios.get(url, {
        headers:{
        "Authorization": `Bearer ${token}`,
        "Accept": "application/json",
        "Content-Type": "application/json"
      }}).then((res)=>{
        if(!res.data.status){
            localStorage.removeItem('token')
            navigate('/signin')
        }else{
            console.log(res)
            setuserDetails(res.data.result)
        }
      })
    }, [])
    

    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/signin')
    }

    const fundAccount = ()=>{
      let funds = 100000;
      setaccountBalance(accountBalance + funds)
      localStorage.setItem('upBal', accountBalance);
    }
  
  return (
    <div>
        <div className="p-5">
          <div className="row">
            <div className="col-4 shadow p-4">
              <div style={{marginBottom: '30px'}}>
                <h4 style={{marginBottom: '30px'}}>Welcome, {userDetails.firstName}</h4>
                <h6>Total Balance</h6>
                <h5>{accountBalance}</h5>               
              </div>
              <div style={{marginBottom: '30px'}}>
                <h6>Main Account({userDetails.accountType})</h6>
                <h3>Your account balance is {accountBalance}</h3>
              </div>
              <div className="row">
                <div className="col-4">
                <button className='btn-secondary' onClick={fundAccount}><img src="https://cdn-icons-png.flaticon.com/512/584/584093.png" alt="" width={'100%'}/></button>
              <h6 style={{marginTop: '10px', textAlign: 'center'}}>Fund Account</h6>
                </div>
                <div className="col-4">
                <button className='btn-secondary'><img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" alt="" width={'100%'}/></button>
              <h6 style={{marginTop: '10px', textAlign: 'center'}}>Payments</h6>
                </div>
                <div className="col-4">
                <button className='btn-secondary'><img src="https://cdn-icons-png.flaticon.com/512/1521/1521863.png" width={'100%'}/></button>
              <h6 style={{marginTop: '10px', textAlign: 'center'}}>Requests</h6>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div style={{textAlign: 'center', height: '50%'}} className='shadow p-4'>
                <h4>Requests</h4>
                <p>You have no requests at the moment.</p>
              </div>
              <div className='shadow p-4'>
                <h4 style={{textAlign: 'center'}}>Recent Transactions</h4>
                <a href=""><p>See all transactions.</p></a>
              </div>
            </div>
            <div className="col-4 p-4 shadow">
              <div style={{textAlign: 'center'}}>
              <h4 style={{marginBottom: '30px'}}>Profile</h4>
              <h4>{userDetails.firstName} {userDetails.lastName}</h4>
              <p style={{marginBottom: '30px'}}>{userDetails.accountNumber}</p>
              <button className='btn-secondary' onClick={logout}>LOG OUT</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard