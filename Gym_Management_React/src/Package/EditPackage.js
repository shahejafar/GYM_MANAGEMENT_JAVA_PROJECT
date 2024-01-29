import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditPackage(props) {
    const navigate = useNavigate();
    const {id} = useParams();

    const[user, setUser]=useState({ 
        
        package_name:"",
        description:"",
        amount:"",
        
    });
    const{package_name , 
    description,
    amount
    }=user;

    const onInputChange=(e) =>{
        setUser({...user, [e.target.name] : e.target.value});
    };


    useEffect(()=>{
        loadUser();
    }, []);

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/updatepackage/${id}`, user);
        alert("Edit Package Successfully...");
        navigate("/package");
       
        
    };

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:9090/getpackage/${id}`)
    
        setUser(result.data);
    }
  return (
    <div>
    <div className='model-wrapper'
    // onClick={closePackage}
     ></div>
    <div className='model-container border w-50 rounded p-4 shadow'>
    <h2 className='text-center m-4'>Add Member</h2>
    <form onSubmit={(e) => onSubmit(e)}> 
               <div className='mb-3 '>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input type="text"
                className="form-control"
                  placeholder="Enter your Name"
                   name="package_name" 
                   value={package_name}
                    onChange={(e)=>onInputChange(e)} required>
                    </input>
               </div>
               <div className='mb-3 '>
                <label htmlFor='Email' className='form-label'>
                Description
                </label>
                <textarea rows='4' cols='15'

                 className="form-control" 
                 placeholder="Enter your Description"
                  name="description" value={description} onChange={(e)=>onInputChange(e)} required></textarea>
               </div>

               <div className='mb-3 '>
                <label htmlFor='address' className='form-label'>
                    Amount
                </label>
                <input type="number"
                 className="form-control" 
                 placeholder="Enter Amount"
                  name="amount" value={amount} onChange={(e)=>onInputChange(e)} required></input>
               </div>
               <button type='submit' className='btn btn-outline-primary'>Submit</button>
               <Link  className='btn btn-outline-danger mx-2'
                //  onClick={props.editclose}
                to={"/package"}
                 >Cancel</Link>
             </form>
            </div> 
    </div>
  )
}

export default EditPackage