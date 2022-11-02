import React from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Add = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const addScenario = () => {
    const scenarios = JSON.parse(localStorage.getItem("scenarios")||"[]")
    scenarios.push({id:uuidv4(),name:name,time:time})
    localStorage.setItem("scenarios",JSON.stringify(scenarios))
  };
  return (
    <div className="main-bg">
      <div className="container p-5">
        <h6>Scenario / add</h6>
        <br />
        <h3>Add Scenario</h3>
        <div className="card  sub-bg ">
          <form>
            <div className="row p-3 ">
              <div className="col-sm-6 firstinput">
                <label for="exampleInputEmail1">Scenario Name</label>
                <br />
                <input
                  type="text"
                  className="form-bg"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label for="exampleInputEmail1">Scenario Time</label>
                <br />
                <input
                  type="text"
                  className="form-bg"
                  required
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          </form>
          <br />
          <div className="p-3 ">
            <button className="Add-btn1" onClick={addScenario}>
              Add
            </button>
            <button className="Add-btn2">Reset</button>
            <button className="Add-btn3">GoBack</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
