import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div class="sidebar">
{/* <!--   This section should be at the top --> */}
  <div class="section">
    <div class="item">Home</div>
    <Link to='/add'  class="item">Add Scenario</Link>
    <div class="item">All Scenarios</div>
    <div class="item">All Vehicie</div>
  </div>
{/* <!--   This section should be at the bottom --> */}
  {/* <div class="section">
    <div class="item">Settings</div>
    <div class="item">Question?</div>
  </div> */}
</div>
    </div>
  )
}

export default Navbar
