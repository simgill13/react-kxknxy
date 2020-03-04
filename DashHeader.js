import React from "react";
import { useDashboard } from "./useDashbord";

const DashHeader = () => {
  const {add} = useDashboard();
  console.log(add)
  return (
    <>
      <div className='dash-header'>
        Select a machine
        <button className='dash-add-machine' onClick={add}>
          +
        </button>
      </div>
    </>
  );
};

export default DashHeader;
