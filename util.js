export const generateId = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

export const generateObj = (array) => {
  return {
      id: generateId(),
      label: `Washer ${array.length + 1}`,
      status: "Available"
    };
}

