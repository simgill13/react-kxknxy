import React from "react";
import list from "./data.json";
import {generateObj,checkData} from './util'

export const useDashboard = () => {
  const [data, setData] = React.useState([]);
  const [money, setMoney] = React.useState(25);

  React.useEffect(() => {
    setData(list.devices);
  }, []);

  const add = () => {
    const addObj = generateObj(data);
    const check = checkData(addObj,data);
    setData([...data, addObj]);
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
    deleteObj,
    money,
    setMoney
  };
};
