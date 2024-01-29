import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Add_Member from '../Member/Add-Member';
import EditMember from '../Member/EditMember';

import Navbar from '../NavbarPages/Navbar';
import '../Pages/Admin_Home.css'
function Member() {
   // Add member
   const [showModal, setShowModal] = useState(false);
   const closeModal = () => setShowModal(false);

 //Edit member 
 const[editMember, seteditMember]=useState(false);
 const editClose = () => seteditMember(false);

 //  code for show all member by using spring boot API of database

 const[member, setMembers] = useState([]);

const loadMember = async ()=>{
  const alldata = await axios.get("http://localhost:9090/getallmember");
  setMembers(alldata.data);

 };



 useEffect(()=>{
   loadMember();

  }, []);


 //  delete member 
const deleteUser = async (id) =>{
   await axios.delete(`http://localhost:9090/deletemember/${id}`);
   loadMember();

}


 return ( 
   <div >
<div className='row'>
       <Navbar />
       </div>
       <div className='container'>      
     
       <div className='row'>     
      <div  >
       <button className='btn btn-primary mb-3 mt-5' onClick={()=> {setShowModal(true)} }>Add Member</button>
       {showModal && <Add_Member closeModal = {closeModal} />}
       <table className='table table-bordered'>
         <thead className='bg-light text-dark'>
           <tr>
             <th>ID</th>
             <th>Name</th>
             <th>Email</th>
             <th>Address</th>
             <th>Mob.No.</th>
             {/* <th>Trainer</th>
             <th>plan</th>
             <th>Package</th> */}
             <th>Action</th> 
           </tr>
         </thead>
         <tbody>
           {member.map((members) => {
             const { id, name, email, address, number,trainer}=members;
              return(
                
               <tr>
               <td key={id}>{id}</td>

               <td>{name}</td>
               <td>{email}</td>
               <td>{address}</td>
               <td>{number}</td>
               {/* <td>{trainer}</td>
               <td>{trainer}</td>
               <td>{trainer}</td> */}
               <td><Link className='btn btn-outline-primary'
               to={`/editmember/${members.id}`}


              //  onClick={()=>{seteditTrainer(true)}}
               
               >Update</Link>
                  {/* {editTrainer && <EditTrainer editclose={editClose}/> } */}
                   <button className='btn btn-outline-danger  mx-2 ' onClick={()=> deleteUser(members.id)}>Delete</button>
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
   </div>
 );
}

export default Member;