let valid = ["0","1","2","3","4","5","6","7","8","9","10"];

const myAtoi = function(s) {
    let text = s.trim();
    
    // Base Condition
    if(text[0] != "-") {
        if(!valid.includes(text[0])) {
            console.log("this is base statement");
            return "0";
        }
    }else {
        valid.push("-");
    }
    

    let result = "";
    let temp = "";
    //  -142 , 0-1, 289-9
    
    for(let char of text) {
        if(valid.includes(char)){
                temp += char;
                
        }else {
            break;
        }
    }

    };
let s = "-8993u";
let result = myAtoi(s);
console.log("result=>",result);

// console.log('isValid', /[0-9]/.test("0"));