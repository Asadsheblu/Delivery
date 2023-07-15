import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">  <h6 className='text-uppercase'><span  className='text-warning fw-bold'>All Points</span> Movers LLC</h6></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <Link className="nav-link active text-white fw-bold" aria-current="page" href="/"><small>HOME</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/About"><small>ABOUT US</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/Service"><small>SERVICES</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/Contact"><small>CONTACT US</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/Blog"><small>BLOG</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/Photo"><small>PHOTO GALLERY</small></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fw-bold" href="/Video"><small>VIDEO GALLERY</small></Link>
        </li>
       
       </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    );
};

export default Navbar;