import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Register() {
 const nevigater = useNavigate();

    const[input, setInput] = useState({
        name:"",
        email:"",
        password:""

    });


//store value in local storage
const handleSubmit=(e)=>{
    e.preventDefault();
     localStorage.setItem("user", JSON.stringify(input));
nevigater("/login")
};




  return (
    <div className='container register bg-light shadow '><h2 className='text-center'>Admin Register</h2>

<form onSubmit={handleSubmit}  >
  <div className="form-group mt-5 ">
    <label for="exampleInputEmail1">Name</label>
    <input
    name='name'
    value={input.name}
     onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})   
    }
     type="text" 
     className="form-control" 
     id="exampleInputEmail1"
     placeholder="Enter Name" required />

  </div>
  <div className="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input
     name='email'
     value={input.email}
      onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})   
     }
    type="email"
     className="form-control" 
     id="exampleInputEmail1" 
     placeholder="Enter Email" required />
  </div>
  <div className="form-group mt-3 mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input
     name='password'
     value={input.password}
      onChange={(e)=>setInput({...input, [e.target.name]:e.target.value})   
     }
    type="password"
     className="form-control"
      id="exampleInputPassword1" 
      placeholder="Password" required />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>


  )
};

export default Register;