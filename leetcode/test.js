function isValid(s) {
    // A map to relate closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const stack = [];
    console.log("s", s);
    for (const char of s) {
        // console.log("char", char);
        if (char in bracketMap) {
            // Check the top element of the stack or use a placeholder if the stack is empty
            const topElement = stack.length > 0 ? stack.pop() : '#';
            console.log("topELement", topElement);
            if (bracketMap[char] !== topElement) {
                return false;
            }
        } else {
            // Push opening brackets to the stack
            stack.push(char);
        }

    }
    // If the stack is empty, the string is valid
    return stack.length === 0;
}

let res = isValid("(){}[]");
console.log(res);