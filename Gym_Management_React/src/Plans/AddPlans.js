import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AddPlans({closePackage}) {
 
    useEffect(() =>{
        document.body.style.overflowY="hidden"; 
        return ()=>{
            document.body.style.overflowY="scroll"; 
          
        }

    } , []);


    // Add member 

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
        await axios.post("http://localhost:9090/addplan", user);
        alert("Add Package Successfully..");
    };


  return (
    <div  >
    <div className='model-wrapper'onClick={closePackage} ></div>
    <div className='model-container border w-50 rounded p-4 shadow'>
    <h2 className='text-center m-4'>Add Member</h2>
    <form onSubmit={(e) => onSubmit(e)}> 
               {/* <div className='mb-3 '>
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
               </div> */}
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
            <button className='btn btn-outline-danger mx-3'  onClick={closePackage}> Cancel</button>

    </form>

    </div>
    </div>
  )

 
//     return (
//     <div className='package mt-3'>
//          <form className='form mx-3'>
//         <div className='card '>
//             <div className='card-header'>
//                 <h4>
//                     Package Form
//                 </h4>
//             </div> 
//             <div className='card-body'>
               
//                     <div className='row p-2'>
//                     <label>
//                         Package Name
//                     </label>
//                     <input type='text' ></input>
//                     </div>
//                     <div className='row p-2'>
//                     <label>
//                         Description
//                     </label>
//                     <textarea rows='4' cols='25' ></textarea>
//                     </div>
//                     <div className='row p-2'>
//                     <label>
//                         Amount
//                     </label>
//                     <input type="number" ></input>
//                     </div>

                    
                

//             </div>
//             <div className='card-footer d-flex'>
//                     <button className='btn btn-primary' >Save</button>
//                     <button className='btn btn-danger mx-3' >Cancel</button>
//                     </div>

//         </div>
//         </form>


//     </div>
//   )
}

export default AddPlans