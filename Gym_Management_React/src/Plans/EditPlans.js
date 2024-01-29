
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
function EditPlans(closePackage) {
    useEffect(() =>{
        document.body.style.overflowY="hidden"; 
        return ()=>{
            document.body.style.overflowY="scroll"; 
          
        }

    } , []);
    const navigate = useNavigate();
    const {id} = useParams();

    const[user, setUser]=useState({ 
        
       
        month:"",
        amount:""
        
    });
    const{month,amount}=user;

    const onInputChange=(e) =>{
        setUser({...user, [e.target.name] : e.target.value});
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:9090/updatepln/${id}`, user);
        alert("plane Updated Successfully");
        navigate("/plans");
    };
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:9090/getplan/${id}`)
        setUser(result.data);
    }
    useEffect(()=>{
        loadUser();
    }, []);

  return (
    <div  >
    <div className='model-wrapper'onClick={closePackage} ></div>
    <div className='model-container border w-50 rounded p-4 shadow'>
    <h2 className='text-center m-4'>Add Member</h2>
    <form onSubmit={(e) => onSubmit(e)}> 
              
               <div className='mb-3 '>
                <label htmlFor='month' className='form-label'>
                Month
                </label>
                <input type="number"

                 className="form-control" 
                 placeholder="Enter month"
                  name="month" value={month} onChange={(e)=>onInputChange(e)} required></input>
               </div>

               <div className='mb-3 '>
                <label htmlFor='amount' className='form-label'>
                    Amount
                </label>
                <input type="number"
                 className="form-control" 
                 placeholder="Enter Amount"
                  name="amount" value={amount} onChange={(e)=>onInputChange(e)} required></input>
               </div>
               
            <button type="submit" className='btn btn-outline-primary mx-3' > Submit</button>
            <Link className='btn btn-outline-danger mx-3'
                to={"/plans"}
                // onClick={editclose}
                
                > Cancel</Link>

    </form>

    </div>
    </div>
  )
}

export default EditPlans