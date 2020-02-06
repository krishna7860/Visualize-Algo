const bubbleSort = async (array, callBack) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        await swap(array, j, j + 1);
        callBack(array);
      }
    }
  }
  return array;
};

const swap = async (array, a, b) => {
  await wait(50);
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
};
const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default bubbleSort;
