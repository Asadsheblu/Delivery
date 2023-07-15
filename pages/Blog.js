import React from 'react';
import soon from "../public/come in soon.gif"
import Image from 'next/image';
const Blog = () => {
    return (
        <div className='container p-5'>
           <div className='text-center p-5'>
           <Image src={soon} className='img-fluid' alt='come in soon'/>

           </div>
        </div>
    );
};

export default Blog;