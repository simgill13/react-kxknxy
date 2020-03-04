import React from "react";
import DashHeader from "./DashHeader";
import { useDashboard } from "./useDashbord";

const DashBoard = () => {
  const { data, setData, add, deleteObj, setMoney, money } = useDashboard();

  return (
    <>
      <div className="dash-header">
        Select a machine
        <button className="dash-add-machine" onClick={add}>
          +
        </button>
      </div>
      {data.map((device, index) => {
        return (
          <div style={{ border: "solid" }} key={device.id}>
            <h3 style={{ display: "inline-block", paddingRight: "20px" }}>
              {index + 1}
            </h3>
            <p style={{ display: "inline-block" }}>{device.label} </p>
            <button onClick={e => deleteObj(index)}> delete </button>
          </div>
        );
      })}
      <div style={{ textAlign: "center" }}>
        Balance ${money}
        <button onClick={() => setMoney(money + 5)} style={{ float: "right" }}>
          +
        </button>
      </div>
    </>
  );
};

export default DashBoard;
