export default [
  {
    title: `Frequency Counters`,
    language: `js`,
    body: `Write a function called **same( )**, which accepts two arrays. The
      function should return true if every value in the array has its
      corresponding value squared in the second array. The frequency of
      values must be the same.`,
    code: `function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    };

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    };
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    };

    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    };
    return true;
  };
      `,
  },
  {
    title: `useReducer`,
    language: `jsx`,
    body: `input–state, dispatch (action)`,
    code: `
    const [state, dispatch] = useReducer(reducerFunction, initialState)`,
  },
  { title: "Big O Notation", language: "js", body: "", code: "" },
];
