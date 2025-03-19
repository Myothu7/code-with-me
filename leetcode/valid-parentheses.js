var isValid = function(s) {
    let response = false;
    if(s.length % 2 != 0) {
        return false
    }
    if((s.includes('(') && s.includes(')')) || (s.includes('{') && s.includes('}')) || (s.includes('[') && s.includes(']'))) {
        response = true;
    }

    if(response){
        for(let i = 0; i < s.length; i++){
            if(i % 2 === 0) {
                if(s[i] == ")" || s[i] == "]" || s[i] == "}") {
                    response = false;
                }
            }
        }
    }
    return response;
}

let res = isValid("([)]");
console.log(res);


