import React from 'react';
import { FaArrowCircleLeft, FaArrowRight } from 'react-icons/fa';
import dboy from "../public/delivery-concept-portrait-handsome-african-american-delivery-man-courier-pushing-hand-truck-with-stack-boxes-isolated-grey-studio-background-copy-space-683x1024.jpg"
import Image from 'next/image';
import Link from 'next/link';
const About = () => {
    return (
        <>
        <div className='about p-5'>
            <h5 className='text-center p-5 fw-bold text-white'><Link href="/">Home</Link> <FaArrowRight/>  About</h5>
        </div>
    
        <div className='container pt-5'>
                {/* 1st section */}
            <div className='bg-light p-5 rounded shadow'>
            <h4 className='text-center'>Moving Company Western MA and Nearby Area</h4>
                <p>All Points Movers, LLC is built on a foundation of experience. 
                    Our management team includes 3 generations of movers and a tradition of professionalism and quality.
                     We’re family owned and operated because our team is a family. As the senior team leaders,
                      the skills we bring to the organization are not of the operational variety. 
                    We must leave that to the younger men. Our responsibilities focus on four key elements:</p>
               <p className='pt-4'><FaArrowCircleLeft className='text-success'/>  Organizational–build a team with the best talent we can find. Have strong controls and a conservative structure.</p>
            
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  Organizational–build a team with the best talent we can find. Have strong controls and a conservative structure.</p>
             
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  Organizational–build a team with the best talent we can find. Have strong controls and a conservative structure.</p>
               
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  Organizational–build a team with the best talent we can find. Have strong controls and a conservative structure.</p>
            
            </div>
              {/* 2nd section */}
              <div className='row pt-5'>
                <div className='col-md-4'>
                <Image src={dboy} className='img-fluid' alt='delivery-boy'/>
                </div>
                <div className='col-md-4'>
                    <div className='bg-light pt-5 pb-5 ps-3 pe-2'>
                    <h6 className='fw-bold pt-5 '>The Team</h6>
                    <small>Our bench of moving specialists is deep. The specialists enjoy their work,
                         they are conscientious, and they show up every day. They work very hard,
                          sometimes in extreme conditions. Their friendly and courteous personalities
                        will put you at ease. Their attention to detail and the careful manner
                         they move your belongings will gain your trust. Their knowledge enthusiasm
                         and work ethic will exceed your expectations. They have character,
                         are proud of their accomplishments, and want to be your mover.
                        As proof of our commitment to you, I offer 2014 team member initiatives</small>
                    </div>
                </div>
                <div className='col-md-4 p-2'>
                    <h4 className='fw-bold'>How Can We Best Serve Our Customers?</h4>
                    <p className='pt-4'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Research and adopt the best industry practices.</small></p>
            
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Use floor runners, door jams, and railing protection. No scuffs, rubs, or dirt on the floor. No nicks on the walls, railings, banisters, or door jams. That’s attention to detail.</small></p>
                    <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Keep furniture pads fresh and clean. The homeowner will appreciate it.</small></p>
            
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Adhere to industry statistics which indicate if you soft-pad the furniture and shrink-wrap the upholstery while it is still in the house (before it is put on the truck), related damages can be avoided.</small></p>
                    <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Utilize the “cell-pack” technique when packing fragile dishes, glassware, or collectibles. It is the only method authorized by the largest shipper in the world, the US Department of Defense. The facts speak for themselves. Use it or be sorry.</small></p>
            
               <p className='pt-1'><FaArrowCircleLeft className='text-success'/>  <small className='p-2'>Keep trucks clean inside and out. Square away the pads. Tie down the equipment. Keep it ship-shape just like you do your uniforms. Look sharp, feel sharp, and be sharp. Demonstrate your professionalism at all times. Your customers are watching and they will appreciate it.</small></p>
             
               
               
                </div>
              </div>

        </div>
        </>
    );
};

export default About;