import React from 'react'

const Scenarios = () => {
    return (
        <div>
            <div className='main-bg'>
                <h6>All Scenarios</h6>
                <div className='Scenarios-btn'>
                    <button className='Add-btn1' >New Scenario</button>  <button className='Add-btn2' >Add Vechicle</button>  <button className='Add-btn3' >Delete All</button>
                </div>
                <div className='row mt-5 p-5'>
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
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Scenarios

