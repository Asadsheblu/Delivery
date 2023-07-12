import React from 'react';
import { FaBeer, FaEnvelopeSquare, FaPhoneSquare } from "react-icons/fa";
const Header = () => {
    return (
        <div className='header p-2'>
        
            <div className='row container'>
            <div className='col-md-4'>
                <div className='d-flex'>
                <FaPhoneSquare className='text-success fs-3'/>
                    <h6 className='ps-3 fw-bold pt-1'>413-992-8931</h6>
                </div>

            </div>
            <div className='col-md-4'>
                <h6 className='text-uppercase'><span  className='text-success fw-bold'>All Points</span> Movers LLC</h6>
            </div>
            <div className='col-md-4'>
            <div className='d-flex'>
            <h6>allpointsmoversllc@gmail.com</h6>
            <FaEnvelopeSquare className='text-success fs-3 ps-2'/>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Header;