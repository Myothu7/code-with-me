const sortArr = (arr) => {
    for(let i=0; i < arr.length ; i++) 
        {
            if (i+1== arr.length) 
            {
                break;
            }
            if(arr[i]> arr[i +1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }

var mergeTwoLists = function(list1, list2) {

    let l1 = list1.length;
    let l2 = list2.length;
    if(!l1) {
        return list2;
    }else if(!l2) {
        return list1;
    }
    let smallLen = (l1 != 0 && l2 != 0) ? (l1 > l2 ? l2 : l1) : 0;

    if(l1 == 0 && l2 == 0) {
        return [];
    }

    let temp = [];
    for(let i = 0; i < smallLen; i++) {
        if(list1[i] < list2[i]){
            temp.push(list1[i]);
            temp.push(list2[i]);
        }else{
            temp.push(list2[i]);
            temp.push(list1[i]);
        }
    }

    if(l1 > l2){
        temp =  [...temp, ...list1.slice(l2-1, l1)]
    }else if(l1 > l2){
        temp = [...temp, ...list2.slice(l1-1, l2)]
    }


    sortArr(temp);
     console.log('sort', temp);
     return temp;
};

let list1 = [1,2,3]
let list2 = [1,4]


let result = mergeTwoLists(list1, list2);
console.log(result);
// console.log(list1.slice(1,list1.length));

console.log("isArray", Array.isArray(result));

