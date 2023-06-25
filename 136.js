var merge = function (nums, l, m, r){
    const nl = m-l+1
    const nr = r-m

    const left = []
    const right = []

    for(let i=0;i<nl;i++){
        left[i] = nums[l+i]
    }

    for(let j=0;j<nr;j++){
        right[j] = nums[m+1+j]
    }

    let il = 0
    let jr = 0
    let k = l

    while(il<nl && jr<nr){
        if (left[il]<=right[jr]){
            nums[k] = left[il]
            il++
        }
        else{
            nums[k] = right[jr]
            jr++
        } 
        k++  
    }

    while(il<nl){
        nums[k] = left[il]
        il++
        k++
    }

    while(jr<nr){
        nums[k] = right[jr]
        jr++
        k++
    }
    
    // console.log('l', l, 'm', m, 'r', r, 'nl', nl, 'nr', nr, 'left', left, 'right', right, nums)

    return nums
}

var mergeSort = function(nums, l, r){

    if(l>=r){
        return;
    }
    const m =l+ Math.floor((r-l)/2);
    mergeSort(nums,l,m);
    mergeSort(nums,m+1,r);
    merge(nums,l,m,r);
    
    return nums
}

var singleNumber = function(nums) {

    let arr = mergeSort(nums, 0 , nums.length-1);

    for(i=0;i<arr.length;i+=2){

        if(arr[i]!=arr[i+1])
            return arr[i]
    }
};

console.log(singleNumber([1,1,2,2,4,5]))
