import React from 'react'

function Resister() {
   async function sendData(e){
        e.preventDefault();
    const name=e.target.uname.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
     const response=await fetch("https://login-singup-mongodb-backend.onrender.com/user/register",{
         method:"POST",
         body:JSON.stringify({name,email,password}),
         headers:{'content-type':'application/json'}
     })
             const res=await response.json();
             alert(res.msg);
    }
  return (
    <div  style={{border:'5px solid red',padding:'15px'}}>
        <h1>Singup</h1>
        <form onSubmit={sendData}>
            <label>User Name: <input type="text" name="uname"/></label>
            <label>E Mail:  <input type="text" name="email" /></label>
        <label> Password:  <input type="password"  name="password" /></label>
        <button>Create Singup</button>
        </form>
    </div>
  )
}

export default Resister