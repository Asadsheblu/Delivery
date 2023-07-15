import Link from 'next/link';
import React from 'react';
import { FaArrowCircleLeft, FaArrowRight } from 'react-icons/fa';
const Service = () => {
    return (
        <div>
            <div className='service p-5'>
            <h5 className='text-center p-5 fw-bold text-white'><Link href="/">Home</Link> <FaArrowRight/>  Service</h5>
            </div>
            <div className='container pt-5'>
                <h5 className='text-center pt-5 fw-bold'>Moving Services Longmeadow MA, Area</h5>
                <p className='text-center pt-3 pb-5 '>Whether you need comprehensive moving services or want to hire out only a part of the work,
                     All Points Movers, LLC is ready to help. 
                     <b>Call us for a FREE customized estimate
                      for your move!</b>
                     </p>
                   <div className='text-center pb-4'>
                   <span className='bg-success text-white p-3 fw-bold rounded fs-4 '>Industry Best Practise</span>
                   </div>
                        {/* 1st section */}
            <div className='p-5'>
                <div className='bg-light shadow p-5 '>
                <p className='pt-4'><FaArrowCircleLeft className='text-success'/> <small>We soft-pad wrap all wood and finished surfaces—in the house—before they go on the truck.</small></p>
            
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>We shrink wrap all the upholstery</small></p>
          
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>We roll and shrink wrap all rugs—never fold them.</small></p>
            
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>We use floor runner and door jam protection.</small></p>
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>Mirror packs, mattress cartons or bags, and wardrobe cartons available</small></p>
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>Cell-Pack System for dishes, glassware, pictures, and collectibles</small></p>
            <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small>Insurance and Value protection. Learn more about protecting your goods at the Department of Transportation website.</small></p>
                </div>
           
               
            
            </div>
            {/* 2nd part */}
            
            <div className='row p-5'>
                <div className='col-md-6'>
                    <div className='bg-light shadow p-5 rounded'>
                        <h4 className='text-center fw-bold'>Pianos</h4>
                        <p className='text-muted text-center'>Spinets, uprights, baby grands and grands—let us know what you’ve got. We’ll bring the proper equipment and get the job done.</p>

                    </div>
                </div>
                <div className='col-md-6'>
                <div className='shadow p-5 rounded'>
                        <h4 className='text-center fw-bold'>Labor</h4>
                        <p className='text-muted text-center'>If you need to move items around the house or you need to load or unload a truck, trailer, or pod, we have the laborers. Give us a call!</p>

                    </div>
                </div>

            </div>

            </div>
        </div>
    );
};

export default Service;