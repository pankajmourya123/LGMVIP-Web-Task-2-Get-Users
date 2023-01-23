import React from 'react'

function Data(props) {
    
    return(    
        <div >
            {(props.user).map(({ id, first_name, last_name, email, avatar }) => {
    return(
                <div className="card" key={id}>
  <img className='img' src={avatar} alt="img"/>
  <p>  Employee Id : {id}</p>
  <p className="title">First Name : {first_name}</p>
  <p className="title"> Last Name : {last_name}</p>
  <p> Email : {email}</p>
  
  
  </div>)
             } )
      }

           </div> 
           
      
    )  
}

export default Data