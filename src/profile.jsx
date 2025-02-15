import React from 'react'

const profile = () => {
  
  return (
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4 font-bold">
        {/* Sidebar content here */}
        <li><a>Dashboard</a></li>
        <li><a>My Profile</a></li>
        <li><a>Health Metrics</a></li>
        <li><a>Messages</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  )
}

export default profile