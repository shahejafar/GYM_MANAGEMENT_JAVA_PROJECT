import React,{useState, useEffect} from 'react'
import Navbar from '../NavbarPages/Navbar';
import axios from 'axios';
import AddTrainer from './AddTrainer';
import EditTrainer from './EditTrainer';
import { Link } from 'react-router-dom';
import Dashboard from '../NavbarPages/Dashboard';
function Trainer() {
   // Add member
   const [showTrModal, setshowTrModal] = useState(false);
   const closeModal = () => setshowTrModal(false);

 //Edit member 
 const[editTrainer, seteditTrainer]=useState(false);
 const editClose = () => seteditTrainer(false);

 //  code for show all member by using spring boot API of database

 const[trainers, setTrainers] = useState([]);

const loadMember = async ()=>{
  const alldata = await axios.get("http://localhost:9090/getalltrainer");
  setTrainers(alldata.data);
 };

 useEffect(()=>{
   loadMember();
 

  }, []);


 // delete member 
const deleteTrainer = async (id) =>{
   await axios.delete(`http://localhost:9090/deletetrainer/${id}`);
   
   loadMember();
}


 return ( 
   <div>
       <div className='row'>
       <Navbar />
       </div>
       <div className='container '>
       
       <div className=' row'>
       <button className='btn btn-primary mb-3 mt-5 w-25' onClick={()=> {setshowTrModal(true)} }>Add Trainer</button>
       {showTrModal && <AddTrainer closeModal = {closeModal} />}
       <table className='table'>
         <thead>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Age</th>
             <th>Experience</th>
             <th>Mob.No.</th>
             <th>Action</th>
           
             
           </tr>
         </thead>
         <tbody>

         {
          trainers.map((trainer) => {
             const { id, name, age, experiance, number}=trainer;
              return(
               <tr>
               <td  key={id}>{id}</td>

               <td>{name}</td>
               <td>{age}</td>
               <td>{experiance}</td>
               <td>{number}</td>
               <td><Link className='btn btn-outline-primary'
               to={`/edittrainer/${trainer.id}`}


              //  onClick={()=>{seteditTrainer(true)}}
               
               >Update</Link>
                  {/* {editTrainer && <EditTrainer editclose={editClose}/> } */}
                   <button className='btn btn-outline-danger  mx-2 ' onClick={()=> deleteTrainer(trainer.id)}>Delete</button>
                   </td>
             </tr>
                    );                                
               })
           }
         </tbody>
       </table>
           
      </div>
      </div>
    </div>
 );
}

export default Trainer




