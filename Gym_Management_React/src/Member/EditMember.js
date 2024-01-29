import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditMember(props) {

    // useEffect(() =>{
    //     document.body.style.overflowY="hidden"; 
    //     return ()=>{
    //         document.body.style.overflowY="scroll"; 
          
    //     }

    // } , []);
    const navigate = useNavigate();
    const {id} = useParams();

    const[user, setUser]=useState({ 
        email:"",
        name:"",
        address:"",
        number:""
    });
    const{email, name, address, number}=user;

    const onInputChange=(e) =>{
        setUser({...user, [e.target.name] : e.target.value});
    };

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/updatemember/${id}`, user);
        alert("Update Member Successfull...");
        navigate("/member");
       
        
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:9090/getmember/${id}`)
    
        setUser(result.data);
    }
  return (
    <div>
    <div className='model-wrapper-edit' onClick={props.editclose}></div>
    <div className='model-container-edit border w-50 rounded p-4 shadow'>
        <h2 className='text-center m-4'>Edit Member</h2>

            <form onSubmit={(e) => onSubmit(e)}> 
               <div className='mb-3 '>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input type="text"
                className="form-control"
                  placeholder="Enter your Name"
                   name="name" 
                   value={name}
                    onChange={(e)=>onInputChange(e)}>
                    </input>
               </div>
               <div className='mb-3 '>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input type="email"
                 className="form-control" 
                 placeholder="Enter your Email"
                  name="email" value={email} onChange={(e)=>onInputChange(e)}></input>
               </div>

               <div className='mb-3 '>
                <label htmlFor='Password' className='form-label'>
                    Addrress
                </label>
                <input type="text"
                 className="form-control" 
                 placeholder="Enter your Address"
                  name="address" value={address} onChange={(e)=>onInputChange(e)}></input>
               </div>
               <div className='mb-3 '>
                <label htmlFor='Password' className='form-label'>
                    Number
                </label>
                <input type="text" className="form-control" placeholder="Enter your Mob. Number" name="number" value={number} onChange={(e)=>onInputChange(e)}></input>
               </div>

               <button type='submit' className='btn btn-outline-primary'>Submit</button>
               <Link  className='btn btn-outline-danger mx-2'
                //  onClick={props.editclose}
                to={"/member"}
                 >Cancel</Link>
             </form>
            </div> 
    </div>
  )

}

export default EditMember