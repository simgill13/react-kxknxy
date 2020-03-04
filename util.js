export const generateId = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

export const generateRandomLetter = () => {
  return  Math.random().toString(36).substring(6,3);
}

export const generateObj = (array) => {
  return {
      id: generateId(),
      label: `Washer ${array.length+ 1}`,
      status: "Available"
    };
}


export const checkData = (addedObj,data) => {
  return data.filter((washer)=>{
      if(washer.label === addedObj.label){
        addedObj.label = `Washer ${generateRandomLetter()}`
        return true
      }
    })
}

