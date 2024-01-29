import React from 'react'
import FeatureBox from './FeatureBox'
import fimage1 from '../1.svg'
import fimage2 from '../2.svg'
import fimage3 from '../3.svg'
import fimage4 from '../4.svg'
function Feature() {
  return (
    <div id='features'>
        <h1>Feature</h1>
        <div className='a-container'>
        <FeatureBox image={fimage1} title='WeightLifting' />
        <FeatureBox image={fimage2} title=' Specific Muscle' />
        <FeatureBox image={fimage3} title=' Flex Your Muscle' />
        <FeatureBox image={fimage4} title='Cardio Exercise' />
        </div>
        
     </div>
  )
}

export default Feature