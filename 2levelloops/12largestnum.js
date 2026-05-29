//largest number in array
let nums=[75, 10, 50, 200, 25];
let  largest= nums[0];
for(let num=0;num<=nums.length-1;num++){
        if(nums[num]>largest){
            largest=nums[num];
        }
    }

console.log(largest);