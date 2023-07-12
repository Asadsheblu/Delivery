import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const PromiseSin = () => {
    return (
        <div className='bg-light'>
            <div className='row container p-5'>
            <div className='col-md-6 p-4'>
            <h2>Expect an Outstanding <span className='text-success'>Moving Experience</span></h2>
            <p className='pt-2'>Not all moving companies in Massachusetts are the same. When it comes to moving, there
                 are so many things to worry about. Let us handle some of the heavy lifting for you. 
                 At All Points Movers, LLC, we
                 utilize the best industry practices for safety and care. Plus, you will only pay for
                  the services you need.</p>
                  <button className='btn btn-primary text-white rounded'><Link  className='text-white' href="/Detail/promise">OUR PROMISE TO YOU <FaArrowRight/></Link> </button>
            </div>
            <div className='col-md-6 p-4'>
            <iframe className='rounded'  src="https://www.youtube.com/embed/DF_aCF5W_2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </div>
            <div className='row container p-5'>
            <div className='col-md-6'>
            <iframe src=
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                   
                    
                    aria-hidden="false"
                    tabindex="0">
            </iframe>
            </div>
            <div className='col-md-6 p-4'>
       <div className='ps-5'>
       <p>25 Burford Ave Suite #1
        <br/>
        West Springfield, MA 01089</p>
        <p>Call Us For a Free Estimate!
        <br/>
            413-992-8931</p>
<small className='text-muted'>Our Office without Walls concept allows us to better serve
                 you wherever you are located and to do so in a quick and efficient manner. 
                 There is always a truck near you</small>
                 <br/>
<small className='text-muted pt-3'>We are fully licensed registered and insured: MA DPU #31740; DOT #2536110; MC #894484.</small>
       </div>            
            </div>
            </div>
            <h6 className='text-muted text-center pb-3'>A portion of every job is donated to local charities to be used in our communities</h6>
            
        </div>
    );
};

export default PromiseSin;