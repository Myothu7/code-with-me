function generic <Type> (arr: Type[]): Type {
    console.log("arr[0", arr[0]);
    return arr[0];
}


generic(['hello', "type", "script", "yae",])