import React from 'react';

const Contact = () => {
    return (
        <div className='contact-bg pt-5 pb-2'>
            <div className='text-center fs-4 p-4 fw-bold '><span className='underline'>Contact</span> Us</div>
             <div className='container form-bg'>
       <div className='container'>
            <div className='row p-5'>
            <div className='col-md-6'>
            <label for="exampleInputEmail1" class="form-label text-white">First Name</label>
    <input type="text" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className='col-md-6'>
            <label for="exampleInputEmail1" class="form-label text-white">Last Name</label>
    <input type="text" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className='col-md-6'>
            <label for="exampleInputEmail1" class="form-label text-white">Your Email</label>
    <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className='col-md-6'>
            <label for="exampleInputEmail1" class="form-label text-white">Phone</label>
    <input type="number" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className='col-md-12'>
            <label for="exampleFormControlTextarea1" class="form-label text-white">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='col-md-12 mt-3'>
            <button className='text-center btn btn-light w-100 rounded shadow'>Send</button>
            </div>

            </div>
       </div>
   
            </div>
            <hr/>
          <div className='text-center'>
          <small className='text-center fw-bold text-danger'>Developed BY &copy; AsadSheblu</small>
          </div>
            
        </div>
    );
};

export default Contact;