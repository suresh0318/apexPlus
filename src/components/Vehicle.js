import React from 'react'
import "../App.css"

const Vehicie = () => {
    return (
        <div>
            <div className='main-bg'>
                <h6>Vehicle/add</h6>
                <h4>Add Vechicle</h4>
                <div className='container p-3'>
                    <div className='card sub-bg p-3 '>

                        <div className='row'>
                            <div className='col-sm-4'>
                                <label>Scenarios List</label>
                                <input type='text' />
                            </div>
                            <div className='col-sm-4'>
                                <label>Vechicie Name</label>
                                <input type='text' />
                            </div>
                            <div className='col-sm-4 mb-4'>
                                <label className='mr-5'>Speed      </label>
                                <input type='text' />
                            </div>

                            <div className='col-sm-4'>
                                <label className='mr-5'>Posiyion X</label>
                                <input type='text' />
                            </div>
                            <div className='col-sm-4'>
                                <label className='mr-5'>Postion Y</label>
                                <input type='text' />
                            </div>
                            <div className='col-sm-4'>
                                <label className='mr-5'>Direction      </label>
                                <input type='text' />
                            </div>
                        </div>
                    </div>
                    <button className='Add-btn1' >Add</button> <button className='Add-btn2'>Reset</button> <button className='Add-btn3'>GoBack</button>

                </div>
            </div>
        </div>
    )
}

export default Vehicie
