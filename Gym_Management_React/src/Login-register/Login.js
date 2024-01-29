import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
const nevigate = useNavigate();
    const[input, setInput] = useState({
       
        email:"",
        password:""

    });

    const handleLogin = (e) =>{
        e.preventDefault();
        const loggeduser=JSON.parse( localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
           localStorage.setItem("loggedin" , true);
            nevigate("/");
        }
        else{
            alert("wrong email or password")
        }
    }
  return (
    <>
    <div className='login-background'></div>

         <div className=' login container  rounded border '>
          <h2 className='text-center text-light'>Admin Login</h2>

<form onSubmit={handleLogin} className="" >

  <div className="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input
    
     name='email'
     value={input.email}
      onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})   
     }
    type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
  </div>
  <div className="form-group mt-3 mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input
     name='password'
     value={input.password}
      onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})   
     }
    type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
<p className='mt-3 text-center'>  Don't have an account?
<Link to={"/register"}> Register here</Link>
</p>
</form>
    </div>
    </>
 
  )
}

export default Login;