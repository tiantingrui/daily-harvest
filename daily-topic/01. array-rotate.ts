const rotate1 = (arr: number[], k: number): number[] => {
  const len = arr.length;
  if (!k || len === 0) return arr;
  const step = Math.abs(k % len); // abs 绝对值 ； k % len 取余，有可能 k > len

  // O(n)
  for (let i = 0; i < step; i++) {
    const n = arr.pop();
    if (n !== null) {
      arr.unshift(n); //! 数组是一个有序结构，unshift 会特别慢 O(n)
    }
  }

  return arr;
};
/**
 * 旋转数组 K 步 - 使用 concat
 * @param arr
 * @param k
 * @returns arr
 */
const rotate2 = (arr: number[], k: number): number[] => {
  const len = arr.length;
  if (!k || len === 0) return arr;
  const step = Math.abs(k % len); // abs 绝对值 ； k % len 取余，有可能 k > len

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, len - step);

  const part3 = part1.concat(part2);
  return part3;
};

// 功能测试
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr1 = rotate1(arr, 3);

// console.info(arr1);

// 性能测试
const arr1 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr1.push(i);
}

console.time("rotate1");
rotate1(arr1, 9 * 10000);
console.timeEnd("rotate1");

const arr2 = [];
for (let i = 0; i < 10 * 10000; i++) {
  arr2.push(i);
}

console.time("rotate2");
rotate2(arr2, 9 * 10000);
console.timeEnd("rotate2");
