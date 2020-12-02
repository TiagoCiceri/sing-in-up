import React from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister'; 

const Forms = () => {

  return (
    <>
      <div className="forms-container">
        <div className="signin-signup">
          <FormLogin />  
          
          <FormRegister />
        </div>
      </div>

    </>
  )
};



export default Forms;