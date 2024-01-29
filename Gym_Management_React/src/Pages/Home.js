import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Add_Member from '../Member/Add-Member';
import EditMember from '../Member/EditMember';

import Navbar from '../NavbarPages/Navbar';
import './Admin_Home.css'
function Home() {

    return(
      <div >
      <div className='row' >
      
        <Navbar />
        </div>
        <div className=''>
        

        <h2 className='text-center'>Hello Admin</h2>
        </div>
      </div>
    )
}

export default Home;