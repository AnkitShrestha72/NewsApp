import React from 'react'
import loading  from '/src/loading.gif';

const Spinner = () =>{
  
    return (
      
        <div className="text-center mb-5" >
        <img  style={{height: '4em'}} src={loading} alt="loading" />
      </div>
    )

}

export default Spinner
