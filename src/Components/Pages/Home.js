import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='main-bg p-4'>
        <h6>Scenario</h6>
        <div className='row mt-3 p-3'>
                    <div className='col-sm-12'>
                        <div className='card'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Scenario import { } from 'module'</th>
                                        <th scope="col">Scenario Name</th>
                                        <th scope="col">Scenario Time</th>
                                        <th scope="col">Number of Vehicles</th>
                                        <th scope="col">Add Vechicle</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='Home-btn mt-2'>
                            <button className='Add-btn1'>Start simulation</button>  <button className='Add-btn3'>Stop simulation</button>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default Home
