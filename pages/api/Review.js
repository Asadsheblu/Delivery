import React from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';

const Review = () => {
    const settings = {
        infinite : true,
        slidesToShow : 3,
        slidesToScroll : 1,
        InitalSlide : 0,
        autoPlay: true,
        dots: true,
       
        responsive : [{
            breakpoint : 600,
            settings :{
                slidesToShow: 1,
                slidesToScroll:1,
                autoplay : true,
                infinite :true,
            }
        }],
        responsive : [{
            breakpoint : 1000,
            settings :{
                slidesToShow: 1,
                slidesToScroll:1,
                autoplay : true,
                infinite :true,
            }
        }]
    }
    return (
        <div className='container p-5'>
            <div className='fw-bold fs-4'>See Our
            <span className='text-success underline'> Reviews</span>


             </div>
             
             <div class="row row-cols-1 row-cols-md-1  g-4 p-3">
           
  <div class="col">
  <Slider {...settings}>
    <div class="card h-100">
     
      <div class="card-body">
       
        <small class="card-text"> I needed to have one piece of furniture moved to my house.
         Allpoints Movers did the job with very little notice and Jordan and Jaquen were very thoughtful, 
         professional and polite. They even brought shrink wrap to ensure my furniture was protected.
          I highly recommend them for any moving needs.
        

        </small>
        <p className='text-center'>
            <FaStar className='text-warning fs-6'/>
            <FaStar className='text-warning fs-6'/>
            <FaStar className='text-warning fs-6'/>
            <FaStar className='text-warning fs-6'/>
            <FaStar className='text-warning fs-6'/>

        </p>
        <h6 className='text-muted text-center'>Jessica Northup</h6>
      </div>
    </div>
    <div class="card h-100">
    <div class="card-body">
       
       <small class="card-text"> 
               I called at the last moment and got Lindsey the owner.
               He had his coordinator Jordan call me who showed up same day with Edward.
               They safely moved eight large pieces of furniture to other areas of my house 
               as I requested. Jordan and Edward were both courteous and cooperative.
              I will be having them return the furniture back in place once the floors are finished.					
       

       </small>
       <p className='text-center'>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>

       </p>
       <h6 className='text-muted text-center'>Cheryl</h6>
     </div>
   </div>
   <div class="card h-100">
     
     <div class="card-body">
      
       <small class="card-text"> I needed to have one piece of furniture moved to my house.
        Allpoints Movers did the job with very little notice and Jordan and Jaquen were very thoughtful, 
        professional and polite. They even brought shrink wrap to ensure my furniture was protected.
         I highly recommend them for any moving needs.
       

       </small>
       <p className='text-center'>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>

       </p>
       <h6 className='text-muted text-center'>Jessica Northup</h6>
     </div>
   </div>
   <div class="card h-100">
     
     <div class="card-body">
      
       <small class="card-text"> I needed to have one piece of furniture moved to my house.
        Allpoints Movers did the job with very little notice and Jordan and Jaquen were very thoughtful, 
        professional and polite. They even brought shrink wrap to ensure my furniture was protected.
         I highly recommend them for any moving needs.
       

       </small>
       <p className='text-center'>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>
           <FaStar className='text-warning fs-6'/>

       </p>
       <h6 className='text-muted text-center'>Jessica Northup</h6>
     </div>
   </div>
    </Slider>
  </div>

  {/* <div class="col">
    <div class="card h-100">
     
     
  </div>
  <div class="col">
   
  </div> */}
 
</div>

            
        </div>
    );
};

export default Review;