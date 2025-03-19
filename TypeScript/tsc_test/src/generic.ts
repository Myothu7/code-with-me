interface Blog <Type> {
    id: number;
    name: string;
    data : Type
}


let res: Blog<object> = {
    id: 0,
    name: "blog post",
    data : {
        name: "this is data",
    }
}


let res2: Blog<string> = {
    id: 0,
    name: "blog post",
    data :"data not reach"
}


console.log('Generic obj',res)
console.log('Generic string',res2)