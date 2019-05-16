const strUtils = {

  strArrayContains: (array, str) => (array.indexOf(str) > -1),

  objectPropToArray: (array, prop) => {
    const arr = [array.length];

    array.forEach((value) => {
      arr[array.indexOf(value)] = value[prop];
    });

    return arr;
  },
};

export default strUtils;
