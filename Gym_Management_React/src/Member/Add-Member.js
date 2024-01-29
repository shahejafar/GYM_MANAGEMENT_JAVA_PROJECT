import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios from 'axios'
function Add_Member({closeModal}) {

  
  const navigate = useNavigate();
    //const [trainer, SetTrainer]=useState([]);

    useEffect(() =>{
        document.body.style.overflowY="hidden"; 
        return ()=>{
            document.body.style.overflowY="scroll"; 
            
        }
        

    } , []);
    // Add member 

    const[user, setUser]=useState({ 
        
        name:"",
        email:"",
        address:"",
        number:"",
        trainername:""
       
    });
    const{email, name, address, number,trainername}=user;

    const onInputChange=(e) =>{
        setUser({...user, [e.target.name] : e.target.value});
    };



    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:9090/addmember", user);
        alert("Add Member Successfully..");
    };
 

    const [trainerName, trainersetName] = useState({trainerName:""})
  
    const [trainerList, setTrainerList] = useState()

    // const[traineres, setMembers] = useState([]);
    // const loadTrainer = async ()=>{
    //     const alldata = await axios.get("http://localhost:9090/getalltrainer");
    //     setTrainerList(alldata.data);
    //    };     
    //    useEffect(()=>{
    //     loadTrainer();     
    //     }, []);

        useEffect(() =>{
            const fetchData = async ()=>{
                const response = await fetch("http://localhost:9090/getalltrainer");
                const newData = await response.json();
                setTrainerList(newData);
                // console.log(newData);
            };
            fetchData();
        }, [])
    
        const handleChange = (event) =>{
            trainersetName(event.target.value);
        }
    
  return (
    <div>
    <div className='model-wrapper'onClick={closeModal} ></div>
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
                   name="name" 
                   value={name}
                    onChange={(e)=>onInputChange(e)} required>
                    </input>
               </div>
               <div className='mb-3 '>
                <label htmlFor='Email' className='form-label'>
                    Email
                </label>
                <input type="email"
                 className="form-control" 
                 placeholder="Enter your Email"
                  name="email"
                   value={email} 
                   onChange={(e)=>onInputChange(e)} required></input>
               </div>

               <div className='mb-3 '>
                <label htmlFor='address' className='form-label'>
                    Addrress
                </label>
                <input type="text"
                 className="form-control" 
                 placeholder="Enter your Address"
                  name="address" value={address} onChange={(e)=>onInputChange(e)} required></input>
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

               <div className='mb-3 '>
                <label htmlFor='trainer' className='form-label' >
                    Trainer
                </label>
                {/* <select name="trainers" value={trainers} onChange={(e)=>onInputChange(e)} >
               
                    {
                traineres.map((trainer) => {
           
              return(                 
                 <option value={trainer.name} > {trainer.name}  </option> 
                )
              })
             }
              </select> */}

           {/* <select className="form-control" value={trainerName} onChange={handleChange}>
                 <option value="">Choose Trainer Name</option>

                    {
                    trainerList.map((trn) => {
                        return(
                 <option value={trn.name}  >{trn.name}</option>
                        )
    
                    })
              }

          </select> */}
               
               </div>
            <button type="submit" className='btn btn-outline-primary mx-3' > Submit</button>
            <button className='btn btn-outline-danger mx-3'  onClick={closeModal}> Cancel</button>
    </form>
    </div>
    </div>
  )
}

export default Add_Member;