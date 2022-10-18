import React from 'react'

const Home = ()=>{
  let divStyle = {
    padding: '0% 12%',
    marginTop: '100px'
}
  return (
    <div>
        <div className="container mt-5">
          <div className="row" style={divStyle}>
            <div className="col-6">
              <div>
                <h1 style={{fontSize: '50px'}}>The Best Way<br/> to Bank & Invest.</h1>
                <p>We are synonymous with innovation, building excellence, superior<br/> financial performance and creating role models for society.</p>
                <p>Unlike other platforms, Rise lets you pick between stocks, US real<br/> estate and fixed income, according to your risk appetite. That way<br/> you can spread your risk and tap into different investments all in<br/> one place.</p>
              </div> 
            </div>

            <div className="col-6 text-center">
              <img src="https://res.cloudinary.com/akeem/image/upload/v1655468166/7455157406_b2ec7001-9751-4e99-a510-3b0be2ee5af7_q8majw.png" alt="" />
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Home