const sum = () => {
    return new Promise((resolve, reject) => {
        resolve(200);
    })
}

const call = async () => {
    const res = await sum();
    console.log("result", res);
}
call();
console.log("hello");

