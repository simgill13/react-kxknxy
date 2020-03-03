import React from "react";
import { useDashboard } from "./useDashbord";

const DashBoard = () => {
  const { data, setData, add, deleteObj } = useDashboard();
  // console.log(data);
  return (
    <>
      <div style={{textAlign:'center'}}>
        Select a machine
        <button style={{float:'right'}} onClick={add}> + </button>
      </div>

      {data.map((device, index) => {
        return (
          <div style={{border:'solid'}} key={device.id}>
            <p>{device.label} </p>
            <button onClick={e => deleteObj(index)}> delete </button>
          </div>
        );
      })}
    </>
  );
};

export default DashBoard;
