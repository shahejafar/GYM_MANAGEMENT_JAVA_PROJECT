import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
function EditTrainer({editclose}) {

    useEffect(() =>{
        document.body.style.overflowY="hidden"; 
        return ()=>{
            document.body.style.overflowY="scroll"; 
          
        }

    } , []);

    const navigate = useNavigate();
    const {id} = useParams();
    

    const[user, setUser]=useState({ 
        email:"",
        name:"",
        address:"",
        number:""
    });
    const{ name, age, experiance, number}=user;

    const onInputChange=(e) =>{
        setUser({...user, [e.target.name] : e.target.value});
    };

    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/updatetrainer/${id}`, user);
        alert("Trainer Updated Successfully");
        navigate("/trainer");
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:9090/gettrainer/${id}`)
        setUser(result.data);
    }

    return (
        <div  >
        <div className='model-wrapper'onClick={editclose} ></div>
        <div className='model-container border w-50 rounded p-4 shadow'>
        <h2 className='text-center m-4'>Edit Trainer</h2>
        
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
                        onChange={(e)=>onInputChange(e)} required>
                        </input>
                   </div>
                   <div className='mb-3 '>
                    <label htmlFor='Email' className='form-label'>
                        Age
                    </label>
                    <input type="text"
                     className="form-control" 
                     placeholder="Enter Trainer age"
                      name="age" value={age} onChange={(e)=>onInputChange(e)} required></input>
                   </div>
        
                   <div className='mb-3 '>
                    <label htmlFor='Password' className='form-label'>
                        Experience
                    </label>
                    <input type="text"
                     className="form-control" 
                     placeholder="Enter Trainer Experience"
                      name="experiance" value={experiance} onChange={(e)=>onInputChange(e)} required></input>
                   </div>
                   <div className='mb-3 '>
                    <label htmlFor='number' className='form-label'>
                        Number
                    </label>
                    <input type="text" 
                    className="form-control"
                     placeholder="Enter your Mob. Number"
                      name="number" value={number}
                       onChange={(e)=>onInputChange(e)} required></input>
                   </div>
                <button type="submit" className='btn btn-outline-primary mx-3' > Update</button>
                <Link className='btn btn-outline-danger mx-3'
                to={"/trainer"}
                // onClick={editclose}
                
                > Cancel</Link>
        
        </form>
        
        </div>
        </div>
        )
}
export default EditTrainer