/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const myMap = new Map();
  const intersect = [];

  nums1.map((num) => {
    myMap.has(num) ? myMap.set(num, myMap.get(num) + 1) : myMap.set(num, 1);
  });

  nums2.map((num) => {
    let val = myMap.get(num);

    if (val > 0) {
      intersect.push(num);
      myMap.set(num, --val);
    }
  });

  return intersect;
};

console.log(intersect([2, 2], [2, 2]));
