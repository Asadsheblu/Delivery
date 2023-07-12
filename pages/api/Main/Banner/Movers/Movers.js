import React from 'react';
import { FaBoxOpen, FaCarAlt, FaClock, FaLocationArrow, FaWolfPackBattalion } from 'react-icons/fa';

const Movers = () => {
    return (
        <div className='container p-5'>
            <h4 className='fw-bold text-center p-3'>Why <span className='text-success underline'>Movers</span></h4>
            <div className="row row-cols-1 row-cols-md-4 g-4 rounded">
  <div className="col">
    <div className="card h-100 shadow p-2">
    <div className='text-center pt-2'>
    <FaLocationArrow className='rounded-circle  icon bg-light p-3'/>
    </div>
      <div className="card-body text-center">
        <h6 className="text-center fw-bold">LOCAL MOVES</h6>
        <small className="text-center">We’ll move your apartment, home,or business</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow p-2" >
    <div className='text-center pt-2'>
    <FaCarAlt className='rounded-circle  icon bg-light p-3'/>
    </div>
      <div className="card-body text-center">
        <h6 className="text-center fw-bold">LONG-DISTANCE MOVES</h6>
        <small className="text-center">Moves over 150 miles from origin to destination</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow p-2">
    <div className='text-center pt-2'>
    <FaClock className='rounded-circle  icon bg-light p-3'/>
    </div>
      <div className="card-body text-center">
        <h6 className="text-center fw-bold">EXPEDITED SERVICE</h6>
        <small className="text-center">Help when your time and schedule matter most</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 shadow p-2">
    <div className='text-center pt-2'>
    <FaBoxOpen className='rounded-circle  icon bg-light p-3'/>
    </div>
      <div className="card-body text-center">
        <h6 className="text-center fw-bold">PACKING</h6>
        <small className="text-center">Moves over 150 miles from origin to destination</small>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Movers;