import React from "react";
import list from "./data.json";
import {generateObj} from './util'

export const useDashboard = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(list.devices);
  }, []);

  const add = () => {
    setData([...data, generateObj(data)]);
  };

  const deleteObj = i => {
    const filteredItems = data
      .slice(0, i)
      .concat(data.slice(i + 1, data.length));
    setData(filteredItems);
  };
  return {
    data,
    setData,
    add,
    deleteObj
  };
};
