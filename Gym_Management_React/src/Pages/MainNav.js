import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
function MainNav() {
  return (
    <div>
        <div className=''>
          {/* navbar  */}
           <nav className='navbar fixed-top  ' >

       
          <h3 className='justify-content-center text-success '> Fitness <span className='text-danger'> Club </span>  </h3>
          <div className=' nav  justify-content-end  '>
            
             <Link className='btn  text-primary  ' to={"/login"} > Admin Login </Link>
             
             {/* <Dropdown>
      <Dropdown.Toggle className='btn-outline-primary bg-transparent' id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Action</Dropdown.Item>
        <Dropdown.Item >Another action</Dropdown.Item>
        <Dropdown.Item >Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> */}

          </div>
         </nav>
        </div>
    </div>
  )
}

export default MainNav