const strUtils = {

  strArrayContains: (array, str) => {
    let result = false;
    array.forEach((val) => {
      if (val.includes(str)) {
        result = true;
      }
    });
    return result;
  },

  objectPropToArray: (array, prop) => {
    const arr = [array.length];

    array.forEach((value) => {
      arr[array.indexOf(value)] = value[prop];
    });

    return arr;
  },
};

export default strUtils;
