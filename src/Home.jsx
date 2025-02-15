import React from 'react'

const home = () => {
  return (
    <>
    <div className="navbar bg-primary d-flex justify-center">    
    <div className="navbar-center hidden lg:flex align-center">
      <ul className="menu menu-vertical lg:menu-horizontal text-white font-bold">
        <li><a>Home</a></li>
        <li><a>Health Topics</a></li>
        <li><a>Resources</a></li>
        <li><a>About Us</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  </div>

  <div className="section my-3 d-flex justify-center text-center my-6">
    <h1 className='text-3xl'>Your Health, Our Privacy</h1>
    <p className='text-sm my-3'>Explore the latest health information and resources from bayer Healthcare</p>
  
  </div>
  <div className='cards grid grid-cols-3 gap-4 m-3'>
    <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Covid 19 Updates</h2>
            <p>Stay informed about the latest covid and vaccination information</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Covid 19 Updates</h2>
            <p>Stay informed about the latest covid and vaccination information</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Covid 19 Updates</h2>
            <p>Stay informed about the latest covid and vaccination information</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Covid 19 Updates</h2>
            <p>Stay informed about the latest covid and vaccination information</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">Covid 19 Updates</h2>
            <p>Stay informed about the latest covid and vaccination information</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
    </div>
  </>
  )
}

export default home