import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserFriends, FaUserAlt, FaThList, FaList } from 'react-icons/fa'
function Navbar() {
  const navigate = useNavigate();

  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/mainpage");
  };
  return (
    <div className=' row'>
      {/* <div className='card  shadow'>
         
        <div className='card-header  bg-dark'>
        <h3 className=' w-100 text-center  text-light  ' > Dashboard </h3> 
        </div>

        <div className='card-body border   bg-light '>
       

         <div className=' link-style'>
         <FaHome  className='icon ' size='28px' />
        <Link className=' link    ' to={"/"} > Home </Link> 
        </div>

        <div className='link-style'>
          <FaUserFriends className='icon ' size='25px' />
        <Link className=' link ' to={"/member"} > Members </Link>
        </div>

        <div className='link-style'>
       <FaUserAlt className='icon ' size='22px'  />
         <Link className=' link  ' to={"/trainer"}> Trainers </Link>
         </div>

         <div className='link-style' > 
         <FaThList className='icon ' size='22px'/>
          <Link className='  link ' to={"/plans"}> Planes </Link>
          </div>
         <div className='link-style' > 
         <FaList className='icon ' size='22px'/>
          <Link className='  link ' to={"/package"}> Packages </Link>
          </div>
           </div>
       

      </div>
   */}
      {/* <div className='card'> */}
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center " id="navbarTogglerDemo">

          <ul className="navbar-nav ">

            <li className="nav-item mr-3">
              <Link className='nav-link  active bg-primary   ' to={"/"} ><FaHome size='28px' /> Home </Link>
            </li>
            <li class="nav-item mr-3">
              <Link className='nav-link    ' to={"/member"} > <FaUserFriends size='25px' /> Members </Link>
            </li>
            <li class="nav-item mr-3">
              <Link className='nav-link   ' to={"/trainer"}> <FaUserAlt size='22px' /> Trainers </Link>
            </li>
            <li class="nav-item mr-3">
              <Link className='nav-link    ' to={"/plans"}> <FaThList size='22px' /> Plans </Link>
            </li>
            <li class="nav-item ">
              <Link className='nav-link    ' to={"/package"}><FaList size='22px' /> Packages </Link>
            </li>

          </ul>
        </div>


        <div class="pmd-navbar-right-icon ml-auto">
          <button
            onClick={handleLogout}
            type='button' className='btn btn-outline-danger  '>
            LOG OUT
          </button>

        </div>
      </nav>
    </div>
  )

}

export default Navbar;