let strs = ["flower","flow","flight"];

const sort = (arr) => {
    for(let i=0; i < arr.length ; i++) 
        {
            if (i+1== arr.length) 
            {
                break;
            }
            if(arr[i].length > arr[i +1].length) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
}

var longestCommonPrefix = function(strs) {

    let result = "";        
    sort(strs);
    if(strs.length == 1) {
        return strs[0];
    }

    let [shortString, ...arr] = strs;
    let flag = true;
    
    for(let outer=0 ; outer <shortString.length ; outer ++) {
        for(let i =0 ; i < arr.length ; i ++) { 
            if(shortString[outer] == arr[i][outer]) {
                flag = true;
            }else {
                flag = false;
                break;
            }
        }
        if(flag){
            result += shortString[outer];
        }else {
            break;
        }
    }
    
    return result;  
};

let res = longestCommonPrefix(strs);
console.log('res',res);

