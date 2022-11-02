import React, { useEffect, useState } from "react";
import "../App.css";

const Scenarios = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("scenarios"));
    setData(result);
    console.log(result);
  },[]);

  return (
    <div>
      <div className="main-bg">
        <h6>All Scenarios</h6>
        <div className="Scenarios-btn">
          <button className="Add-btn1">New Scenario</button>
          <button className="Add-btn2">Add Vechicle</button>
          <button className="Add-btn3">Delete All</button>
        </div>
        <div className="row mt-5 p-5">
          <div className="col-sm-12">
            <div className="card">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Scenario Name</th>
                    <th scope="col">Scenario Time</th>
                    <th scope="col">Number of Vehicles</th>
                    <th scope="col">Add Vechicle</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.time}</td>
                        <td>0</td>
                        <td>
                          <button>add</button>
                        </td>
                        <td>
                          <button>edit</button>
                        </td>
                        <td>
                          <button>delete</button>
                        </td>
                      </tr>
                    );
                  })}

                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scenarios;
