import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleLeft, FaEnvelopeSquare, FaFacebook, FaFacebookSquare, FaLinkedin, FaLocationArrow, FaPhoneSquare, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer p-5 text-white'>
            <div className='container row'>
            <div className='col-md-4'>
            <h4 className='fw-bold'><span className='text-success'>ALL POINTS</span> MOVERS LLC</h4>
            <small>We Take Care Of The Deliver Peace of Mind</small>
            <hr className='text-success'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec </p>
            <small><FaPhoneSquare/> <span className='text-success ps-2 fw-bold'>413-992-8931</span></small>
            <br/>
            <small><FaEnvelopeSquare/> <span className='text-success ps-2 fw-bold'>sdeliver@gmail.com</span></small>
            <br/>
            <small><FaLocationArrow/> <span className='text-success ps-2 fw-bold'>25 Burford Ave Suite #1 West Springfield, MA 01089</span></small>
            </div>
            <div className='col-md-4 p-2'>
                <h5 className='fw-bold'>Quick Links</h5>
               <p> <Link href="/"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>Home</span></Link></p>
           
               
                <p> <Link className='' href="/About"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>About</span></Link></p>
              <p>  <Link href="/Service"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>Services</span></Link></p>
               
                <p><Link href="/Blog"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>Blog</span></Link></p>
            
               <p> <Link href="/Photo"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>Photo</span></Link></p>
             
               <p> <Link href="/Video"><FaArrowAltCircleLeft className='text-success'/> <span className='text-white fw-bold'>Video</span></Link></p>
            </div>
            <div className='col-md-4 p-2'>
                <h5 className='fw-bold text-center'>Subscribe your Email</h5>
                <hr/>
               <div className='pt-3 pb-3'>
               <input type='email' className='form-control'/>
                <button className='btn btn-success w-100 mt-2'>Send</button>
               </div>
              
                    <h6 className='text-center'>Follow US</h6>
                    <div className='text-center ps-5'>
                    <div className='d-flex'>
                    <FaFacebook className='rounded-circle ms-5 fs-4'/>
                    <FaTwitter className='rounded-circle ms-2 fs-4'/>
                    <FaYoutube className='rounded-circle ms-2 fs-4'/>
                    <FaLinkedin className='rounded-circle  ms-2 fs-4'/>
                    <FaPinterest className='rounded-circle  ms-2 fs-4'/>
              
               </div>
                    </div>
                    
            </div>
            </div>
            <hr/>
          <div className='text-center'>
          <small className='text-center fw-bold text-success'>Developed BY &copy; AsadSheblu</small>
          </div>
            
            
        </div>
    );
};

export default Footer;