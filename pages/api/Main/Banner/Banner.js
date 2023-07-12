import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import hero from "../../../../public/Hero-Image.png"
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='banner'>

      
        <div className='row container p-5'>
            <div className='col-md-6 pt-5 ps-3'> 
                <h1 className='fw-bold'>Your Preferred <span className='text-success'> Movers in</span> Western MA</h1>
                <p>Moving into, out of or around Massachusetts and Connecticut? We can help! Residential or Commercial, Local or Long Distance. Better rates, Better service, Happier outcomes. Call and we can talk about it or email us the details and we will respond ASAP.</p>
          <button className='text-uppercase btn btn-success rounded-pill'>Get Free EStimate <FaArrowRight/></button>
            </div>
            <div className='col-md-6 p-3'> 
                <Image className='img-fluid' src={hero} alt='Hero-img'/>
            </div>

            </div>
        </div>
    );
};

export default Banner;