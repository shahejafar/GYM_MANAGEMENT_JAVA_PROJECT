import React, { useEffect, useState } from 'react'
import Navbar from '../NavbarPages/Navbar';
import Dashboard from '../NavbarPages/Dashboard'
import AddPackage from './AddPackage'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Package() {
  const [showPackage, setShowPackage] = useState(false);
  const closePackage = () => setShowPackage(false);

//Edit Package 
const[editPackage, seteditPackage]=useState(false);
const editClose = () => seteditPackage(false);

//  code for show all Package by using spring boot API of database

const[Packages, setPackages] = useState([]);

const loadPackage = async ()=>{
 const alldata = await axios.get("http://localhost:9090/getallpackage");
 setPackages(alldata.data);
};

useEffect(()=>{
  loadPackage();

 }, []);


//  delete Package 
const deleteUser = async (id) =>{
  await axios.delete(`http://localhost:9090/deletepackage/${id}`);

  loadPackage();

}


return ( 
  <div >
<div className='row'>
      <Navbar />
</div>
      
      
     
    
      <div className='container'>     
     <div className='row' >
      
      <button className='btn btn-primary mb-3 mt-5 w-25' onClick={()=> {setShowPackage(true)} }>Add Package</button>
      {showPackage && <AddPackage closePackage = {closePackage} />}
      <table className='justify-centent-center package-table table table-bordered'>
        <thead className='bg-light text-dark'>
          <tr>
            <th>ID</th>
            <th>Package Name</th>
            <th >Description</th>
            <th>Amount</th>
          
            <th>Action</th>
          
            
          </tr>
        </thead>
        <tbody>

        {
         Packages.map((Package) => {
            const { id, package_name, description, amount}=Package;
             return(
              <tr>
              <td  key={id}>{id}</td>

              <td>{package_name}</td>
              <td>{description}</td>
              <td>{amount}</td>
             
              <td>
               <Link className='btn btn-outline-primary' 
               to={`/editPackage/${Package.id}`}
               
               // onClick={()=>{seteditPackage(true)}}
                 
                     >Edit</Link>

                 {/* {editPackage && <EditPackage editclose={editClose}/> } */}
                  <button className='btn btn-outline-danger mx-3  ' onClick={()=> deleteUser(Package.id)}>Delete</button>
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

export default Package