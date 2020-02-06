const mergeSort = (array, changeState) => {
  console.log(changeState);
  try {
    if (array.length <= 1) return array;
    const middleIdx = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middleIdx);
    const rightHalf = array.slice(middleIdx);
    return mergeSortedArrays(
      mergeSort(leftHalf, changeState),
      mergeSort(rightHalf, changeState),
      changeState
    );
  } catch (err) {
    console.log(err);
  }
};

const mergeSortedArrays = (leftHalf, rightHalf, changeState) => {
  try {
    const sortedArray = new Array(leftHalf.length + rightHalf.length);
    let k = 0;
    let i = 0;
    let j = 0;
    while (i < leftHalf.length && j < rightHalf.length) {
      setTimeout(() => {
        changeState(sortedArray);
      }, 400);
      if (leftHalf[i] <= rightHalf[j]) {
        merge(sortedArray, k++, leftHalf[i++]);
      } else {
        merge(sortedArray, k++, rightHalf[j++]);
      }
    }

    while (i < leftHalf.length) {
      merge(sortedArray, k++, leftHalf[i++]);
      setTimeout(() => {
        changeState(sortedArray);
      }, 400);
    }

    while (j < rightHalf.length) {
      merge(sortedArray, k++, rightHalf[j++]);
      setTimeout(() => {
        changeState(sortedArray);
      }, 60);
    }
    // await wait(20);
    return sortedArray;
  } catch (err) {
    console.log(err);
  }
};

const merge = async (array, index, value) => {
  array[index] = value;
};

const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export default mergeSort;
