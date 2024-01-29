import React, {useEffect, useState} from 'react'
import axios from 'axios';
function AddTrainer({closeModal}) {
  useEffect(() =>{
    document.body.style.overflowY="hidden"; 
    return ()=>{
        document.body.style.overflowY="scroll"; 
      
    }

} , []);


// Add member 

const[trainer, setTrainer]=useState({ 
    
    name:"",
    age:"",
    experiance:"",
    number:"",
});
const{ name, age, experiance, number}=trainer;

const onInputChange=(e) =>{
    setTrainer({...trainer, [e.target.name] : e.target.value});
};

const onSubmit = async (e) =>{
    e.preventDefault();
    await axios.post("http://localhost:9090/addtrainer", trainer);
    alert("Add Trainer Successfully..");
};


return (
<div  >
<div className='model-wrapper'onClick={closeModal} ></div>
<div className='model-container border w-50 rounded p-4 shadow'>
<h2 className='text-center m-4'>Add Trainer</h2>

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
        <button type="submit" className='btn btn-outline-primary mx-3' > Submit</button>
        <button className='btn btn-outline-danger mx-3'  onClick={closeModal}> Cancel</button>

</form>

</div>
</div>
)
}

export default AddTrainer