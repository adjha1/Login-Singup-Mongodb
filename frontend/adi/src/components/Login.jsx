import React from 'react'

function Login() {
    async function sendData(e){
        e.preventDefault();
    
    const email=e.target.email.value;
    const password=e.target.password.value;
     const response=await fetch("https://login-singup-mongodb-backend.onrender.com/user/login",{
         method:"POST",
         body:JSON.stringify({email,password}),
         headers:{'content-type':'application/json'}
     })
             const res=await response.json();
             alert(res.msg);
    }
  return (
    <div style={{border:'5px solid red',padding:'15px'}}>
        <h1>User Login</h1>
        <form onSubmit={sendData}>
        
        <label>E Mail:  <input type="text" name="email" /></label>
        <label> Password:  <input type="password"  name="password" /></label>
        <button>Create Login</button>
        </form>
        </div>
  )
}

export default Login